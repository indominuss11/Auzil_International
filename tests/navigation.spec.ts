import { test, expect } from "@playwright/test";

test("main navigation links work", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.locator("h1")).toBeVisible();
});

test("products dropdown reveals category links", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Products" });
  await trigger.click();
  await expect(page.getByRole("menuitem", { name: "Personal Care" })).toBeVisible();
  await page.getByRole("menuitem", { name: "Personal Care" }).click();
  await expect(page).toHaveURL(/\/products\/personal-care$/);
});

test("product category links from the products hub work", async ({ page }) => {
  await page.goto("/products");
  await page.getByRole("link", { name: /Explore Pet Care/i }).click();
  await expect(page).toHaveURL(/\/products\/pet-care$/);
});
