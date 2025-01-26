import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  // Test: Verifies that isActivePath correctly identifies when the currentPath is an exact match for the href
  it("returns true when current path matches href exactly", () => {
    const href = "/";
    const currentPath = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // Test: Ensures that the root path / is treated the same as /index.html
  it("returns true for root path when path is '/' or '/index.html'", () => {
    const href = "/";
    const currentPath = "/index.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // Test: Validates that the function correctly identifies when the currentPath contains the href as a substring
  it("returns true when current path includes the href", () => {
    const href = "/register";
    const currentPath = "/register/index.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  // Test: Ensures the function properly returns false when the href and currentPath do not match
  it("returns false when paths don’t match", () => {
    const href = "/index.html";
    const currentPath = "/";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
