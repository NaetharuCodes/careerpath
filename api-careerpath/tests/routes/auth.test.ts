import { describe, it, expect, vi, beforeEach } from "vitest";
import { app } from "../../src/index.js";

vi.mock("../../src/helpers/auth.helpers.js", () => ({
  comparePasswords: vi.fn().mockResolvedValue(true),
  generateToken: vi.fn().mockReturnValue("mocked-jwt-token"),
}));

vi.mock("../../src/db/index.js", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnValue([
      {
        id: 1,
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed_password",
        disabled: false,
      },
    ]),
  },
}));

describe("Auth Routes - Login", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should login successfully with valid credentials", async () => {
    const response = await app.request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "password123",
      }),
    });

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("message", "Login Successful");
    expect(data).toHaveProperty("token");
    expect(data).toHaveProperty("user");
    expect(data.user).toHaveProperty("id");
    expect(data.user).toHaveProperty("email", "test@example.com");
  });
});
