import { test, expect } from '@playwright/test';
test.describe.configure({ mode: 'serial' });
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ShoppingCart } from '../pages/ShoppingCart';
import { CheckoutPage } from '../pages/CheckoutPage';
const testData = JSON.parse(JSON.stringify(require('../test-data/TestData.json')));
import { faker } from "@faker-js/faker";

test.describe('suite', () => {
    let page;
    let loginPage;
    let homePage;
    let shoppingCart;
    let checkoutPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        shoppingCart = new ShoppingCart(page);
        checkoutPage = new CheckoutPage(page);
        await page.goto(testData.webAddress.url);
    })

    test('Login test', async () => {
        await loginPage.login(testData.UserLogin.username, testData.UserLogin.password);
        await expect(homePage.pageHeader).toBeVisible();
    })

    test('add to cart test', async () => {
        await homePage.addProduct(testData.Products.product1);
        await expect(homePage.addedItemCount()).toBeTruthy();
    })

    test('checkout test', async () => {
        await homePage.clickOnShoppingCart();
        await shoppingCart.clickOnCheckout();
        await checkoutPage.fillShippingInfo(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());
        await expect(checkoutPage.successMsg).toBeVisible();
    })

    test.afterAll(async () => {
        await page.close();
    })


})
