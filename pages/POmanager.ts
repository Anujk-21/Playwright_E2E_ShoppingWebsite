import { Page } from "@playwright/test";
import {HomePage} from "../pages/HomePage";
import { AccountPage } from "./AccountPage";
import { CartPage} from "../pages/CartPage";
import {CheckoutPage} from '../pages/CheckoutPage';
import {SignupPage} from "../pages/SignupPage";


export class POmanager{
    private homePage: HomePage;
    private accountPage: AccountPage;
    private cartPage: CartPage;
    private checkoutPage: CheckoutPage;
    private signupPage: SignupPage; 

    constructor(private page: Page){
        this.homePage = new HomePage(this.page);
        this.accountPage = new AccountPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.checkoutPage = new CheckoutPage(this.page);
        this.signupPage = new SignupPage(this.page);
    }

    getHomePage(): HomePage{
        return this.homePage;
    }

    getSignupPage(): SignupPage{
        return this.signupPage;
    }

    getAccountPage(): AccountPage{
        return this.accountPage;
    }

    getCheckoutPage(): CheckoutPage{
        return this.checkoutPage;
    }

    getCartPage(): CartPage{
        return this.cartPage;
    }
}
