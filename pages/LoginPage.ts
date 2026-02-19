import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";
import { HomePage } from "./HomePage";
import { logger } from "../utils/logger";


export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }
    //----------------------------------------------------------------------------------------------
    inputByPlaceholder(label: string) {
        return this.page.getByPlaceholder(label);
    }

    loginButton() {
        return this.page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string): Promise<HomePage> {
        await this.page.goto("https://www.saucedemo.com/");
        logger.debug('Navigated to login page');
        await this.fillInput(this.inputByPlaceholder("Username"), username, "Username Input");
        logger.debug('Username entered');
        await this.fillInput(this.inputByPlaceholder("Password"), password, "Password Input");
        logger.debug('Password entered');
        await this.clickElement(this.loginButton(), "Login Button");
        logger.debug('Login button clicked');
        return new HomePage(this.page);
    }

    //-------------------------------------------------------------------------------------------------



    async validateLoginSuccess(): Promise<this> {
        expect(this.page.url()).toBe("https://www.saucedemo.com/inventory.html");
        logger.info('Login successful, navigated to inventory page.');
        expect(this.page).toHaveTitle("Swag Labs");
        logger.info('Page title validated successfully.');
        return this;
    }



}