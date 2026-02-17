import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base/BasePage";
import { HomePage } from "./HomePage";


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
        await this.fillInput(this.inputByPlaceholder("Username"), username, "Username Input");
        await this.fillInput(this.inputByPlaceholder("Password"), password, "Password Input");
        await this.clickElement(this.loginButton(), "Login Button");
        return new HomePage(this.page);
    }

    //-------------------------------------------------------------------------------------------------



    async validateLoginSuccess(): Promise<this> {
        expect(this.page.url()).toBe("https://www.saucedemo.com/inventory.html");
        expect(this.page).toHaveTitle("Swag Labs");
        console.log("Login successful, navigated to inventory page.");
        return this;
    }



}