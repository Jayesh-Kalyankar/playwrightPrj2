import { chromium } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { EnvConfig } from "./config/env.config";

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.login(EnvConfig.username, EnvConfig.password);
  await loginPage.validateLoginSuccess();

  await page.context().storageState({ path: "auth.json" });
  await browser.close();
}

export default globalSetup;
