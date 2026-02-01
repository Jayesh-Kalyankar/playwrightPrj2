import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
    //Click element safely
  async clickElement(locator: Locator, elementName: string) {
    try {
      await locator.waitFor({ state: "visible", timeout: 5000 });
      await locator.click();
      console.log(`Clicked on: ${elementName}`);
    } catch (error) {
      console.error(`Failed to click: ${elementName}`);
      await this.takeScreenshot(`click-error-${elementName}`);
      throw error;
    }
  }

   // Fill input safely
  async fillInput(locator: Locator, value: string, fieldName: string) {
    try {
      await locator.waitFor({ state: "visible", timeout: 5000 });
      await locator.fill(value);
      console.log(`Filled ${fieldName} with value: ${value}`);
    } catch (error) {
      console.error(`Failed to fill: ${fieldName}`);
      await this.takeScreenshot(`fill-error-${fieldName}`);
      throw error;
    }
  }

  // Wait for element
  async waitForElement(locator: Locator, elementName: string) {
    try {
      await locator.waitFor({ state: "visible", timeout: 5000 });
      console.log(`Element visible: ${elementName}`);
    } catch (error) {
      console.error(`Element not visible: ${elementName}`);
      await this.takeScreenshot(`wait-error-${elementName}`);
      throw error;
    }
  }

  // Scroll to element
  async scrollTo(locator: Locator, elementName: string) {
    try {
      await locator.scrollIntoViewIfNeeded();
      console.log(`Scrolled to: ${elementName}`);
    } catch (error) {
      console.error(`Failed to scroll: ${elementName}`);
      await this.takeScreenshot(`scroll-error-${elementName}`);
      throw error;
    }
  }

  // Take Screenshot
  async takeScreenshot(fileName: string) {
    await this.page.screenshot({
      path: `screenshots/${fileName}.png`,
      fullPage: true,
    });
    console.log(`Screenshot saved: ${fileName}.png`);
  }

   // Verify Page Title (common use case)
  async verifyTitle(expectedTitle: string) {
    try {
      await expect(this.page).toHaveTitle(expectedTitle);
      console.log(`Title Verified: ${expectedTitle}`);
    } catch (error) {
      console.error(`Title Verification Failed`);
      await this.takeScreenshot("title-verification-failed");
      throw error;
    }
  }
}