const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login Tests', () => {
  test('TC-AUTO-LOGIN-001 - Valid login should redirect user to Products page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});