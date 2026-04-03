import { When, Then, Given } from "@cucumber/cucumber";
import { POmanager } from "../../pages/POmanager";
import userdata from "../../data/userData.json";
import playwright  from "@playwright/test";
import { chromium } from '@playwright/test';




Given("a login to Ecommerce application and SignIn", async function () {
  // Write code here that turns the phrase above into concrete actions
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  this.pom = new POmanager(page);
  this.Home = this.pom.getHomePage();
  this.Cart = this.pom.getCartPage();
  this.Checkout = this.pom.getCheckoutPage();
  this.Signup = this.pom.getSignupPage();
  this.Account = this.pom.getAccountPage();

  await this.Home.goto();
  await this.Home.verifyHomePageLoaded();
  await this.Home.clickSignupLogin();
});

When("Complete signup process and creat account", async function () {
  // Write code here that turns the phrase above into concrete actions

//   const Signup = pom.getSignupPage();

  await this.Signup.fillSignupForm(userdata.name, userdata.email);
  await this.Signup.completeAccountDetails(userdata);
  await this.Signup.verifyAccountCreated();
});

Then("verify loginIn and add first product with checkout", async function () {
  // Write code here that turns the phrase above into concrete actions
//   const Cart = pom.getCartPage();

//   this.Account = pom.getAccountPage();
  await this.Account.verifyLoggedIn(userdata.firstname);
  await this.Account.addFirstProductToCart();
  await this.Cart.cartOperation();
});

When("verify address at checkout page", async function () {
//   const Checkout = pom.getCheckoutPage();

  // Write code here that turns the phrase above into concrete actions
  await this.Checkout.addressVerify(userdata.address);
});

Then("delete account and then verify it deleted", async function () {
//   const Checkout = pom.getCheckoutPage();
  // Write code here that turns the phrase above into concrete actions
  await this.Checkout.deleteAccount();
});
