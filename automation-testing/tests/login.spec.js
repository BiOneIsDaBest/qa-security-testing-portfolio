const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Automation Tests', () => {
  async function login(page, username = 'standard_user', password = 'secret_sauce') {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
  }

  test('TC-AUTO-LOGIN-001 - Valid login should redirect user to Products page', async ({ page }) => {
    await login(page);

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('TC-AUTO-LOGIN-002 - Invalid login should display error message', async ({ page }) => {
    await login(page, 'wrong_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
  });

  test('TC-AUTO-CART-001 - User should be able to add product to cart', async ({ page }) => {
    await login(page);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await expect(page.locator('#remove-sauce-labs-backpack')).toBeVisible();
  });

  test('TC-AUTO-CART-002 - User should be able to remove product from cart', async ({ page }) => {
    await login(page);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await page.locator('#remove-sauce-labs-backpack').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible();
  });
});