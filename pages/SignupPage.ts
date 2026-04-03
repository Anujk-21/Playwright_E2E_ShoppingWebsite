import { Page } from "@playwright/test";
import data from '../data/userData.json';

export class SignupPage{
    constructor(
        private page: Page
    ){}

    async fillSignupForm(name: string, email:string){
        await this.page.getByPlaceholder('Name').fill(name);
        await this.page.locator("//input[@data-qa='signup-email']").fill(email);
        await this.page.locator("//button[text()='Signup']").click();
    }

    async completeAccountDetails(data:any){
        // await this.page.locator('#id_gender1').check();
    await this.page.locator('#password').fill(data.password);
    await this.page.locator('#days').selectOption(data.dob.day);
    await this.page.locator('#months').selectOption(data.dob.month);
    await this.page.locator('#years').selectOption(data.dob.year);
    await this.page.locator('#first_name').fill(data.firstname);
    await this.page.locator('#last_name').fill(data.lastname);
    await this.page.locator('#address1').fill(data.address);
    await this.page.locator('#state').fill(data.state);
    await this.page.locator('#city').fill(data.city);
    await this.page.locator('#zipcode').fill(data.zipcode);
    await this.page.locator('#mobile_number').fill(data.mobile);
    await this.page.locator("//button[text()='Create Account']").click();
    }

    async verifyAccountCreated(){
        await this.page.locator("//b[text()='Account Created!']").isVisible();
        await this.page.locator("//a[text()='Continue']").click();
    }
}