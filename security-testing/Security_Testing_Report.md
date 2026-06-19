# Security Testing Report – SauceDemo

## 1. Overview

This report documents basic security-related observations identified during manual testing of SauceDemo.

The purpose of this report is not to perform deep penetration testing.
The goal is to demonstrate basic security awareness from a QA testing perspective, especially around input validation, authentication flow, authorization/business logic, and OWASP Top 10 concepts.

---

## 2. Project Information

| Field                  | Details                             |
| ---------------------- | ----------------------------------- |
| Application Under Test | SauceDemo / Swag Labs               |
| Website                | https://www.saucedemo.com/          |
| Test Type              | Basic Security-Aware Manual Testing |
| Tester                 | Tung Anh Bao Nguyen / Brian NGUYEN  |
| Environment            | Windows 11, Google Chrome           |
| Test Account           | standard_user / secret_sauce        |
| Date                   | June 2026                           |

---

## 3. Scope

### In Scope

This report focuses on basic security-aware testing areas:

* Input validation
* Basic authentication flow observation
* Authorization / business logic flow observation
* Error handling observation
* OWASP Top 10 awareness mapping

### Out of Scope

The following activities are out of scope:

* Deep penetration testing
* Exploit development
* Automated vulnerability scanning
* Password attacks
* Network attacks
* Testing without authorization
* Attacking third-party systems

---

## 4. Summary of Findings

| Finding ID | Title                                               | Related OWASP Area                     | Type                 | Severity | Priority | Status |
| ---------- | --------------------------------------------------- | -------------------------------------- | -------------------- | -------- | -------- | ------ |
| SEC-001    | Invalid postal code format accepted during checkout | Injection / Input Validation           | Validation Gap       | Low      | Low      | Open   |
| SEC-002    | Very long checkout input values accepted            | Injection / Input Validation           | Validation Gap       | Low      | Low      | Open   |
| SEC-003    | User can proceed to checkout with an empty cart     | Broken Access Control / Business Logic | Business Logic Issue | Medium   | Medium   | Open   |

---

# 5. Findings

## Finding ID: SEC-001

### Title

Invalid postal code format accepted during checkout

### Related OWASP Area

Injection / Input Validation

### Type

Validation Gap

### Severity

Low

### Priority

Low

### Status

Open

### Description

The checkout form allows users to continue when entering a non-numeric or invalid postal code value.

Although this is not a confirmed security vulnerability, weak input validation can lead to poor data quality and may increase the risk of unexpected application behaviour in a real system.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Add any product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter First Name: `Brian`.
7. Enter Last Name: `Nguyen`.
8. Enter Postal Code: `abc@@@`.
9. Click Continue.

### Expected Result

The system should validate the postal code format and display an error message if the value is invalid.

### Actual Result

The system allows the user to continue to the Checkout Overview page with an invalid postal code format.

### Evidence

* [Screenshot 1 – Invalid postal code entered](../manual-testing/screenshots/bug-report/bug-002-0-invalid-postal-code.png)
* [Screenshot 2 – Checkout overview displayed after invalid postal code](../manual-testing/screenshots/bug-report/bug-002-1-invalid-postal-code.png)

### Risk / Impact

In a real e-commerce system, accepting invalid postal code values may affect order processing, delivery accuracy, data quality, and backend validation reliability.

### Recommendation

Add both client-side and server-side validation for postal code format.
The system should display a clear validation message when the value does not match the expected format.

---

## Finding ID: SEC-002

### Title

Very long checkout input values accepted

### Related OWASP Area

Injection / Input Validation

### Type

Validation Gap

### Severity

Low

### Priority

Low

### Status

Open

### Description

The checkout form accepts very long values in the First Name, Last Name, and Postal Code fields.

Although this does not block the checkout flow in the demo application, real applications should apply reasonable input length limits to prevent poor data quality, UI issues, log pollution, or unexpected backend behaviour.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Add any product to the cart.
4. Open the cart page.
5. Click Checkout.
6. Enter very long values:

   * First Name: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
   * Last Name: `bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`
   * Postal Code: `123456789012345678901234567890`
7. Click Continue.

### Expected Result

The system should limit the maximum length of checkout input fields or display a validation message when the input exceeds the allowed length.

### Actual Result

The system accepts very long input values and allows the user to continue to the Checkout Overview page.

### Evidence

* [Screenshot – Long checkout input accepted](../manual-testing/screenshots/bug-report/bug-005-long-input-checkout.png)

### Risk / Impact

In a real application, missing input length validation may contribute to UI display problems, poor data quality, storage issues, logging issues, or unexpected backend behaviour.

### Recommendation

Apply maximum length validation to checkout form fields.
The system should define acceptable input limits and display clear validation messages when those limits are exceeded.

---

## Finding ID: SEC-003

### Title

User can proceed to checkout with an empty cart

### Related OWASP Area

Broken Access Control / Business Logic

### Type

Business Logic Issue

### Severity

Medium

### Priority

Medium

### Status

Open

### Description

The application allows the user to continue through the checkout flow even when there are no products in the cart.

This is mainly a business logic issue rather than a confirmed access control vulnerability. However, it is security-relevant because it shows that the application does not properly restrict an invalid user flow.

### Steps to Reproduce

1. Open SauceDemo: https://www.saucedemo.com/
2. Login using `standard_user` / `secret_sauce`.
3. Do not add any product to the cart.
4. Click the cart icon.
5. Click the Checkout button.
6. Enter valid checkout information:

   * First Name: `Brian`
   * Last Name: `Nguyen`
   * Postal Code: `3000`
7. Click Continue.
8. Click Finish.

### Expected Result

The system should prevent the user from starting or completing checkout when the cart is empty.

The Checkout button should be disabled, or the system should display a clear message such as:

```text
Your cart is empty. Please add an item before checkout.
```

### Actual Result

The system allows the user to continue through the checkout flow even when the cart is empty.

### Evidence

* [Screenshot – Empty cart checkout allowed](../manual-testing/screenshots/bug-report/bug-004-empty-cart-checkout.png)

### Risk / Impact

In a real e-commerce system, this issue may create invalid orders, inaccurate transaction records, poor user experience, or business process errors.

### Recommendation

Add validation to prevent users from proceeding to checkout when the cart is empty.
The system should enforce this rule both in the UI and in the backend/business logic layer.

---

## 6. Overall Assessment

The tested application is a demo e-commerce website, so the findings in this report should be treated as security-related observations rather than confirmed production vulnerabilities.

The main security-aware testing areas identified are:

* Input validation gaps
* Missing format validation
* Missing input length limits
* Invalid business logic flow
* Need for clearer validation and restriction rules

These observations show how functional QA testing can be extended with basic security awareness.

---

## 7. Key Learning Outcomes

* Practised writing a basic security testing report.
* Learned how to map functional issues to security-related concepts.
* Learned not to overclaim findings as critical vulnerabilities.
* Practised explaining input validation and business logic risks.
* Connected OWASP Top 10 awareness with manual testing evidence.
* Improved ability to communicate findings clearly for QA internship roles.

---

## 8. Related Files

| File                                     | Purpose                         |
| ---------------------------------------- | ------------------------------- |
| `security-testing/OWASP_Top_10_Notes.md` | Security awareness notes        |
| `manual-testing/Bug_Report.md`           | Original functional bug reports |
| `manual-testing/Test_Cases.md`           | Manual test cases               |
| `manual-testing/Test_Summary_Report.md`  | Manual testing summary          |
| `automation-testing/tests/`              | Playwright automation tests     |
