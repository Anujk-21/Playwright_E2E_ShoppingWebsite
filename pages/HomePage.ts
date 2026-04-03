import { Page } from "@playwright/test";

export class HomePage{
    constructor(
        private page: Page
    ){}

    async goto(){
        await this.page.goto('');
        await this.page.waitForLoadState('networkidle');
    }// navigate to base url which is defined in config.ts

    async verifyHomePageLoaded(){
        await this.page.locator('#slider-carousel').isVisible();
    }// it will check that homepage loaded or not.

    async clickSignupLogin(){
        await this.page.locator("//a[text()=' Signup / Login']").click();
    }
}