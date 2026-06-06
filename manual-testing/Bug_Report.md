# Bug Report – SauceDemo

## Overview

This document contains bug reports and improvement observations identified during manual testing of SauceDemo.

The purpose of this document is to demonstrate practical bug reporting skills, including clear reproduction steps, expected results, actual results, severity, priority, and evidence.

## Project Information

**Application Under Test:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Test Type:** Manual Functional Testing  
**Tester:** Tung Anh Bao Nguyen  
**Environment:** Windows 11, Google Chrome  
**Date:** June 2026  

---

## Bug ID: BUG-001

**Title:** Product images are incorrect when logging in as problem_user  
**Type:** Functional / UI Bug  
**Module:** Product List  
**Environment:** Windows 11, Google Chrome  
**Test Account:** problem_user / secret_sauce  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  

### Description

When logging in as `problem_user`, product images on the Products page appear incorrect or inconsistent with the product names. This may confuse users when browsing products.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Enter username: `problem_user`
3. Enter password: `secret_sauce`
4. Click the Login button.
5. Observe the product images on the Products page.

### Expected Result

Each product should display an image that correctly matches the product name.

### Actual Result

Product images appear incorrect or inconsistent with the listed product names.

### Evidence

[Screenshot – Incorrect product images with problem_user](screenshots/bug-report/bug-001-problem-user-product-images.png)

### Recommendation

Ensure that each product displays the correct image based on its product name and product data.

---

## Bug ID: BUG-002

**Title:** Checkout form does not validate invalid postal code format  
**Type:** Validation Gap / Improvement  
**Module:** Checkout  
**Environment:** Windows 11, Google Chrome  
**Test Account:** standard_user / secret_sauce  
**Severity:** Low  
**Priority:** Low  
**Status:** Open  

### Description

The checkout form allows users to continue when entering non-numeric or invalid postal code values. This may cause poor data quality if the application expects valid postal code information.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Add any product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter First Name: `Brian`
7. Enter Last Name: `Nguyen`
8. Enter Postal Code: `abc@@@`
9. Click Continue.

### Expected Result

The system should validate the postal code format and display an error message if the value is invalid.

### Actual Result

The system allows the user to continue to the Checkout Overview page with an invalid postal code format.

### Evidence

- [Screenshot 1 – Invalid postal code entered](screenshots/bug-report/bug-002-0-invalid-postal-code.png)
- [Screenshot 2 – Checkout overview displayed after invalid postal code](screenshots/bug-report/bug-002-1-invalid-postal-code.png)

### Recommendation

Add basic postal code format validation or display a clear validation message when the postal code format is invalid.

---

## Bug ID: BUG-003

**Title:** Login error message style may not be professional for users  
**Type:** Usability / Content Issue  
**Module:** Login  
**Environment:** Windows 11, Google Chrome  
**Test Account:** Invalid login data  
**Severity:** Low  
**Priority:** Low  
**Status:** Improvement Suggested  

### Description

When a login validation error occurs, the error message includes informal wording such as `Epic sadface`. Although this may be acceptable for a demo application, it may not be suitable for a production application because it does not sound professional.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Leave the username field empty.
3. Enter password: `secret_sauce`
4. Click the Login button.
5. Observe the validation message.

### Expected Result

The system should display a professional and clear validation message, such as `Username is required`.

### Actual Result

The system displays an informal error message style that includes `Epic sadface`.

### Evidence

[Screenshot – Login error message style](screenshots/bug-report/bug-003-login-error-message-style.png)

### Recommendation

Use a more professional and user-friendly validation message style, especially for production applications.

---

## Bug ID: BUG-004

**Title:** User can proceed to checkout with an empty cart  
**Type:** Functional / Business Logic Issue  
**Module:** Cart / Checkout  
**Environment:** Windows 11, Google Chrome  
**Test Account:** standard_user / secret_sauce  
**Severity:** Medium  
**Priority:** Medium  
**Status:** Open  

### Description

The application allows the user to proceed through the checkout flow even when there are no products in the cart.

In a real e-commerce application, users should not be able to complete checkout without at least one item in the cart. This may create an invalid order flow and affect business logic.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Do not add any product to the cart.
4. Click the cart icon.
5. Click the Checkout button.
6. Enter valid checkout information:
   - First Name: `Brian`
   - Last Name: `Nguyen`
   - Postal Code: `3000`
7. Click Continue.
8. Click Finish.

### Expected Result

The system should prevent the user from starting or completing checkout when the cart is empty.

The Checkout button should be disabled, or the system should display a clear message such as: `Your cart is empty. Please add an item before checkout.`

### Actual Result

The system allows the user to continue through the checkout flow even when the cart is empty.

### Evidence

[Screenshot – Empty cart checkout allowed](screenshots/bug-report/bug-004-empty-cart-checkout.png)

### Recommendation

Add validation to prevent users from proceeding to checkout when the cart is empty. The system should display a clear message instructing the user to add at least one item before checkout.

---

## Bug ID: BUG-005

**Title:** Checkout form accepts very long input values  
**Type:** Validation Gap / Improvement  
**Module:** Checkout  
**Environment:** Windows 11, Google Chrome  
**Test Account:** standard_user / secret_sauce  
**Severity:** Low  
**Priority:** Low  
**Status:** Open  

### Description

The checkout form accepts very long input values in the First Name, Last Name, and Postal Code fields.

Although this does not block the checkout flow in the demo application, a real e-commerce system should apply reasonable input length validation to prevent poor data quality, UI display issues, or unexpected behaviour.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Add any product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter very long values into the checkout form:
   - First Name: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
   - Last Name: `bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`
   - Postal Code: `123456789012345678901234567890`
7. Click Continue.

### Expected Result

The system should limit the maximum length of checkout input fields or display a validation message when the input exceeds the allowed length.

### Actual Result

The system accepts very long input values and allows the user to continue to the Checkout Overview page.

### Evidence

[Screenshot – Long checkout input accepted](screenshots/bug-report/bug-005-long-input-checkout.png)

### Recommendation

Apply maximum length validation to checkout form fields and display clear validation messages when user input exceeds the allowed limit.

---

## Bug Report Summary

| Bug ID | Title | Type | Module | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | Product images are incorrect when logging in as problem_user | Functional / UI Bug | Product List | Medium | Medium | Open |
| BUG-002 | Checkout form does not validate invalid postal code format | Validation Gap / Improvement | Checkout | Low | Low | Open |
| BUG-003 | Login error message style may not be professional for users | Usability / Content Issue | Login | Low | Low | Improvement Suggested |
| BUG-004 | User can proceed to checkout with an empty cart | Functional / Business Logic Issue | Cart / Checkout | Medium | Medium | Open |
| BUG-005 | Checkout form accepts very long input values | Validation Gap / Improvement | Checkout | Low | Low | Open |

---

## Key Learning Outcomes

- Practised writing bug reports with clear reproduction steps.
- Learned how to separate expected results and actual results.
- Practised assigning severity and priority.
- Added evidence to support bug reports.
- Improved understanding of functional bugs, validation issues, and usability issues.
- Practised identifying business logic issues in an e-commerce checkout flow.
- Practised documenting input validation gaps with appropriate severity and priority.