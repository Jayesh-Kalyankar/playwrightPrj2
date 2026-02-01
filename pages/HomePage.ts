import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  readonly headingText: Locator;
  readonly getStartedBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.headingText = page.locator("h1");
    this.getStartedBtn = page.locator("#get_started_button");

  }

  async verifyHomePageTitle() {
    await this.verifyTitle("Utah Nursing School & Healthcare College | Provo College");
  }

  async clickGetStarted() {
    await this.clickElement(this.getStartedBtn, "Get Started Button");
  }
}
