import { test, expect } from '@playwright/test';
import { LoginPage } from '../../saucedemo-automation-test/pages/login'
import { HomePage } from '../pages/home';

test('as a user successfully login', async ({ page }) => {
  const Login = new LoginPage(page);
  const Home = new HomePage(page);
  
  await Login.gotoLoginPage()
  await Login.login('standard_user', 'secret_sauce')
  await expect (page.locator('[data-test="title"]')).toContainText('Products')
  await Home.doLogout();
});

test('as a user has been locket out', async ({ page }) => {

    const Login = new LoginPage(page)
  
    await Login.gotoLoginPage()
    await Login.login('locked_out_user', 'secret_sauce')
    await expect (page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.')
  });


  test('as a user verify problem user', async({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
  
    await Login.gotoLoginPage();
    await Login.login('problem_user', 'secret_sauce');
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
    await Home.doLogout();
  });

  test('as a user verify performance glicth user', async({ page }) => {
    const Login = new LoginPage(page);
    const Home = new HomePage(page);
  
    await Login.gotoLoginPage();
    await Login.login('performance_glitch_user', 'secret_sauce');
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="item-0-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
    await Home.doLogout();
  });