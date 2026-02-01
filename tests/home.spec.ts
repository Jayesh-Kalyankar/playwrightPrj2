import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Verify Home Page Title", async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto("/");

  await homePage.verifyHomePageTitle();
  await homePage.clickGetStarted();
  await expect(page).toHaveURL(/#gs_form_anchor/);
  
});
