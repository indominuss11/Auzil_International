import { test, expect } from "@playwright/test";

test("quote form rejects submission with missing required fields", async ({ page }) => {
  await page.goto("/request-a-quote");
  const submitButton = page.getByRole("button", { name: "Submit Enquiry" });
  await submitButton.click();

  // Native HTML5 validation should block submission; the name field should
  // be the first to report as invalid.
  const nameInput = page.locator("#name");
  const isValid = await nameInput.evaluate((el: HTMLInputElement) => el.checkValidity());
  expect(isValid).toBeFalsy();
});

test("quote form shows validation-friendly required fields", async ({ page }) => {
  await page.goto("/request-a-quote");
  await expect(page.getByLabel(/Full name/)).toHaveAttribute("required", "");
  await expect(page.getByLabel(/Work email/)).toHaveAttribute("required", "");
});
