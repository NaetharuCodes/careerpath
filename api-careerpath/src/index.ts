import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { db } from "./db/index.js";
import { logger } from "hono/logger";
import type { Context, Next } from "hono";
import auth from "./routes/auth.routes.js";
import { cors } from "hono/cors";

export const app = new Hono();

// Set up the middleware
app.use("*", logger());

app.use(
  "*",
  cors({
    origin: ["http://localhost:5173", "https://yourproductiondomain.com"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

// Add database to context
app.use("*", async (c: Context, next: Next) => {
  c.set("db", db);
  await next();
});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/auth", auth);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  console.log(`Server is running on http://localhost:3000`)
);
