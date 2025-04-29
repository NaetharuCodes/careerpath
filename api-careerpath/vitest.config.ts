import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    exclude: ["**/node_modules/**", "**/dist/**"],
    coverage: {
      provider: "v8", // or 'c8'
    },
  },
});
