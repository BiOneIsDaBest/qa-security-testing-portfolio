# QA Tools Notes: Jira, TestRail, Allure Report

## Purpose

This document summarizes my basic understanding of common QA tools used in software testing teams.

The goal is to demonstrate awareness of real QA workflows, including bug tracking, test case management, test execution, automation reporting, and CI evidence.

This file is not intended to claim full professional experience with Jira, TestRail, or Allure. Instead, it shows that I understand how these tools fit into a QA workflow and how similar concepts are demonstrated in my portfolio.

---

## 1. Jira — Bug Tracking and Agile Workflow

### What Jira is used for

Jira is commonly used by software teams to manage tasks, bugs, user stories, sprint work, and issue status.

In a QA workflow, Jira can be used to:

* Create bug tickets
* Assign bugs to developers or QA members
* Set priority
* Track bug status
* Link bugs to test cases or user stories
* Follow progress during a sprint

---

### Key Jira Terms

| Term       | Meaning                                                                              |
| ---------- | ------------------------------------------------------------------------------------ |
| Bug Ticket | A report that describes a defect found during testing                                |
| Assignee   | The person responsible for handling the ticket                                       |
| Reporter   | The person who created the ticket                                                    |
| Priority   | How urgently the issue should be fixed                                               |
| Severity   | How serious the impact is on the system                                              |
| Sprint     | A short development/testing cycle in Agile                                           |
| Status     | Current state of the ticket, such as To Do, In Progress, In Review, Testing, or Done |

---

### Common Jira Status Flow

```text
To Do → In Progress → In Review / Testing → Done
```

---

### Severity vs Priority

| Concept  | Meaning                                                         | Example                                        |
| -------- | --------------------------------------------------------------- | ---------------------------------------------- |
| Severity | How serious the impact is on the application or user experience | Checkout flow allows invalid order             |
| Priority | How urgently the issue should be fixed                          | High priority if it affects core business flow |

A bug can have high severity but lower priority, or low severity but high priority, depending on business needs.

---

### Example Jira-style Bug Ticket From My Portfolio

| Field           | Example                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------- |
| Bug ID          | BUG-004                                                                                                           |
| Title           | User can proceed to checkout with an empty cart                                                                   |
| Type            | Functional / Business Logic Issue                                                                                 |
| Module          | Cart / Checkout                                                                                                   |
| Environment     | Windows 11, Google Chrome                                                                                         |
| Test Account    | standard_user / secret_sauce                                                                                      |
| Severity        | Medium                                                                                                            |
| Priority        | Medium                                                                                                            |
| Reporter        | QA Tester                                                                                                         |
| Assignee        | Developer                                                                                                         |
| Status          | To Do                                                                                                             |
| Description     | The application allows the user to proceed through the checkout flow even when there are no products in the cart. |
| Expected Result | The system should prevent the user from starting or completing checkout when the cart is empty.                   |
| Actual Result   | The system allows the user to continue through the checkout flow even when the cart is empty.                     |
| Evidence        | manual-testing/screenshots/bug-report/bug-004-empty-cart-checkout.png                                             |
| Recommendation  | Add validation to prevent users from checking out with an empty cart.                                             |

---

## 2. TestRail — Test Case Management

### What TestRail is used for

TestRail is commonly used to organize, manage, execute, and track test cases and test results.

In a QA workflow, TestRail can be used to:

* Create test suites
* Write test cases
* Execute test runs
* Record test results
* Track passed, failed, blocked, retest, or skipped tests
* Generate testing progress reports

---

### Key TestRail Terms

| Term        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| Test Suite  | A group of related test cases                              |
| Test Case   | A documented test scenario with steps and expected result  |
| Test Run    | A group of test cases executed in a specific testing cycle |
| Test Result | The outcome of a test case execution                       |
| Passed      | The actual result matches the expected result              |
| Failed      | The actual result does not match the expected result       |
| Blocked     | The test cannot be executed due to another issue           |
| Retest      | The test needs to be executed again after a fix            |

---

### Example TestRail Mapping in My Portfolio

| TestRail Concept | My Portfolio Example                                           |
| ---------------- | -------------------------------------------------------------- |
| Test Suite       | SauceDemo Manual Testing Suite                                 |
| Test Case        | Login, Cart, Checkout, Validation test cases                   |
| Test Run         | Manual Regression Testing Run                                  |
| Test Result      | Passed / Failed status in Test_Cases.md                        |
| Bug Link         | Failed or improvement observations documented in Bug_Report.md |
| Evidence         | Screenshots saved in manual-testing/screenshots/               |

---

### Example Test Run Summary

| Area                   | Example Result                                                                    |
| ---------------------- | --------------------------------------------------------------------------------- |
| Application Under Test | SauceDemo / Swag Labs                                                             |
| Test Type              | Manual Functional Testing                                                         |
| Main Modules           | Login, Product List, Cart, Checkout                                               |
| Bug Examples           | BUG-001, BUG-002, BUG-003, BUG-004, BUG-005                                       |
| Evidence               | Screenshots linked in Bug_Report.md                                               |
| Summary                | Manual testing found functional, validation, usability, and business logic issues |

---

## 3. Allure Report — Automation Test Reporting

### What Allure Report is used for

Allure Report is used to present automation test execution results in a readable format.

It helps QA teams review:

* Passed tests
* Failed tests
* Test execution history
* Test steps
* Screenshots
* Logs
* Attachments
* Failure details

---

### Allure vs Playwright HTML Report

In my current portfolio, I use Playwright HTML Report.

| Feature                 | Playwright HTML Report                 | Allure Report                 |
| ----------------------- | -------------------------------------- | ----------------------------- |
| Passed / Failed Tests   | Yes                                    | Yes                           |
| Test Details            | Yes                                    | Yes                           |
| Screenshots / Traces    | Yes, if configured                     | Yes, via attachments          |
| CI Evidence             | Yes, GitHub Actions artifact           | Yes, can be used in CI        |
| Test History            | Basic / CI-dependent                   | Stronger test history support |
| Beginner-friendly Setup | Very beginner-friendly with Playwright | Requires extra reporter setup |

Note: Allure Report is included here as a QA tools awareness topic. It has not been fully integrated into this portfolio yet. My current implemented report is Playwright HTML Report.

---

## 4. How These Tools Connect to My Portfolio

| QA Workflow                 | Portfolio Evidence                                   |
| --------------------------- | ---------------------------------------------------- |
| Bug tracking                | manual-testing/Bug_Report.md                         |
| Manual test case management | manual-testing/Test_Cases.md                         |
| Test execution result       | manual-testing/Test_Summary_Report.md                |
| Automation testing          | automation-testing/tests/                            |
| Automation report           | Playwright HTML Report                               |
| CI execution                | .github/workflows/playwright.yml                     |
| API testing                 | api-testing/API_Test_Cases.md and Postman collection |
| Security awareness          | security-testing/Security_Testing_Report.md          |
| QA tools awareness          | career-prep/QA_Tools_Notes.md                        |

---

## 5. Why This Matters for QA Internship

Understanding Jira, TestRail, and automation reports is useful for QA internship roles because QA engineers usually work with both documentation and tools.

A QA intern may be expected to:

* Read requirements or user stories
* Write and execute test cases
* Report bugs clearly
* Attach evidence such as screenshots or logs
* Track bug status
* Re-test fixed bugs
* Read automation test results
* Communicate issues to developers or senior QA members

This portfolio demonstrates those core ideas using beginner-friendly tools such as Markdown, Playwright, Postman, and GitHub Actions.

---

## 6. Interview Talking Points

### Jira

I understand Jira as a tool for tracking bugs and sprint work. When I report a bug, I try to include clear steps to reproduce, expected result, actual result, severity, priority, environment, and evidence.

### TestRail

I understand TestRail as a test case management tool. It helps QA teams organize test suites, execute test runs, and record results such as passed, failed, blocked, or retest.

### Allure Report

I understand Allure Report as an automation reporting tool. It helps testers and developers review test results, failed steps, screenshots, logs, and test history more clearly.

### My Portfolio Connection

Although I have not fully integrated Jira, TestRail, or Allure into this portfolio, I created similar workflows using Markdown documents, Playwright HTML Report, Postman, and GitHub Actions to demonstrate the same QA concepts at intern level.

---

## 7. Key Learning Outcomes

* Learned how Jira supports bug tracking and sprint workflow.
* Learned the difference between severity and priority.
* Learned how TestRail supports test case management and test execution tracking.
* Learned how Allure Report supports automation test reporting.
* Compared Allure Report with Playwright HTML Report.
* Mapped QA tool concepts to my own portfolio evidence.
* Improved my ability to explain QA workflow in internship interviews.
