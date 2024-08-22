import { test, expect } from '@playwright/test';
import { LoginPage } from '../../saucedemo-automation-test/pages/login'
import { HomePage } from '../pages/home';
import { CartPage } from '../pages/cart';


test('as a user i want to checkout product', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.doCheckout();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information')
});

test('as a user i want to countinue shopping', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.continueShopping();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
});


test('as a user i want to delete product', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.deleteItem();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1')
});

test('as a user i want to see detail product', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    const Cart = new CartPage(page)
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await Home.clickCartButton();
    await Cart.clickDetailProduct();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="inventory-item-desc"]')).toContainText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
    await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
     await expect(page.locator('[data-test="remove"]')).toContainText('Remove');
    await expect(page.locator('[data-test="back-to-products"]')).toContainText('Back to products');
});
