# Test Plan – SauceDemo

## 1. Project Overview

This test plan defines the manual testing scope for SauceDemo, a demo e-commerce web application used for QA practice.

The purpose of this testing activity is to validate key user flows including login, product browsing, cart management, and checkout.

## 2. Objectives

- Verify that users can log in with valid credentials.
- Verify that invalid login attempts show proper error messages.
- Verify that product information is displayed correctly.
- Verify that products can be added to and removed from the cart.
- Verify that cart badge updates correctly.
- Verify that checkout form validation works correctly.
- Verify that users can complete an order successfully.

## 3. Scope

### In Scope

- Login functionality
- Logout functionality
- Product list page
- Product detail page
- Add to cart
- Remove from cart
- Cart badge update
- Cart page
- Checkout form validation
- Checkout overview
- Order completion

### Out of Scope

- Payment processing
- Backend database testing
- Performance testing
- Mobile app testing
- Accessibility testing
- Cross-browser testing

## 4. Test Environment

| Item | Details |
|---|---|
| Operating System | Windows 11 |
| Browser | Google Chrome |
| Application | SauceDemo / Swag Labs |
| Website | https://www.saucedemo.com/ |
| Tester | Tung Anh Bao Nguyen ( Brian NGUYEN ) |
| Test Type | Manual Functional Testing |

## 5. Test Data

| User Type | Username | Password |
|---|---|---|
| Standard User | standard_user | secret_sauce |
| Locked User | locked_out_user | secret_sauce |
| Invalid User | wrong_user | wrong_password |

## 6. Entry Criteria

- The SauceDemo website is accessible.
- Test environment is ready.
- Test cases have been prepared.
- Tester has valid test credentials.
- Browser is working correctly.

## 7. Exit Criteria

- Planned test cases have been executed.
- Actual results have been recorded.
- Test statuses have been updated.
- Screenshot evidence has been captured.
- Bugs have been recorded where applicable.
- Test summary report has been completed.

## 8. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Demo website may change | Test cases may need to be updated | Review the application before execution |
| Internet connection issue | Testing may be interrupted | Re-run tests when connection is stable |
| Browser issue | Results may vary | Use Google Chrome as the main browser |
| Test data changes | Login may fail | Verify test credentials before execution |

## 9. Deliverables

- Test_Cases.md
- Bug_Report.md
- Test_Summary_Report.md
- Screenshot evidence