const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Product and Cart Tests', () => {
  async function login(page, username = 'standard_user', password = 'secret_sauce') {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
  }

  test('TC-AUTO-PRODUCT-001 - Product list should be visible after login', async ({ page }) => {
    await login(page);

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.locator('.inventory_item').first()).toBeVisible();
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');
  });
});