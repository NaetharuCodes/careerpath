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
    const existingUser = db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    if (existingUser.length > 0) {
      return c.json({ error: "User already exists" }, 409);
    }

    const hashedPassword = await hashPassword(password);

    const [user] = await db
      .insert(users)
      .values({
        email,
        passwordHash: hashedPassword,
        name,
      })
      .returning({ id: users.id, email: users.email });

    const token = generateToken(user.id);

    return c.json(
      {
        message: "User created successfully",
        user: { id: user.id, email: user.email },
        token,
      },
      201
    );
  } catch (error) {
    console.error("Signup error:", error);
    return c.json({ error: "Failed to create user" }, 500);
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

    const isMatch = await comparePasswords(password, user.passwordHash);

    if (!isMatch) {
      return c.json({ error: "Invalid Credentials" }, 400);
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
      const expireTime = addMinutes(new Date(), 15);

      const userExists = user.length > 0;

      if (userExists) {
        await db.insert(resetTokens).values({
          userId: user[0].id,
          token: resetToken,
          expiresAt: expireTime,
        });
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

export default auth;
