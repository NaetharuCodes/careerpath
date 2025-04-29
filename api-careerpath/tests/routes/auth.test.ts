import { describe, it, expect, vi, beforeEach } from "vitest";
import { app } from "../../src/index.js";

// Create mock implementation with controllable returns
let mockUserResult = [
  {
    id: 1,
    email: "test@example.com",
    name: "Test User",
    passwordHash: "hashed_password",
    disabled: false,
    verified: true,
  },
];

let mockPasswordCompare = true;

vi.mock("../../src/db/index.js", () => ({
  db: {
    select: vi.fn().mockReturnThis(),
    from: vi.fn().mockReturnThis(),
    where: vi.fn().mockReturnThis(),
    limit: vi.fn(() => mockUserResult),
  },
}));

vi.mock("../../src/helpers/auth.helpers.js", () => ({
  comparePasswords: vi.fn(() => Promise.resolve(mockPasswordCompare)),
  generateToken: vi.fn().mockReturnValue("mocked-jwt-token"),
}));

describe("Auth Routes - Login", () => {
  beforeEach(() => {
    mockUserResult = [
      {
        id: 1,
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed_password",
        disabled: false,
        verified: true,
      },
    ];
    mockPasswordCompare = true;
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

  it("should return 400 with invalid credentials (user not found)", async () => {
    mockUserResult = [];

    const response = await app.request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "nonexistent@example.com",
        password: "password123",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Invalid Credentials");
  });

  it("should return 400 with invalid credentials (wrong password)", async () => {
    mockUserResult = [
      {
        id: 1,
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed_password",
        disabled: false,
      },
    ];

    mockPasswordCompare = false;

    const response = await app.request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "test@example.com",
        password: "wrong_password",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Invalid Credentials");
  });

  it("should return 401 when account is disabled", async () => {
    mockUserResult = [
      {
        id: 1,
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed_password",
        disabled: true, // Account is disabled
      },
    ];

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

    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data).toHaveProperty("error", "User account has been closed");
  });

  it("should return 400 when missing required fields", async () => {
    const response = await app.request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Missing email field
        password: "password123",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Invalid Credentials");
  });

  it("should return 500 when server error occurs", async () => {
    // Simulate an error during JSON parsing
    const originalJsonMethod = Request.prototype.json;
    Request.prototype.json = vi.fn().mockImplementationOnce(() => {
      throw new Error("JSON parsing error");
    });

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

    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Failed login");

    // Restore the original method
    Request.prototype.json = originalJsonMethod;
  });

  it("should deny login for unverified accounts", async () => {
    // User exists but is not verified
    mockUserResult = [
      {
        id: 1,
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed_password",
        disabled: false,
        verified: false,
      } as any,
    ];

    // Password comparison succeeds
    mockPasswordCompare = true;

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

    expect(response.status).toBe(401);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Email not verified");
  });
});
