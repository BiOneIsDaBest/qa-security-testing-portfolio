# Automation Testing – Playwright

## Overview

This folder contains Playwright automation tests for the SauceDemo / Swag Labs web application.

The purpose of this section is to demonstrate basic end-to-end automation testing skills using JavaScript and Playwright. The test suite covers core user flows such as login, product listing, cart actions, checkout validation, and logout.

This automation project is part of my QA testing portfolio for internship applications, focusing on QA, automation testing, API testing, and basic security testing awareness.

---

## Application Under Test

**Application:** SauceDemo / Swag Labs
**Website:** https://www.saucedemo.com/
**Test Type:** End-to-End Automation Testing
**Main Testing Focus:** Functional UI testing and form validation

---

## Tools Used

* Playwright
* JavaScript
* Node.js
* Playwright Test Runner
* Playwright HTML Report
* GitHub Actions CI

---

## Test Coverage

| Test ID              | Test Scenario                                          | Type       | Test File          | Status    |
| -------------------- | ------------------------------------------------------ | ---------- | ------------------ | --------- |
| TC-AUTO-LOGIN-001    | Valid login should redirect user to Products page      | Positive   | `login.spec.js`    | Automated |
| TC-AUTO-LOGIN-002    | Invalid login should display error message             | Negative   | `login.spec.js`    | Automated |
| TC-AUTO-LOGIN-003    | User should be able to logout successfully             | Functional | `login.spec.js`    | Automated |
| TC-AUTO-PRODUCT-001  | Product list should be visible after login             | Functional | `cart.spec.js`     | Automated |
| TC-AUTO-CART-001     | User should be able to add product to cart             | Functional | `cart.spec.js`     | Automated |
| TC-AUTO-CART-002     | User should be able to remove product from cart        | Functional | `cart.spec.js`     | Automated |
| TC-AUTO-CHECKOUT-001 | User should be able to checkout with valid information | Positive   | `checkout.spec.js` | Automated |
| TC-AUTO-CHECKOUT-002 | Checkout should show error when first name is missing  | Negative   | `checkout.spec.js` | Automated |

---

## Test Files Structure

```text
automation-testing/
├── tests/
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## How to Install

From the root of the repository:

```powershell
cd automation-testing
npm install
npx playwright install
```

---

## How to Run Tests

Run all Playwright tests:

```powershell
npx playwright test
```

Run a specific test file:

```powershell
npx playwright test tests/login.spec.js
npx playwright test tests/cart.spec.js
npx playwright test tests/checkout.spec.js
```

Run tests in headed mode:

```powershell
npx playwright test --headed
```

Run tests in debug mode:

```powershell
npx playwright test --debug
```

---

## How to View Test Report

After running the tests, open the Playwright HTML report:

```powershell
npx playwright show-report
```

The report shows:

* Passed and failed tests
* Test execution time
* Test steps
* Screenshots and traces when available
* Error details if a test fails

---

## Current Status

The automation suite currently includes 8 Playwright tests covering login, product listing, cart actions, checkout, form validation, and logout.

Current local test status:

```text
8 passed
```

---

## Learning Outcomes

Through this automation testing section, I practiced:

* Writing Playwright tests using JavaScript
* Using `test` and `expect`
* Navigating pages with `page.goto`
* Locating elements with `locator`
* Performing user actions with `click` and `fill`
* Verifying UI results with `toBeVisible`, `toHaveText`, and `toHaveURL`
* Creating positive and negative automation test cases
* Reading Playwright HTML reports
* Organising test files by feature/module

---

## Notes

This project focuses on clean and stable intern-level automation testing. The goal is not to build a complex framework, but to demonstrate practical QA automation skills that can be understood by recruiters, mentors, and technical reviewers.

---

## Next Steps

* Add GitHub Actions CI summary to the root README
* Add screenshots of the Playwright HTML report
* Refactor repeated login steps into a reusable helper file
* Add more negative test cases for checkout form validation
