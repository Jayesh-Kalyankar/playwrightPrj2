import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";
import { PageTitles } from '../data/pageTitles';
import { expect } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { logger } from "../utils/logger";

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  //-------------------------------------------------------------------------------
  menuButton() {
    return this.page.locator("#react-burger-menu-btn");
  }

  LogoutButton() {
    return this.page.locator("#logout_sidebar_link");
  }

  async logout(): Promise<LoginPage> {
    await this.clickElement(this.menuButton(), "Menu Button");
    logger.debug('Menu button clicked');
    await this.clickElement(this.LogoutButton(), "Logout Button");
    logger.debug('Logout button clicked');
    return new LoginPage(this.page);
  }

  //----------------------------------------------------------------------------------

  async validateLogoutSuccess(): Promise<this> {
    expect(this.page.url()).toBe("https://www.saucedemo.com/");
    console.log("Logout successful, navigated back to login page.");
    return this;
  }

}
