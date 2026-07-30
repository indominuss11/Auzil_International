import { test, expect } from "@playwright/test";

const pages = ["/", "/about", "/manufacturing", "/products", "/contact"];

for (const path of pages) {
  test(`${path} has a title and meta description`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(/.+/);
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description?.length).toBeGreaterThan(0);
  });

  test(`${path} has exactly one H1`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
  });
}
