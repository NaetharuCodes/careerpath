import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { db } from "./db/index.js";
import { logger } from "hono/logger";
import type { Context, Next } from "hono";
import auth from "./routes/auth.routes.js";

const app = new Hono();

// Set up the middleware
app.use("*", logger());

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
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
