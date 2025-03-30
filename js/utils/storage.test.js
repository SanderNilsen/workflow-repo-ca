import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  // Test: Ensure it returns the username if a user exists in storage
  it("should return the username from storage if user exists", () => {
    const user = { name: "Ola" };
    // Save a user object to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    const result = getUsername();

    expect(result).toBe("Ola");
  });

  // Test: Ensure it returns null when no user exists in storage
  it("should return null if no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBeNull();
  });
});
