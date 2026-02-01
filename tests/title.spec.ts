import { test, expect } from "@playwright/test";
import { AppConfig } from "../config/app.config";

test("Verify page title", async ({ page })=>{
  await page.goto(AppConfig.baseUrl);
  let title:String = await page.title();
  console.log("Page title is: "+title);
  await expect(page).toHaveTitle("Utah Nursing School & Healthcare College | Provo College");
});