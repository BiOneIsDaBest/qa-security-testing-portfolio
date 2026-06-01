# Manual Test Cases – SauceDemo

## Project Information

**Application Under Test:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Module:** Login  
**Test Type:** Manual Functional Testing  
**Tester:** Tung Anh Bao Nguyen  
**Environment:** Windows 11, Google Chrome  
**Date:** May 2026  

---

## Test Objective

The objective of this testing activity is to verify that the SauceDemo login functionality works correctly for valid users, invalid users, empty input fields, locked users, and unusual input values.

This login test set is designed to demonstrate basic manual testing skills, including positive testing, negative testing, input validation testing, and basic security awareness.

---

## Test Data

| User Type | Username | Password |
|---|---|---|
| Standard User | standard_user | secret_sauce |
| Locked User | locked_out_user | secret_sauce |
| Invalid User | wrong_user | wrong_password |
| SQL-like Input | ' OR '1'='1 | test123 |
| Long Input | 200 characters | 200 characters |

---

# Login Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|
| TC-LOGIN-001 | Verify login with valid credentials | User is on the SauceDemo login page | 1. Enter valid username 2. Enter valid password 3. Click the Login button | Username: standard_user Password: secret_sauce | User should be redirected to the Products page | User was redirected to the Products page successfully. | Pass | manual-testing/screenshots/tc-login-001-valid-login.png |
| TC-LOGIN-002 | Verify login with invalid username | User is on the SauceDemo login page | 1. Enter invalid username 2. Enter valid password 3. Click the Login button | Username: wrong_user Password: secret_sauce | System should display an error message and user should remain on the login page | Error message was displayed and user remained on the login page. | Pass | manual-testing/screenshots/tc-login-002-invalid-username.png |
| TC-LOGIN-003 | Verify login with invalid password | User is on the SauceDemo login page | 1. Enter valid username 2. Enter invalid password 3. Click the Login button | Username: standard_user Password: wrong_password | System should display an error message and user should remain on the login page | Error message was displayed and user remained on the login page. | Pass | manual-testing/screenshots/tc-login-003-invalid-password.png |
| TC-LOGIN-004 | Verify login with empty username | User is on the SauceDemo login page | 1. Leave username field empty 2. Enter valid password 3. Click the Login button | Username: empty Password: secret_sauce | System should display an error message stating that username is required | Error message was displayed indicating that username is required. | Pass | manual-testing/screenshots/tc-login-004-empty-username.png |
| TC-LOGIN-005 | Verify login with empty password | User is on the SauceDemo login page | 1. Enter valid username 2. Leave password field empty 3. Click the Login button | Username: standard_user Password: empty | System should display an error message stating that password is required | Error message was displayed indicating that password is required. | Pass | manual-testing/screenshots/tc-login-005-empty-password.png |
| TC-LOGIN-006 | Verify login with both fields empty | User is on the SauceDemo login page | 1. Leave username field empty 2. Leave password field empty 3. Click the Login button | Username: empty Password: empty | System should display an error message stating that username is required | Error message was displayed indicating that username is required. | Pass | manual-testing/screenshots/tc-login-006-both-empty.png |
| TC-LOGIN-007 | Verify login with locked out user | User is on the SauceDemo login page | 1. Enter locked out username 2. Enter valid password 3. Click the Login button | Username: locked_out_user Password: secret_sauce | System should display an error message stating that the user has been locked out | Error message was displayed indicating that the user has been locked out. | Pass | manual-testing/screenshots/tc-login-007-locked-user.png |
| TC-LOGIN-008 | Verify login with SQL-like input | User is on the SauceDemo login page | 1. Enter SQL-like input in username field 2. Enter any password 3. Click the Login button | Username: ' OR '1'='1 Password: test123 | System should reject the login attempt and display an error message | Login attempt was rejected and an error message was displayed. | Pass | manual-testing/screenshots/tc-login-008-sql-like-input.png |
| TC-LOGIN-009 | Verify login with very long input | User is on the SauceDemo login page | 1. Enter a very long username 2. Enter a very long password 3. Click the Login button | Username: 200 characters Password: 200 characters | System should not crash and should display an error message | Application did not crash and displayed an error message. | Pass | manual-testing/screenshots/tc-login-009-long-input.png |
| TC-LOGIN-010 | Verify logout after successful login | User is logged in with valid credentials | 1. Login with valid credentials 2. Click the menu button 3. Click Logout | Username: standard_user Password: secret_sauce | User should be redirected back to the login page | User was successfully redirected back to the login page after logout. | Pass | manual-testing/screenshots/tc-login-010-logout.png |

---

## Notes

These test cases cover the main login scenarios required for basic manual testing practice. They include positive scenarios, negative scenarios, validation scenarios, and basic security-related input testing.

The same scenarios can later be converted into Playwright automation tests.

---

## Test Execution Summary – Login Module

| Metric | Result |
|---|---|
| Total Test Cases Executed | 10 |
| Passed | 10 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |

## Overall Result

All planned login test cases were executed successfully.

The SauceDemo login module correctly handled valid login, invalid credentials, empty input fields, locked user login, SQL-like input, long input, and logout flow.

## Key Learning Outcomes

- Practised writing structured manual test cases.
- Executed test cases manually on a real demo web application.
- Compared expected results with actual results.
- Recorded test execution status as Pass, Fail, Blocked, or Not Run.
- Added screenshot evidence for manual testing.
- Improved understanding of login validation and authentication-related test scenarios.

---

# Product, Cart, and Checkout Test Cases

## Test Objective

The objective of this test set is to verify the main e-commerce user flow in SauceDemo, including product browsing, cart management, checkout form validation, and order completion.

These test cases demonstrate end-to-end manual testing skills by covering both positive and negative scenarios.

---

## Product Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|
| TC-PROD-001 | Verify Products page is displayed after valid login | User has valid login credentials | 1. Open SauceDemo 2. Login with valid credentials | Username: standard_user Password: secret_sauce | User should be redirected to the Products page | Actual Result: User was redirected to the Products page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-prod-001-products-page.png |
| TC-PROD-002 | Verify product list is visible | User is on the Products page | 1. Observe the product list | N/A | Product names, images, prices, and Add to Cart buttons should be visible | Product names, images, prices, and Add to Cart buttons were displayed correctly. | Pass | manual-testing/screenshots/cart-checkout/tc-prod-002-product-list.png |
| TC-PROD-003 | Verify product details page opens correctly | User is on the Products page | 1. Click a product name | Product: Sauce Labs Backpack | Product details page should be displayed with product name, image, description, price, and Add to Cart button | Product details page was displayed with product name, description, price, image, and Add to Cart button. | Pass | manual-testing/screenshots/cart-checkout/tc-prod-003-product-details.png |

---

## Cart Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|
| TC-CART-001 | Verify adding one product to cart | User is logged in and on the Products page | 1. Click Add to Cart for one product | Product: Sauce Labs Backpack | Cart badge should display 1 | Product was added to cart and cart badge displayed 1. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-001-add-one-product.png |
| TC-CART-002 | Verify adding multiple products to cart | User is logged in and on the Products page | 1. Add two products to cart | Products: Sauce Labs Backpack, Sauce Labs Bike Light | Cart badge should display 2 | Two products were added to cart and cart badge displayed 2. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-002-add-multiple-products.png |
| TC-CART-003 | Verify Remove button appears after adding product | User is logged in and on the Products page | 1. Click Add to Cart for a product 2. Observe the button text | Product: Sauce Labs Backpack | Add to Cart button should change to Remove | Add to Cart button changed to Remove after the product was added. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-003-remove-button-visible.png |
| TC-CART-004 | Verify removing product from Products page | Product has been added to cart | 1. Click Remove button on the Products page | Product: Sauce Labs Backpack | Product should be removed and cart badge should decrease or disappear | Product was removed from cart and cart badge disappeared. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-004-remove-from-products-page.png |
| TC-CART-005 | Verify cart page displays selected product | Product has been added to cart | 1. Click cart icon | Product: Sauce Labs Backpack | Cart page should display the selected product | Cart page displayed the selected product correctly. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-005-cart-page-product.png |
| TC-CART-006 | Verify removing product from Cart page | User is on Cart page with one product | 1. Click Remove button in the Cart page | Product: Sauce Labs Backpack | Product should be removed from the cart | Product was removed from the Cart page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-006-remove-from-cart-page.png |
| TC-CART-007 | Verify Continue Shopping button | User is on Cart page | 1. Click Continue Shopping button | N/A | User should be redirected back to the Products page | User was redirected back to the Products page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-cart-007-continue-shopping.png |

---

## Checkout Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|
| TC-CHECKOUT-001 | Verify Checkout button opens checkout form | User has at least one product in cart | 1. Open cart page 2. Click Checkout | Product: Sauce Labs Backpack | Checkout information form should be displayed | Checkout information form was displayed. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-001-checkout-form.png |
| TC-CHECKOUT-002 | Verify checkout with valid customer information | User is on checkout information page | 1. Enter first name 2. Enter last name 3. Enter postal code 4. Click Continue | First Name: Brian Last Name: Nguyen Postal Code: 3000 | User should be redirected to Checkout Overview page | User was redirected to the Checkout Overview page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-002-valid-info.png |
| TC-CHECKOUT-003 | Verify checkout with missing first name | User is on checkout information page | 1. Leave first name empty 2. Enter last name 3. Enter postal code 4. Click Continue | Last Name: Nguyen Postal Code: 3000 | Error message should state that first name is required | Error message was displayed indicating that first name is required. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-003-missing-first-name.png |
| TC-CHECKOUT-004 | Verify checkout with missing last name | User is on checkout information page | 1. Enter first name 2. Leave last name empty 3. Enter postal code 4. Click Continue | First Name: Brian Postal Code: 3000 | Error message should state that last name is required | Error message was displayed indicating that last name is required. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-004-missing-last-name.png |
| TC-CHECKOUT-005 | Verify checkout with missing postal code | User is on checkout information page | 1. Enter first name 2. Enter last name 3. Leave postal code empty 4. Click Continue | First Name: Brian Last Name: Nguyen | Error message should state that postal code is required | Error message was displayed indicating that postal code is required. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-005-missing-postal-code.png |
| TC-CHECKOUT-006 | Verify Cancel button on checkout information page | User is on checkout information page | 1. Click Cancel button | N/A | User should be redirected back to the Cart page | User was redirected back to the Cart page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-006-cancel-button.png |
| TC-CHECKOUT-007 | Verify checkout overview displays order information | User has entered valid checkout information | 1. Review checkout overview page | Product: Sauce Labs Backpack | Product name, price, payment information, shipping information, tax, and total should be displayed | Checkout overview displayed product, price, payment information, shipping information, tax, and total correctly.
 | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-007-overview.png |
| TC-CHECKOUT-008 | Verify complete order | User is on checkout overview page | 1. Click Finish button | N/A | Order confirmation page should be displayed | Order confirmation page was displayed successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-008-complete-order.png |
| TC-CHECKOUT-009 | Verify Back Home button after order completion | User has completed an order | 1. Click Back Home button | N/A | User should be redirected back to the Products page | User was redirected back to the Products page successfully. | Pass | manual-testing/screenshots/cart-checkout/tc-checkout-009-back-home.png |

---

## Test Execution Summary – Product, Cart, and Checkout Modules

| Metric | Result |
|---|---|
| Total Test Cases Executed | 19 |
| Passed | 19 |
| Failed | TBD |
| Blocked | TBD |
| Not Run | TBD |

## Overall Notes

The Product, Cart, and Checkout modules were tested using an end-to-end e-commerce flow.

All planned test cases were executed successfully. The application correctly displayed products, allowed users to add and remove products from the cart, validated checkout form fields, displayed checkout overview information, and completed the order flow successfully.

## Key Learning Outcomes

- Practised testing an end-to-end e-commerce user flow.
- Verified product browsing, cart management, checkout validation, and order completion.
- Compared expected results with actual results.
- Recorded test status and screenshot evidence.
- Improved understanding of functional testing for shopping cart and checkout workflows.