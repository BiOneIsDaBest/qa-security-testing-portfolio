# QA & Security Testing Portfolio

This portfolio demonstrates my practical learning in manual testing, automation testing, API testing, and basic web security testing.

It was created to support my internship applications for IT Intern, QA Intern, Manual Tester Intern, Automation Testing Intern, Security Testing Intern, and Application Testing Intern roles.

---

## About Me

B.IT, Major: Cyber Security

Current focus is building practical skills in QA, automation testing, API testing, and basic web security testing. This portfolio demonstrates my ability to write test documentation, design test cases, report bugs, automate test scenarios, work with test reports, run tests in CI, and understand basic OWASP security risks.

---

## Focus Areas

* Manual Testing
* Test Case Design
* Bug Reporting
* Playwright Automation Testing
* API Testing with Postman
* GitHub Actions CI
* Playwright HTML Report
* Basic OWASP Top 10
* Security Testing Awareness

---

## Tools and Technologies

* Git & GitHub
* Markdown
* JavaScript
* Node.js
* Playwright
* Playwright HTML Report
* Postman
* GitHub Actions
* Chrome DevTools
* OWASP Top 10 basics

---

## Application Under Test

**Application:** SauceDemo / Swag Labs
**Website:** https://www.saucedemo.com/
**Type:** Demo e-commerce web application

SauceDemo was used to practise manual testing, bug reporting, Playwright automation testing, and basic UI regression testing.

---

## Portfolio Structure

```text
qa-security-testing-portfolio/
│
├── README.md
│
├── manual-testing/
│   ├── Test_Plan.md
│   ├── Test_Cases.md
│   ├── Bug_Report.md
│   ├── Test_Summary_Report.md
│   └── screenshots/
│
├── security-testing/
│   ├── Security_Testing_Report.md
│   ├── OWASP_Findings.md
│   └── screenshots/
│
├── api-testing/
│   ├── API_Test_Cases.md
│   ├── Postman_Collection.json
│   └── API_Bug_Report.md
│
├── automation-testing/
│   ├── tests/
│   ├── playwright.config.js
│   ├── package.json
│   └── README.md
│
└── .github/
    └── workflows/
        └── playwright.yml
```

---

## Manual Testing Summary

Manual testing was performed on SauceDemo to verify the main user flows.

### Covered Modules

* Login
* Logout
* Product List
* Product Details
* Cart
* Checkout Form
* Checkout Overview
* Order Completion

### Manual Testing Documents

* [Test Plan](manual-testing/Test_Plan.md)
* [Test Cases](manual-testing/Test_Cases.md)
* [Bug Report](manual-testing/Bug_Report.md)
* [Test Summary Report](manual-testing/Test_Summary_Report.md)

### Manual Testing Highlights

* Designed and executed 29 manual test cases.
* Recorded expected results, actual results, test status, and screenshot evidence.
* Created bug reports with severity, priority, reproduction steps, evidence, and recommendations.

---

## Automation Testing Summary

Playwright automation tests were created using JavaScript to validate the main user flows of the SauceDemo / Swag Labs web application.

The automation test suite focuses on:

* Login
* Product display
* Cart actions
* Checkout validation
* Logout

The Playwright tests are integrated with GitHub Actions CI. When code is pushed to the `main` branch, GitHub Actions automatically runs the UI tests and uploads the Playwright HTML report as an artifact.

### Automated Test Coverage

| Test ID              | Test Scenario                                          | Test File          | Status    |
| -------------------- | ------------------------------------------------------ | ------------------ | --------- |
| TC-AUTO-LOGIN-001    | Valid login should redirect user to Products page      | `login.spec.js`    | Automated |
| TC-AUTO-LOGIN-002    | Invalid login should display error message             | `login.spec.js`    | Automated |
| TC-AUTO-LOGIN-003    | User should be able to logout successfully             | `login.spec.js`    | Automated |
| TC-AUTO-PRODUCT-001  | Product list should be visible after login             | `cart.spec.js`     | Automated |
| TC-AUTO-CART-001     | User should be able to add product to cart             | `cart.spec.js`     | Automated |
| TC-AUTO-CART-002     | User should be able to remove product from cart        | `cart.spec.js`     | Automated |
| TC-AUTO-CHECKOUT-001 | User should be able to checkout with valid information | `checkout.spec.js` | Automated |
| TC-AUTO-CHECKOUT-002 | Checkout should show error when first name is missing  | `checkout.spec.js` | Automated |

### Automation Testing Documents

* [Automation Testing README](automation-testing/README.md)
* [Playwright Tests](automation-testing/tests/)
* [Playwright Config](automation-testing/playwright.config.js)
* [GitHub Actions Workflow](.github/workflows/playwright.yml)

---

## GitHub Actions CI & Test Report

This project uses GitHub Actions to automatically run Playwright UI tests when code is pushed to the `main` branch or when a pull request is created.

The CI workflow file is located at:

```text
.github/workflows/playwright.yml
```

The workflow performs the following steps:

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

### Playwright HTML Report Artifact

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

This report helps review automated test execution results, including passed tests, failed tests, test duration, and failure evidence.

---

## How to Run Playwright Tests

Go to the automation testing folder:

```bash
cd automation-testing
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests and generate a Playwright HTML report:

```bash
npx playwright test --reporter=list,html
```

Open the HTML report locally:

```bash
npx playwright show-report
```

Run tests on Chromium only:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --headed --project=chromium
```

---

## Bug Reporting Summary

| Bug ID  | Area         | Type                           |
| ------- | ------------ | ------------------------------ |
| BUG-001 | Product List | Functional / UI Bug            |
| BUG-002 | Checkout     | Validation Gap / Improvement   |
| BUG-003 | Login        | Usability / Content Issue      |
| BUG-004 | Checkout     | Validation / Edge Case         |
| BUG-005 | Checkout     | Input Validation / Improvement |

Full report: [Bug Report](manual-testing/Bug_Report.md)

---

## Current Status

| Area                        | Status                       |
| --------------------------- | ---------------------------- |
| GitHub Repo Structure       | Completed                    |
| Manual Test Cases           | Completed                    |
| Bug Reports                 | Completed                    |
| Test Plan                   | Completed                    |
| Test Summary Report         | Completed                    |
| Playwright Setup            | Completed                    |
| Playwright Automation Tests | Completed - 8 test scenarios |
| Playwright HTML Report      | Completed                    |
| GitHub Actions CI           | Completed                    |
| CI Report Artifact          | Completed                    |
| API Testing                 | Planned                      |
| Security Testing Notes      | Planned                      |

Current automation status:

```text
Playwright tests are passing locally and in GitHub Actions CI.
Playwright HTML report is uploaded as the playwright-html-report artifact.
```

---

## Learning Outcomes

Through this portfolio, I practised:

* Writing structured manual test cases.
* Executing test cases on a real demo web application.
* Comparing expected results with actual results.
* Recording screenshot evidence.
* Writing professional bug reports.
* Assigning severity and priority.
* Setting up Playwright automation testing.
* Writing JavaScript-based end-to-end tests.
* Organising automation tests by feature/module.
* Creating positive and negative automation test cases.
* Running Playwright tests locally and reviewing HTML reports.
* Integrating Playwright tests with GitHub Actions CI.
* Reviewing GitHub Actions workflow logs.
* Downloading and reviewing Playwright HTML report artifacts.
* Preparing a QA portfolio structure suitable for internship applications.

---

## Next Steps

* Add API testing with Postman.
* Add API test cases and API bug reports.
* Add basic OWASP Top 10 notes.
* Add a short security testing report.
* Add basic Allure Report notes for interview preparation.
* Continue improving the portfolio for QA / Automation Testing internship applications.
