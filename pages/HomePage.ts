import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";
import { PageTitles } from '../data/pageTitles';

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

  async openPage(): Promise<this> {
    return (await this.open('/')).validateTitle(PageTitles.home);
  }

}
