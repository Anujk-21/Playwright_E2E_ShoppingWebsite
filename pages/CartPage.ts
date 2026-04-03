import { expect, Page } from "@playwright/test";

export class CartPage{
    constructor(
        private page: Page,

    ){}

    async cartOperation(){
        await this.page.locator("//a[text()=' Cart']").click();
        await expect(this.page.locator("#cart_info")).toBeVisible();
        await this.page.locator("//a[text()='Proceed To Checkout']").click();
    }
}