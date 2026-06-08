# Test Summary Report – SauceDemo

## 1. Project Information

**Application Under Test:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Test Type:** Manual Functional Testing  
**Tester:** Tung Anh Bao Nguyen  
**Environment:** Windows 11, Google Chrome  
**Date:** June 2026  

---

## 2. Summary

Manual functional testing was performed on SauceDemo to verify the main e-commerce user flows, including login, logout, product browsing, product details, cart management, checkout form validation, checkout overview, and order completion.

The purpose of this test summary report is to summarise the test execution result, main findings, bug/improvement observations, and recommendations for future testing activities.

---

## 3. Test Scope

The following modules were tested:

- Login
- Logout
- Product List
- Product Details
- Product Sorting
- Cart
- Checkout Form
- Checkout Overview
- Order Completion
- Basic usability observations
- Basic validation observations

The following areas were not included in this testing cycle:

- Payment processing
- Backend database testing
- Performance testing
- Mobile app testing
- Cross-browser testing
- Advanced security testing
- API testing

---

## 4. Test Environment

| Item | Details |
|---|---|
| Operating System | Windows 11 |
| Browser | Google Chrome |
| Application | SauceDemo / Swag Labs |
| Website | https://www.saucedemo.com/ |
| Tester | Tung Anh Bao Nguyen |
| Test Type | Manual Functional Testing |
| Evidence Folder | `manual-testing/screenshots/` |

---

## 5. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 29 |
| Passed | 29 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |
| Pass Rate | 100% |

---

## 6. Test Case Coverage

| Module | Number of Test Cases | Result |
|---|---:|---|
| Login | 10 | Passed |
| Product | 3 | Passed |
| Cart | 7 | Passed |
| Checkout | 9 | Passed |
| **Total** | **29** | **Passed** |

---

## 7. Bug / Improvement Summary

| Bug ID | Title | Type | Module | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| BUG-001 | Product images are incorrect when logging in as problem_user | Functional / UI Bug | Product List | Medium | Medium | Open |
| BUG-002 | Checkout form does not validate invalid postal code format | Validation Gap / Improvement | Checkout | Low | Low | Open |
| BUG-003 | Login error message style may not be professional for users | Usability / Content Issue | Login | Low | Low | Improvement Suggested |
| BUG-004 | User can proceed to checkout with an empty cart | Functional / Business Logic Issue | Cart / Checkout | Medium | Medium | Open |
| BUG-005 | Checkout form accepts very long input values | Validation Gap / Improvement | Checkout | Low | Low | Open |

---

## 8. Main Findings

The planned manual test cases for the core SauceDemo user flows passed successfully.

The following areas worked as expected:

- Users can log in with valid credentials.
- Invalid login attempts display error messages.
- Locked out users are prevented from logging in.
- Users can log out successfully.
- Products are displayed on the Products page.
- Product details can be opened.
- Products can be added to and removed from the cart.
- Cart badge updates correctly.
- Checkout form displays required field validation.
- Checkout overview displays order information.
- Users can complete an order with valid checkout information.

The following bug reports or improvement observations were identified:

- Product images may appear incorrect or inconsistent when using the `problem_user` account.
- Checkout postal code field accepts invalid format values.
- Login error message wording may not be suitable for a production application.
- Users can proceed through checkout even when the cart is empty.
- Checkout form accepts very long input values.

---

## 9. Risk Assessment

| Risk | Impact | Recommendation |
|---|---|---|
| Incorrect product images | May confuse users during product browsing | Validate product image mapping |
| Empty cart checkout | May create invalid order flow in a real e-commerce system | Add cart validation before checkout |
| Weak checkout input validation | May reduce data quality | Add format and length validation |
| Informal error message wording | May reduce professionalism in production | Use clear and professional validation messages |

---

## 10. Overall Result

The manual testing cycle was completed successfully.

A total of 29 manual test cases were created and executed. All planned test cases passed during this testing cycle.

Five bug reports and improvement observations were documented separately in `Bug_Report.md`.

Although the selected core user flows worked as expected, several improvement areas were identified, especially around product image consistency, checkout business logic, input validation, and user-facing error message wording.

---

## 11. Recommendations

- Add Playwright automated regression tests for key flows such as login, cart, and checkout.
- Add API testing practice with Postman in a separate testing phase.
- Add basic security testing notes based on OWASP Top 10 awareness.
- Add cross-browser testing in future test cycles.
- Add accessibility testing for key user flows.
- Improve checkout validation for postal code format and input length.
- Prevent checkout when the cart is empty.
- Improve user-facing error message wording for production-level applications.

---

## 12. Conclusion

The SauceDemo web application passed the planned manual functional testing for the selected core e-commerce user flows.

This testing cycle demonstrated practical QA skills, including test planning, manual test case design, test execution, screenshot evidence collection, bug reporting, severity/priority classification, and test summary reporting.

The completed manual testing documentation provides a strong foundation for future automation testing, API testing, and basic security testing work in this portfolio.

The next recommended step is to convert selected manual test cases into Playwright automation tests and continue improving the portfolio with API testing and basic security testing documentation.

---

## 13. Related Documents

| Document | Path |
|---|---|
| Test Plan | `manual-testing/Test_Plan.md` |
| Test Cases | `manual-testing/Test_Cases.md` |
| Bug Report | `manual-testing/Bug_Report.md` |
| Screenshot Evidence | `manual-testing/screenshots/` |