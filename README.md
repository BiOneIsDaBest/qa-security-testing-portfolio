# QA & Security Testing Portfolio

This portfolio demonstrates my practical learning in manual testing, automation testing, API testing, and basic web security testing.

It was created to support my internship applications for IT Intern, QA Intern, Manual Tester Intern, Automation Testing Intern, Security Testing Intern, and Application Testing Intern roles.

## About Me

B.IT, Major: Cyber Security

Current focus is building practical skills in QA, automation testing, API testing, and basic web security testing. This portfolio demonstrates my ability to write test documentation, design test cases, report bugs, automate test scenarios, and understand basic OWASP security risks.

## Focus Areas

- Manual Testing
- Test Case Design
- Bug Reporting
- Playwright Automation Testing
- API Testing with Postman
- GitHub Actions CI
- Basic OWASP Top 10
- Security Testing Awareness

## Tools and Technologies

- Git & GitHub
- Markdown
- JavaScript
- Node.js
- Playwright
- Postman
- GitHub Actions
- Chrome DevTools
- OWASP Top 10 basics

## Application Under Test

**Application:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Type:** Demo e-commerce web application  

SauceDemo was used to practise manual testing, bug reporting, and Playwright automation testing.

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

## Manual Testing Summary

Manual testing was performed on SauceDemo to verify the main user flows.

### Covered Modules

- Login
- Logout
- Product List
- Product Details
- Cart
- Checkout Form
- Checkout Overview
- Order Completion

### Manual Testing Documents

- [Test Plan](manual-testing/Test_Plan.md)
- [Test Cases](manual-testing/Test_Cases.md)
- [Bug Report](manual-testing/Bug_Report.md)
- [Test Summary Report](manual-testing/Test_Summary_Report.md)

### Manual Testing Highlights

- Designed and executed 29 manual test cases.
- Recorded expected results, actual results, test status, and screenshot evidence.
- Created bug reports with severity, priority, reproduction steps, evidence, and recommendations.

## Automation Testing Summary

Playwright automation tests were created using JavaScript.

### Automated Test Coverage

- Valid login
- Invalid login
- Add product to cart
- Remove product from cart

### Automation Testing Documents

- [Automation Testing README](automation-testing/README.md)
- [Playwright Tests](automation-testing/tests/)

## How to Run Playwright Tests

Go to the automation testing folder:

```bash
cd automation-testing

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

Run tests on Chromium only:

```bash
npx playwright test --project=chromium
```

Run tests in headed mode:

```bash
npx playwright test --headed --project=chromium
```

Open HTML report:

```bash
npx playwright show-report
```

## Bug Reporting Summary

| Bug ID | Area | Type |
|---|---|---|
| BUG-001 | Product List | Functional / UI Bug |
| BUG-002 | Checkout | Validation Gap / Improvement |
| BUG-003 | Login | Usability / Content Issue |

Full report: [Bug Report](manual-testing/Bug_Report.md)

## Current Status

| Area | Status |
|---|---|
| GitHub Repo Structure | Completed |
| Manual Test Cases | Completed |
| Bug Reports | Completed |
| Test Plan | Completed |
| Test Summary Report | Completed |
| Playwright Setup | Completed |
| Basic Playwright Tests | Completed |
| API Testing | Planned |
| Security Testing Notes | Planned |

## Learning Outcomes

Through this portfolio, I practised:

- Writing structured manual test cases.
- Executing test cases on a real demo web application.
- Comparing expected results with actual results.
- Recording screenshot evidence.
- Writing professional bug reports.
- Assigning severity and priority.
- Setting up Playwright automation testing.
- Writing JavaScript-based end-to-end tests.
- Running Playwright tests locally and reviewing HTML reports.

## Next Steps

- Add API testing with Postman.
- Add API test cases and API bug reports.
- Add basic OWASP Top 10 notes.
- Add a short security testing report.
- Improve Playwright test structure.
- Add checkout automation tests.