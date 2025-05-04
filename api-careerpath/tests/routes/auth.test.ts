import { vi, expect, it, describe } from "vitest";
import { app } from "../../src/index.js";

let mockDbInsertReturn = [{ id: "001", email: "user@email.com" }];
let mockDbSelectReturn: any = [];

vi.mock("../../src/db/index.js", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn(() => mockDbSelectReturn),

    insert: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    returning: vi.fn(() => mockDbInsertReturn),
  },
}));

vi.mock("../../src/helpers/auth.helpers.js", () => ({
  hashPassword: vi.fn().mockResolvedValue("hashed-password"),
}));

vi.mock("../../src/helpers/mailer.js", () => ({
  sendWelcomeEmail: vi.fn().mockResolvedValue(true),
}));

describe("Auth Routes - Sign Up", () => {
  it("allows a user to sign up with the correct info", async () => {
    // Set up to show no user returned
    mockDbSelectReturn = [];

    const response = await app.request("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "user@email.com",
        password: "1234abcd",
        name: "test user",
      }),
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data).toHaveProperty("message", "User created successfully");
    expect(data).toHaveProperty("user");
    expect(data.user).toHaveProperty("id", "001");
    expect(data.user).toHaveProperty("email", "user@email.com");
  });
});
