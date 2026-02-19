//import { test, expect } from "@playwright/test";
import { EnvConfig } from "../config/env.config";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { test , expect } from "../fixtures/test-Fixtures";
import { logger } from '../utils/logger';

// Test to validate login and logout functionality using Page Object Model
/*
test("Login to application - using page object model", async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.login(EnvConfig.username, EnvConfig.password);
    await loginPage.validateLoginSuccess();

    const homePage = new HomePage(page);
    await homePage.logout();
    await homePage.validateLogoutSuccess();

});
*/



// Another way to write the same test using method chaining
/*
test("Another Way Login to application - using page object model", async ({ page }) => {

  const homePage = await new LoginPage(page).login(EnvConfig.username, EnvConfig.password);

  await homePage.validateLoginSuccess();

  const loginPage = await homePage.logout();
  await loginPage.validateLogoutSuccess();

});

*/


test("Login using Fixture", async ( { loginPage }) => {
    logger.info('Test started');
    const homePage = await loginPage.login(EnvConfig.username, EnvConfig.password);
    logger.debug('Login performed');
    await loginPage.validateLoginSuccess();
    logger.debug('Login validated successfully');
    await homePage.logout();
    logger.debug('Logout performed');
    await homePage.validateLogoutSuccess();
    logger.info('Test completed');

});