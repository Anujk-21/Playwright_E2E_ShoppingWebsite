import { Page, expect } from "@playwright/test";
import userdata from "../data/userData.json";
export class AccountPage{
    constructor(
        private page: Page
    ){}

    async verifyLoggedIn(name:string){
        await expect(this.page.locator("//a[text()=' Logged in as ']")).toContainText(userdata.firstname);

        }

    async addFirstProductToCart(){
        await this.page.locator("//a[text()='Add to cart']").first().click();
        await this.page.locator("//button[text()='Continue Shopping']").click();
    }
}