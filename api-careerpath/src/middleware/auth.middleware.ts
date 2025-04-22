import type { Context, Next } from "hono";
import { verifyToken } from "../helpers/auth.helpers.js";

export async function authMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Authentication required" }, 401);
  }

  const token = authHeader.replace("Bearer ", "");
  const payload = verifyToken(token);

  if (!payload) {
    return c.json({ error: "Invalid or expired token" });
  }

  c.set("user", payload);

  await next();
}
