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

Run all tests and generate a Playwright HTML report:

```powershell
npx playwright test --reporter=list,html
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

## How to View Playwright HTML Report

After running the tests with the HTML reporter, open the Playwright HTML report:

```powershell
npx playwright show-report
```

The report shows:

* Passed and failed tests
* Test execution time
* Test details for each scenario
* Browser/project used for the test run
* Screenshots, traces, and error details when available

---

## GitHub Actions CI

This project uses GitHub Actions to automatically run Playwright UI tests when code is pushed to the `main` branch or when a pull request is created.

The workflow file is located at:

```text
.github/workflows/playwright.yml
```

The CI workflow performs the following steps:

1. Checkout repository
2. Setup Node.js
3. Install project dependencies
4. Install Playwright browsers
5. Run Playwright tests
6. Upload the Playwright HTML report as an artifact

CI workflow summary:

```text
Push code → GitHub Actions runs → Playwright tests execute → HTML report is generated → Report is uploaded as an artifact
```

---

## Playwright HTML Report Artifact

The GitHub Actions workflow uploads the Playwright HTML report after each test run.

Artifact name:

```text
playwright-html-report
```

To view the report from GitHub Actions:

1. Go to the GitHub repository
2. Open the **Actions** tab
3. Select the latest **Playwright Tests** workflow run
4. Scroll to the **Artifacts** section
5. Download `playwright-html-report`
6. Extract the ZIP file
7. Open `index.html` in a browser

This report is useful for reviewing automated test execution results, including passed tests, failed tests, test duration, and failure evidence.

---

## Current Status

The automation suite currently includes 8 automated test scenarios covering login, product listing, cart actions, checkout, form validation, and logout.

Current CI status:

```text
Playwright tests are passing in GitHub Actions.
Playwright HTML report is uploaded as the playwright-html-report artifact.
```

Current local test result:

```text
24 passed
```

Note: The number of test executions may be higher than the number of test scenarios when Playwright runs tests across multiple configured browsers or projects.

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
* Running automated tests locally
* Running automated tests in GitHub Actions CI
* Reading Playwright HTML reports
* Downloading and reviewing CI report artifacts
* Organising test files by feature/module

---

## Notes

This project focuses on clean and stable intern-level automation testing. The goal is not to build a complex framework, but to demonstrate practical QA automation skills that can be understood by recruiters, mentors, and technical reviewers.

The Playwright HTML report is used as a simple and practical reporting solution for this internship portfolio. Allure Report may be explored later as a nice-to-have reporting tool.
For more details, see [Test Reporting Notes](Test_Reporting_Notes.md).

---

## Next Steps

* Improve test stability for CI if any flaky test appears
* Refactor repeated login steps into a reusable helper file
* Add more negative test cases for checkout form validation
* Add basic Allure Report notes for interview preparation
* Add GitHub Actions CI summary to the root README
