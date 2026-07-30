import { test, expect } from "@playwright/test";

test("home page loads with expected heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /Personal Care and Pet Care Manufacturing/i }),
  ).toBeVisible();
});

test("home page has exactly one H1", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
});
