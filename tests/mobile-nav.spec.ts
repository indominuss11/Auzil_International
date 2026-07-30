import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Pixel 7"] });

test("mobile navigation opens and closes with Escape", async ({ page }) => {
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open menu" });
  await menuButton.click();
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toBeHidden();
});

test("mobile navigation closes after navigating to a route", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("dialog").getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toBeHidden();
});

test("no horizontal overflow at mobile width", async ({ page }) => {
  await page.goto("/");
  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBeFalsy();
});
