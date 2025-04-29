// THIS IS A SIMPLE TEST TO VALIDATE THAT THE VITEST CONFIG IS WORKING

import { describe, it, expect } from "vitest";

describe("basic vitest setup", () => {
  it("should verify that vitest is working", () => {
    expect(2 + 2).toBe(4);
  });
});
