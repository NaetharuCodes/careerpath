import { beforeAll, afterAll, afterEach, vi } from "vitest";
import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

vi.mock("nodemailer", () => {
  return {
    default: {
      createTransport: vi.fn().mockReturnValue({
        sendMail: vi.fn().mockResolvedValue({ messageId: "test-message-id" }),
      }),
    },
  };
});

beforeAll(() => {
  // Setup test database or other global resources
});

afterAll(() => {
  // Clean up resources
});

afterEach(() => {
  // Reset mocks between tests
  vi.clearAllMocks();
});
