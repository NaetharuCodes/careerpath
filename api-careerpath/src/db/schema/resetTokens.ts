import {
  serial,
  varchar,
  timestamp,
  boolean,
  pgTable,
  integer,
} from "drizzle-orm/pg-core";
import { users } from "./users.js";

export const resetTokens = pgTable("resetTokens", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  token: varchar("token", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  expiresAt: timestamp("expires_at").defaultNow().notNull(),
  used: boolean().default(false),
});
