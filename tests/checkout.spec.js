import { test, expect } from '@playwright/test';
import { LoginPage } from '../../saucedemo-automation-test/pages/login'
import { HomePage } from '../pages/home';
import { CartPage } from '../pages/cart';
import { CheckoutPage } from '../pages/checkout';

test('as a user i want to checkout product', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.inputFirstName("John");
    await Checkout.inputLastName("Doe");
    await Checkout.inputPostalCode("123324");
    await Checkout.clickContinueButton();
    await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
    await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
    await expect(page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
    await expect(page.locator('[data-test="finish"]')).toContainText('Finish');
});

test('as a user i want to finish order', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.inputFirstName("John");
    await Checkout.inputLastName("Doe");
    await Checkout.inputPostalCode("123324");
    await Checkout.clickContinueButton();
    await Checkout.finishOder();

    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    await expect(page.locator('[data-test="complete-text"]')).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back Home');
});

test('as a user i want to click back to home after finish order', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.inputFirstName("John");
    await Checkout.inputLastName("Doe");
    await Checkout.inputPostalCode("123324");
    await Checkout.clickContinueButton();
    await Checkout.finishOder();
    await Checkout.backToHome();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
});

test('as a user i want to cancel checkout', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.clickCancelCheckout()
    await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
});

test('as a user i want to validate firstname is required', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.clickContinueButton();
    await expect(page.locator('[data-test="error"]')).toContainText('Error: First Name is required');
});



test('as a user i want to validate lastname is required', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.inputFirstName("John");
    await Checkout.clickContinueButton();
    await expect(page.locator('[data-test="error"]')).toContainText('Error: Last Name is required');
});


test('as a user i want to validate poscal code is required', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    const Checkout = new CheckoutPage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await Checkout.inputFirstName("John");
    await Checkout.inputLastName("Doe");
    await Checkout.clickContinueButton();
    await expect(page.locator('[data-test="error"]')).toContainText('Error: Postal Code is required');
});