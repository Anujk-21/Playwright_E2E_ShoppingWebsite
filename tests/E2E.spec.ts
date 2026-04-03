import {test} from "@playwright/test";
import { POmanager } from "../pages/POmanager";
import userdata from "../data/userData.json" assert { type: "json" };

test("E2E test with POM and Json Data", async({page})=>{
    const pom = new POmanager(page);
    const Home = pom.getHomePage();
    const Cart = pom.getCartPage();
    const Checkout = pom.getCheckoutPage();
    const  Signup = pom.getSignupPage();
    const Account = pom.getAccountPage();

    await Home.goto();
    await Home.verifyHomePageLoaded();
    await Home.clickSignupLogin();

    await Signup.fillSignupForm(userdata.name,userdata.email);
    await Signup.completeAccountDetails(userdata);
    await Signup.verifyAccountCreated();

    await Account.verifyLoggedIn(userdata.firstname);
    await Account.addFirstProductToCart();

    await Cart.cartOperation();

    await Checkout.addressVerify(userdata.address);
    await Checkout.deleteAccount();

})