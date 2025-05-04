import { Hono } from "hono";
import type { Context } from "hono";
import { z } from "zod";
import { users } from "../db/schema/users.js";
import { resetTokens } from "../db/schema/resetTokens.js";
import { eq } from "drizzle-orm";
import {
  comparePasswords,
  generateToken,
  hashPassword,
} from "../helpers/auth.helpers.js";
import crypto from "crypto";
import { addMinutes } from "../helpers/date.js";
import chronofuzz from "chronofuzz";
import { sendPasswordResetEmail, sendWelcomeEmail } from "../helpers/mailer.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const auth = new Hono();

auth.post("/signup", async (c: Context) => {
  try {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
      name: z.string(),
    });

    const body = await c.req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return c.json(
        { error: "Invalid input", details: result.error.errors },
        400
      );
    }

    const { email, password, name } = result.data;

    const db = c.get("db");

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    const hashedPassword = await hashPassword(password);
    const validationToken = crypto.randomBytes(32).toString("hex");
    const validationExpiresTime = addMinutes(new Date(), 15 * 60);

    // There is no existing user and so we make a new account
    if (!existingUser[0]) {
      console.log("No existing user", existingUser);

      const [user] = await db
        .insert(users)
        .values({
          passwordHash: hashedPassword,
          name,
          email,
          validationToken,
          validationExpiresTime,
        })
        .returning({ id: users.id, email: users.email });

      try {
        sendWelcomeEmail(email, validationToken);
      } catch (emailError) {
        return c.json(
          {
            error: "Error sending authentication token to email address",
          },
          500
        );
      }
      return c.json(
        {
          message: "User created successfully",
          user: { id: user.id, email: user.email },
        },
        201
      );
    }

    // if the user already exists but needs a new verification token
    if (!existingUser[0].verified) {
      console.log("not yet validated");

      const [user] = await db
        .update(users)
        .set({
          passwordHash: hashedPassword,
          name,
          validationToken,
          validationExpiresTime,
        })
        .where(eq(users.id, existingUser[0].id))
        .returning({ id: users.id, email: users.email });

      try {
        sendWelcomeEmail(email, validationToken);
      } catch (emailError) {
        return c.json(
          {
            error: "Error sending authentication token to email address",
          },
          500
        );
      }

      return c.json(
        {
          message: "User created successfully",
          user: { id: user.id, email: user.email },
        },
        201
      );
    }

    return c.json(
      {
        error: "User already exists",
      },
      400
    );
  } catch (error) {
    console.error("Signup error:", error);
    return c.json({ error: "Failed to create user" }, 500);
  }
});

auth.patch("/verify", async (c: Context) => {
  try {
    const schema = z.string();

    const token = c.req.query("token");
    const request = schema.safeParse(token);

    if (!request.success || !token) {
      return c.json(
        {
          error: "Invalid token",
        },
        401
      );
    }

    const db = c.get("db");

    // Check the validation token is active
    const [isTokenActive] = await db
      .select()
      .from(users)
      .where(eq(users.validationToken, token))
      .limit(1);

    if (
      isTokenActive.validationExpiresTime < new Date() ||
      isTokenActive.verified
    ) {
      return c.json(
        {
          error: "Verification not possible",
        },
        401
      );
    }

    const [user] = await db
      .update(users)
      .set({ verified: true })
      .where(eq(users.validationToken, token))
      .returning({ id: users.id, email: users.email, name: users.name });

    const jwtToken = generateToken(user.id);

    return c.json({
      message: "Validation Successful",
      user: { id: user.id, email: user.email, name: user.name },
      jwtToken,
    });
  } catch (error) {
    console.error("Validation error:", error);
    return c.json({ error: "Failed to validate email address" }, 500);
  }
});

auth.post("/login", async (c: Context) => {
  try {
    const schema = z.object({
      email: z.string().email(),
      password: z.string(),
    });

    const body = await c.req.json();
    const request = schema.safeParse(body);

    if (!request.success) {
      return c.json(
        {
          error: "Invalid Credentials",
        },
        400
      );
    }

    const { email, password } = request.data;
    const db = c.get("db");

    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (!user) {
      console.log("no user");
      return c.json({ error: "Invalid Credentials" }, 400);
    }

    if (user.disabled) {
      console.log("User account has been closed");
      return c.json({ error: "User account has been closed" }, 401);
    }

    const isMatch = await comparePasswords(password, user.passwordHash);

    if (!isMatch) {
      return c.json({ error: "Invalid Credentials" }, 400);
    }

    if (!user.verified) {
      console.log("Invalid email");
      return c.json({ error: "Email not verified" }, 401);
    }

    const token = generateToken(user.id);

    return c.json({
      message: "Login Successful",
      user: { id: user.id, email: user.email, name: user.name },
      token,
    });
  } catch (error) {
    console.log("login error:", error);
    return c.json({ error: "Failed login" }, 500);
  }
});

// Using cronofuzz to normalize processing time regardless of if user exists.
auth.post(
  "/forgot",
  chronofuzz.hono({ baseTime: 2, jitterRange: 4 }),
  async (c: Context) => {
    try {
      const schema = z.object({
        email: z.string().email("Please provide a valid email address"),
      });

      const body = await c.req.json();
      const result = schema.safeParse(body);

      if (!result.success) {
        return c.json({
          error: "Invalid input",
          details: result.error.errors,
        });
      }

      const { email } = result.data;
      const db = c.get("db");
      const user = await db.select().from(users).where(eq(users.email, email));

      const resetToken = crypto.randomBytes(32).toString("hex");
      const expireTime = addMinutes(new Date(), 15 * 60);

      const userExists = user.length > 0;

      if (userExists) {
        await db.insert(resetTokens).values({
          userId: user[0].id,
          token: resetToken,
          expiresAt: expireTime,
        });

        try {
          await sendPasswordResetEmail(email, resetToken);
        } catch (emailError) {
          console.error("Email sending failed: ", emailError);
          return c.json({
            message: "Reset Processed",
          });
        }
      }

      return c.json({
        message: "Reset Processed",
      });
    } catch (error) {
      console.error("Password Forgotten Error:", error);
      return c.json({ error: "Failed to handle forgot password" }, 500);
    }
  }
);

auth.patch("/reset", async (c: Context) => {
  try {
    const schema = z.string();

    const tokenFromQuery = c.req.query("token");

    if (!tokenFromQuery) {
      return c.json(
        {
          error: "Missing Reset Token",
        },
        400
      );
    }

    const result = schema.safeParse(tokenFromQuery);

    if (!result.success) {
      return c.json(
        {
          error: "Invalid Token",
        },
        400
      );
    }

    const passwordSchema = z.string().min(8);

    const { newPassword } = await c.req.json();
    const passwordRequest = passwordSchema.safeParse(newPassword);

    if (!passwordRequest) {
      return c.json(
        {
          error: "Invalid Token",
        },
        400
      );
    }

    console.log(newPassword);
    const hashedPassword = await hashPassword(newPassword);

    const db = c.get("db");

    const dbToken = await db
      .select()
      .from(resetTokens)
      .where(eq(resetTokens.token, tokenFromQuery))
      .limit(1);

    if (dbToken.length < 1) {
      return c.json(
        {
          error: "Invalid Token",
        },
        400
      );
    }

    const expires = dbToken[0].expiresAt;

    if (expires < new Date()) {
      return c.json(
        {
          error: "Token expired",
        },
        400
      );
    }

    const userId = dbToken[0].userId;

    await db
      .update(users)
      .set({ passwordHash: hashedPassword, updatedAt: new Date() })
      .where(eq(users.id, userId));

    await db
      .update(resetTokens)
      .set({ used: true, updatedAt: new Date() })
      .where(eq(resetTokens.token, tokenFromQuery));

    return c.json({
      message: "done",
    });
  } catch (error) {
    console.error("Error processing password reset:", error);
    return c.json({ error: "Failed to process password reset" }, 500);
  }
});

auth.patch("/disable", authMiddleware, async (c: Context) => {
  try {
    const user = c.get("user");

    if (!user.id) {
      return c.json(
        {
          error: "Missing user id",
        },
        400
      );
    }

    const db = c.get("db");

    await db.update(users).set({ disabled: true }).where(eq(users.id, user.id));

    return c.json(
      {
        message: "Account disabled",
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json(
      {
        message: "Failed to disabled account",
      },
      500
    );
  }
});

export default auth;
