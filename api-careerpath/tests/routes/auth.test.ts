import { vi, expect, it, describe } from "vitest";
import { app } from "../../src/index.js";
import { addMinutes } from "../../src/helpers/date.js";

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

    update: vi.fn().mockReturnThis(),
    set: vi.fn().mockReturnThis(),
  },
}));

vi.mock("../../src/helpers/auth.helpers.js", () => ({
  hashPassword: vi.fn().mockResolvedValue("hashed-password"),
  generateToken: vi.fn().mockReturnValue("validToken"),
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

  it("updates the user and sends a new mail if the account is not yet verified", async () => {
    mockDbSelectReturn = [
      {
        id: "001",
        name: "test user",
        email: "user@email.com",
        password: "somenewpassword",
        verified: false,
      },
    ];

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

  it("returns a 400 error if the user already exists and is verified", async () => {
    mockDbSelectReturn = [
      {
        id: "001",
        name: "test user",
        email: "user@email.com",
        password: "somenewpassword",
        verified: true,
      },
    ];

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

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "User already exists");
  });

  it("should return a 400 error and invalid input if password is too short", async () => {
    mockDbSelectReturn = [];

    const response = await app.request("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "user@email.com",
        password: "12",
        name: "test user",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Invalid input");
  });

  it("should return a 400 error and invalid input email is malformed", async () => {
    mockDbSelectReturn = [];

    const response = await app.request("/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "user_email.com",
        password: "1234abcd",
        name: "test user",
      }),
    });

    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data).toHaveProperty("error", "Invalid input");
  });
});

describe("Auth Routes - Verify", () => {
  mockDbSelectReturn = [
    {
      id: "001",
      name: "test user",
      email: "user@email.com",
      password: "somenewpassword",
      verified: false,
      validationToken: "validToken",
      validationExpiresTime: addMinutes(new Date(), 15 * 60),
    },
  ];

  it("returns 200 when given a valid token", async () => {
    const response = await app.request("/auth/verify?token=validToken", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data).toHaveProperty("message", "Validation Successful");
    console.log(data);
    expect(data).toHaveProperty("user");
    expect(data.user).toHaveProperty("id", "001");
    expect(data.user).toHaveProperty("email", "user@email.com");
    expect(data.jwtToken).toContain("validToken");
  });

  it("returns a 401 when token is missing", async () => {
    const response = await app.request("/auth/verify", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBe(401);
  });

  it("returns a 401 when token is missing", async () => {
    const response = await app.request("/auth/verify", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBe(401);
  });

  it("returns a 401 when token does not match", async () => {
    const response = await app.request("/auth/verify?token=wrongvalue", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBe(401);
  });
});
