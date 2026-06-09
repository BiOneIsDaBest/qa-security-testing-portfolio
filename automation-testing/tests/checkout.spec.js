const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Checkout Tests', () => {
  async function login(page, username = 'standard_user', password = 'secret_sauce') {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
  }

  async function addBackpackToCart(page) {
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  }

  async function goToCheckout(page) {
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/.*cart.html/);

    await page.locator('#checkout').click();
    await expect(page).toHaveURL(/.*checkout-step-one.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  }

  test('TC-AUTO-CHECKOUT-001 - User should be able to checkout with valid information', async ({ page }) => {
    await login(page);
    await addBackpackToCart(page);
    await goToCheckout(page);

    await page.locator('#first-name').fill('Brian');
    await page.locator('#last-name').fill('Nguyen');
    await page.locator('#postal-code').fill('3000');
    await page.locator('#continue').click();

    await expect(page).toHaveURL(/.*checkout-step-two.html/);
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await page.locator('#finish').click();

    await expect(page).toHaveURL(/.*checkout-complete.html/);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });

  test('TC-AUTO-CHECKOUT-002 - Checkout should show error when first name is missing', async ({ page }) => {
    await login(page);
    await addBackpackToCart(page);
    await goToCheckout(page);

    await page.locator('#last-name').fill('Nguyen');
    await page.locator('#postal-code').fill('3000');
    await page.locator('#continue').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });
});