import { test, expect } from '@playwright/test';
import { LoginPage } from '../../saucedemo-automation-test/pages/login'
import { HomePage } from '../pages/home';


test('as a user want to add to cart', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.addToCart();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toContainText('2');
  });

  test('as a user i want to sort the product by name descending', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.sortingProductBy('za')
    await expect(page.locator('[data-test="item-2-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Onesie');
    await expect(page.locator('[data-test="item-3-title-link"] [data-test="inventory-item-name"]')).toContainText('Test.allTheThings() T-Shirt (Red)');
  });

  test('as a user i want to sort the product by name ascending', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.sortingProductBy('az')
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
  });

  test('as a user i want to sort the product by price high to low', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.sortingProductBy('hilo')
    await expect(page.locator('[data-test="inventory-list"]')).toContainText('$49.99');
  });

  test('as a user i want to sort the product by price low to high', async ({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
    
    await Login.gotoLoginPage()
    await Login.login('standard_user', 'secret_sauce')
    await Home.sortingProductBy('hilo')
    await expect(page.locator('[data-test="inventory-list"]')).toContainText('$7.99');
  });

