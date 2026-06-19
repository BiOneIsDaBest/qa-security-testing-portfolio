# OWASP Top 10 Notes

## Purpose

This document summarizes my basic understanding of OWASP Top 10 web application security risks.

The goal is not to perform deep penetration testing.
The goal is to demonstrate basic security awareness that is useful for QA, automation testing, API testing, and application testing internship roles.

---

## 1. What is OWASP Top 10?

OWASP Top 10 is a widely used awareness document that summarizes important web application security risks.

For this portfolio, I focus on basic understanding of:

* Broken Access Control
* Injection
* SQL Injection
* Cross-Site Scripting
* Authentication Failures
* Authorization Issues
* Security Misconfiguration
* Input Validation

---

## 2. Broken Access Control

### Meaning

Broken Access Control happens when users can access data, pages, or actions that they should not be allowed to access.

### Simple Examples

* A normal user can access an admin page.
* User A can view or modify User B's data.
* A user can access a restricted page without logging in.
* A user can perform an action that should not be allowed in the current state.

### QA Testing Mindset

As a QA tester, I should ask:

* Is this user allowed to access this page?
* Is this user allowed to perform this action?
* Can a user bypass the normal flow by changing the URL?
* Can a user access restricted data without permission?

### Portfolio Connection

In my SauceDemo testing, I identified a business logic issue where a user can proceed through checkout with an empty cart.

Related file:

```text
manual-testing/Bug_Report.md
```

Related bug:

```text
BUG-004 — User can proceed to checkout with an empty cart
```

This is not a severe access control vulnerability, but it shows awareness of invalid user flows and business logic validation.

### Recommendation

Applications should enforce access control checks on the server side and prevent users from accessing actions or resources that are not allowed.

---

## 3. Injection

### Meaning

Injection happens when an application accepts user input and processes it unsafely, allowing the input to affect backend logic such as database queries, commands, or application behaviour.

### Simple Examples

* SQL Injection
* Command Injection
* Unsafe search or filter input
* Error messages revealing backend query details

### QA Testing Mindset

As a QA tester, I should check:

* Does the application validate user input?
* Does unusual input cause an error?
* Does the application expose database or server error messages?
* Does the application behave unexpectedly when special characters are entered?

### Recommendation

Applications should validate input, use parameterized queries, avoid directly concatenating user input into backend logic, and handle errors safely.

---

## 4. SQL Injection

### Meaning

SQL Injection is a type of injection where user input affects SQL database queries.

### Simple Example

A login, search, or filter form accepts user input.
If the backend does not handle that input safely, it may affect the database query.

### QA Testing Mindset

As a QA tester, I should observe:

* Whether input fields accept unexpected characters
* Whether invalid input causes database-related errors
* Whether the system reveals technical details
* Whether the form has basic validation

### Portfolio Connection

Related validation issues in my portfolio:

```text
BUG-002 — Checkout form does not validate invalid postal code format
BUG-005 — Checkout form accepts very long input values
```

These are not SQL Injection findings, but they show input validation awareness.

### Recommendation

Use server-side validation, parameterized queries, prepared statements, and safe error handling.

---

## 5. Cross-Site Scripting

### Meaning

Cross-Site Scripting, also known as XSS, happens when untrusted user input is displayed on a web page without safe handling.

If the output is not encoded or sanitized properly, malicious scripts may run in another user's browser.

### Simple Examples

* A comment field displays unsafe user input.
* A search page reflects user input directly into the page.
* A profile name field allows unsafe HTML or script content.

### QA Testing Mindset

As a QA tester, I should check:

* Does the application display user input back on the page?
* Are special characters handled safely?
* Is user-generated content encoded before display?
* Does the page display raw HTML or script-like content?

### Recommendation

Applications should validate input, encode output, sanitize user-generated content, and avoid rendering unsafe HTML.

---

## 6. Authentication Failures

### Meaning

Authentication is the process of verifying who the user is.

Authentication failures happen when login, session, password, or identity verification mechanisms are weak or incorrectly implemented.

### Simple Examples

* Weak password rules
* Missing multi-factor authentication for sensitive systems
* Session remains active after logout
* Password reset flow is insecure
* Error messages reveal too much information

### QA Testing Mindset

As a QA tester, I should check:

* Can valid users log in successfully?
* Are invalid login attempts rejected?
* Is the error message clear but not too revealing?
* Does logout end the session correctly?
* Can the user access protected pages after logout?

### Portfolio Connection

Related test areas in my portfolio:

```text
Manual login test cases
Playwright login automation tests
```

These tests demonstrate basic authentication flow testing.

### Recommendation

Applications should use secure authentication, safe session management, clear but safe error messages, and appropriate account protection mechanisms.

---

## 7. Authorization Issues

### Meaning

Authorization controls what an authenticated user is allowed to do.

Authentication answers:

```text
Who are you?
```

Authorization answers:

```text
What are you allowed to access or do?
```

### Simple Examples

* A normal user can access admin features.
* A user can modify another user's information.
* A user can access a restricted action by changing the URL.
* A user can complete a business flow that should be blocked.

### QA Testing Mindset

As a QA tester, I should check:

* Can users access only the features they are allowed to access?
* Can users bypass normal restrictions?
* Are important checks enforced on the server side, not only in the UI?
* Are restricted pages protected?

### Portfolio Connection

Related bug:

```text
BUG-004 — User can proceed to checkout with an empty cart
```

This is mainly a business logic issue, but it helps demonstrate awareness of restricted flows and validation.

### Recommendation

Applications should enforce authorization checks consistently and prevent users from bypassing intended business rules.

---

## 8. Security Misconfiguration

### Meaning

Security Misconfiguration happens when an application, server, framework, or environment is configured insecurely.

### Simple Examples

* Debug mode enabled in production
* Detailed technical errors shown to users
* Default accounts or default passwords
* Directory listing enabled
* Missing or weak security headers
* Overly permissive CORS configuration

### QA Testing Mindset

As a QA tester, I should observe:

* Does the application expose technical error details?
* Are there any obvious debug pages?
* Are default credentials used?
* Are sensitive files or folders publicly accessible?
* Are security-related headers missing or weak?

### Recommendation

Applications should use secure configuration, disable debug mode in production, hide technical error details, remove default credentials, and apply appropriate security headers.

---

## 9. Input Validation

### Meaning

Input validation means checking whether user input is acceptable before processing it.

Input validation helps prevent:

* Invalid data
* Unexpected behaviour
* Some injection risks
* Poor data quality
* Business logic issues

### Simple Examples

* Required fields should not be empty.
* Postal code should follow expected format.
* Input length should have a reasonable limit.
* Special characters should be handled safely.
* Invalid data should show a clear error message.

### Portfolio Connection

Related bugs:

```text
BUG-002 — Checkout form does not validate invalid postal code format
BUG-005 — Checkout form accepts very long input values
```

These findings show basic input validation awareness.

### Recommendation

Applications should validate input on both client side and server side, define field length limits, check expected formats, and display clear validation messages.

---

## 10. Summary Table

| Security Area | Simple Meaning | QA Testing Focus | Portfolio Connection |
| ------------- | -------------- | ---------------- | -------------------- |
| Broken Access Control | User can access something they should not | Restricted pages, restricted actions, invalid flows | BUG-004 |
| Injection | Unsafe input affects backend logic  | Input validation, error handling, unusual input | BUG-002, BUG-005 |
| SQL Injection | Unsafe input affects SQL queries | Form input, search input, database errors | Input validation awareness |
| XSS | Unsafe input is displayed on a page | Reflected input, special characters, output encoding | Future security testing    |
| Authentication | Verifying user identity | Login, logout, invalid login, session | Login test cases and Playwright tests |
| Authorization | Checking what user can do | Role access, restricted actions | BUG-004 as business logic example     |
| Security Misconfiguration | App/server configured insecurely | Debug errors, default credentials, headers | Future security testing |
| Input Validation | Checking user input before processing | Required fields, format, length, negative cases | BUG-002, BUG-005 |

---

## 11. Interview Talking Points

### What is OWASP Top 10?

OWASP Top 10 is a commonly used awareness document that summarizes major web application security risks.

### Why is OWASP useful for QA?

It helps QA testers think beyond only functional testing. QA can also check input validation, access control, authentication flow, error handling, and security-related behaviours.

### Do I perform penetration testing in this portfolio?

No. This portfolio focuses on basic security testing awareness only. I do not perform deep penetration testing or unauthorized testing.

### How does my Cyber Security major connect to QA?

My Cyber Security background helps me understand security risks such as input validation, authentication, authorization, and misconfiguration. I apply that knowledge at a basic QA level to improve test coverage.

### How does this connect to my portfolio?

My portfolio includes manual testing, bug reporting, Playwright automation, API testing, and basic security awareness notes. This shows that I can approach application testing from both functional and security-aware perspectives.

---

## 12. Key Learning Outcomes

* Understood the purpose of OWASP Top 10.
* Learned basic differences between authentication and authorization.
* Learned how Broken Access Control relates to restricted actions and invalid access.
* Learned how Injection, SQL Injection, and XSS relate to unsafe input handling.
* Learned how Security Misconfiguration can expose technical or sensitive information.
* Connected input validation issues to real bugs in my portfolio.
* Practised explaining security basics in a QA internship-friendly way.
