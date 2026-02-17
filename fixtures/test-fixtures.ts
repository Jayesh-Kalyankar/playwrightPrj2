import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"
import { EnvConfig } from "../config/env.config";

type MyFixture = {
    loginPage: LoginPage
}


export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});


export { expect } from "@playwright/test";