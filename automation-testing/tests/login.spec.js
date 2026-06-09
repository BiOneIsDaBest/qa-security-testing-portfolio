const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login Tests', () => {
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
});