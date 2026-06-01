# Bug Report – SauceDemo

## Overview

This document contains bug reports and improvement observations identified during manual testing of SauceDemo.

The purpose of this document is to demonstrate practical bug reporting skills, including clear reproduction steps, expected results, actual results, severity, priority, and evidence.

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

`manual-testing/screenshots/bug-report/bug-001-problem-user-product-images.png`

### Recommendation

Ensure that each product displays the correct image based on its product name and product data.

---

## Bug ID: BUG-002

**Title:** Checkout form accepts invalid postal code format  
**Type:** Validation Issue  
**Module:** Checkout  
**Environment:** Windows 11, Google Chrome  
**Test Account:** standard_user / secret_sauce  
**Severity:** Low  
**Priority:** Medium  
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

`manual-testing/screenshots/bug-report/bug-002-0-invalid-postal-code.png`
`manual-testing/screenshots/bug-report/bug-002-1-invalid-postal-code.png`

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
**Status:** Open  

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

`manual-testing/screenshots/bug-report/bug-003-login-error-message-style.png`

### Recommendation

Use a more professional and user-friendly validation message style, especially for production applications.

---

## Bug Report Summary

| Bug ID | Title | Type | Severity | Priority | Status |
|---|---|---|---|---|---|
| BUG-001 | Product images are incorrect when logging in as problem_user | Functional / UI Bug | Medium | Medium | Open |
| BUG-002 | Checkout form accepts invalid postal code format | Validation Issue | Low | Medium | Open |
| BUG-003 | Login error message style may not be professional for users | Usability / Content Issue | Low | Low | Open |

---

## Key Learning Outcomes

- Practised writing bug reports with clear reproduction steps.
- Learned how to separate expected results and actual results.
- Practised assigning severity and priority.
- Added evidence to support bug reports.
- Improved understanding of functional bugs, validation issues, and usability issues.