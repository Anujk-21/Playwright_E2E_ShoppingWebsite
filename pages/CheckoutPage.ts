import { Page,expect } from "@playwright/test";

export class CheckoutPage{
    constructor(
        private page:Page
    ){}

    async addressVerify(address:string){
        await expect(this.page.locator("#address_delivery")).toContainText(address);
        await expect(this.page.locator("#address_invoice")).toContainText(address);
    }

    async deleteAccount(){
        await this.page.locator("//a[text()=' Delete Account']").click();
        await this.page.locator("//b[text()='Account Deleted!']").isVisible();
        await this.page.locator("//a[text()='Continue']").click()

    }
}