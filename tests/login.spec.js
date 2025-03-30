import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto("/login");

    // Fill in the email and password field
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify if we see logout button - means we're logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("user sees an error message with invalid login credentials", async ({
    page,
  }) => {
    // Navigate to the login page
    await page.goto("/login");

    // Fill in invalid email and password
    await page.locator('input[name="email"]').fill("invalid@example.com");
    await page.locator('input[name="password"]').fill("wrongpassword");

    // Click the login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify the error message is displayed
    const errorMessage = page.getByRole("alert");
    await expect(errorMessage).toBeVisible();
  });
});
