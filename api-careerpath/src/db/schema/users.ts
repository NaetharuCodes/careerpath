import {
  serial,
  varchar,
  timestamp,
  boolean,
  pgTable,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  verified: boolean().default(false),
  validationToken: varchar("validation_token"),
  validationExpiresTime: timestamp("validation_expires_time"),
  disabled: boolean().default(false),
});
