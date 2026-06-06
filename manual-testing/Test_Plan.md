# Test Plan – SauceDemo

## 1. Project Overview

This test plan defines the manual testing scope for SauceDemo, a demo e-commerce web application used for QA practice.

The purpose of this testing activity is to validate key user flows including login, product browsing, cart management, and checkout.

## 2. Objective

- Verify that users can log in with valid credentials.
- Verify that invalid login attempts show proper error messages.
- Verify that product information is displayed correctly.
- Verify that products can be added to and removed from the cart.
- Verify that cart badge updates correctly.
- Verify that checkout form validation works correctly.
- Verify that users can complete an order successfully.

## 3. Scope

The scope of this manual testing activity focuses on the core user journey of the SauceDemo web application, including login, product browsing, cart management, and checkout.

## 4. Features to be Tested

| Module | Features |
|---|---|
| Login | Valid login, invalid login, locked out user login |
| Logout | Logout from the application |
| Products | Product list, product details, product name, price, image |
| Sorting | Sort products by name and price |
| Cart | Add item, remove item, cart badge update |
| Checkout | Customer information form validation |
| Checkout Overview | Item summary, price, tax, total |
| Order Completion | Complete order and confirmation message |

## 5. Features Not to be Tested

The following areas are outside the scope of this manual testing project:

- Payment processing
- Backend database testing
- Performance testing
- Mobile app testing
- Accessibility testing
- Cross-browser testing
- Advanced security testing
- API testing

## 6. Test Environment

| Item | Details |
|---|---|
| Operating System | Windows 11 |
| Browser | Google Chrome |
| Application | SauceDemo / Swag Labs |
| Website | https://www.saucedemo.com/ |
| Tester | Tung Anh Bao Nguyen ( Brian NGUYEN ) |
| Test Type | Manual Functional Testing |

## 7. Test Data

| User Type | Username | Password |
|---|---|---|
| Standard User | standard_user | secret_sauce |
| Locked User | locked_out_user | secret_sauce |
| Invalid User | wrong_user | wrong_password |

## 8. Test Approach

The testing approach for this project is manual functional testing.

The tester will execute test cases manually in Google Chrome and compare the actual results with the expected results.

The testing process includes:

1. Reviewing the SauceDemo application flow.
2. Identifying key modules and user journeys.
3. Creating manual test cases for positive and negative scenarios.
4. Executing each test case manually.
5. Recording the actual result, status, and evidence.
6. Capturing screenshots for important test results and bugs.
7. Reporting bugs using a structured bug report format.
8. Summarising the testing results in a test summary report.

The main testing focus is functional correctness, basic validation, and user flow consistency.

## 9. Entry Criteria

- The SauceDemo website is accessible.
- Test environment is ready.
- Test cases have been prepared.
- Tester has valid test credentials.
- Browser is working correctly.

## 10. Exit Criteria

- Planned test cases have been executed.
- Actual results have been recorded.
- Test statuses have been updated.
- Screenshot evidence has been captured.
- Bugs have been recorded where applicable.
- Test summary report has been completed.

## 11. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Demo website may change | Test cases may need to be updated | Review the application before execution |
| Internet connection issue | Testing may be interrupted | Re-run tests when connection is stable |
| Browser issue | Results may vary | Use Google Chrome as the main browser |
| Test data changes | Login may fail | Verify test credentials before execution |

## 12. Deliverables

| Deliverable | File / Folder |
|---|---|
| Test Plan | `manual-testing/Test_Plan.md` |
| Test Cases | `manual-testing/Test_Cases.md` |
| Bug Report | `manual-testing/Bug_Report.md` |
| Test Summary Report | `manual-testing/Test_Summary_Report.md` |
| Screenshot Evidence | `manual-testing/screenshots/` |