import { test, expect } from "@playwright/test";

test("catalogues page shows the empty state when nothing is published", async ({ page }) => {
  await page.goto("/catalogues");
  await expect(
    page.getByText(/product catalogues are currently being updated/i),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Contact Our Team" })).toBeVisible();
});
