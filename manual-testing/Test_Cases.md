# Manual Test Cases – SauceDemo

## Project Information

**Application Under Test:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Module:** Login  
**Test Type:** Manual Functional Testing  
**Tester:** Tung Anh Bao Nguyen  
**Environment:** Windows 11, Google Chrome  
**Date:** May 2026  

---

## Test Objective

The objective of this testing activity is to verify that the SauceDemo login functionality works correctly for valid users, invalid users, empty input fields, locked users, and unusual input values.

This login test set is designed to demonstrate basic manual testing skills, including positive testing, negative testing, input validation testing, and basic security awareness.

---

## Test Data

| User Type | Username | Password |
|---|---|---|
| Standard User | standard_user | secret_sauce |
| Locked User | locked_out_user | secret_sauce |
| Invalid User | wrong_user | wrong_password |
| SQL-like Input | ' OR '1'='1 | test123 |
| Long Input | 200 characters | 200 characters |

---

# Login Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|---|---|---|---|---|---|---|---|---|
| TC-LOGIN-001 | Verify login with valid credentials | User is on the SauceDemo login page | 1. Enter valid username 2. Enter valid password 3. Click the Login button | Username: standard_user Password: secret_sauce | User should be redirected to the Products page | User was redirected to the Products page successfully. | Pass | manual-testing/screenshots/tc-login-001-valid-login.png |
| TC-LOGIN-002 | Verify login with invalid username | User is on the SauceDemo login page | 1. Enter invalid username 2. Enter valid password 3. Click the Login button | Username: wrong_user Password: secret_sauce | System should display an error message and user should remain on the login page | Error message was displayed and user remained on the login page. | Pass | manual-testing/screenshots/tc-login-002-invalid-username.png |
| TC-LOGIN-003 | Verify login with invalid password | User is on the SauceDemo login page | 1. Enter valid username 2. Enter invalid password 3. Click the Login button | Username: standard_user Password: wrong_password | System should display an error message and user should remain on the login page | Error message was displayed and user remained on the login page. | Pass | manual-testing/screenshots/tc-login-003-invalid-password.png |
| TC-LOGIN-004 | Verify login with empty username | User is on the SauceDemo login page | 1. Leave username field empty 2. Enter valid password 3. Click the Login button | Username: empty Password: secret_sauce | System should display an error message stating that username is required | Error message was displayed indicating that username is required. | Pass | manual-testing/screenshots/tc-login-004-empty-username.png |
| TC-LOGIN-005 | Verify login with empty password | User is on the SauceDemo login page | 1. Enter valid username 2. Leave password field empty 3. Click the Login button | Username: standard_user Password: empty | System should display an error message stating that password is required | Error message was displayed indicating that password is required. | Pass | manual-testing/screenshots/tc-login-005-empty-password.png |
| TC-LOGIN-006 | Verify login with both fields empty | User is on the SauceDemo login page | 1. Leave username field empty 2. Leave password field empty 3. Click the Login button | Username: empty Password: empty | System should display an error message stating that username is required | Error message was displayed indicating that username is required. | Pass | manual-testing/screenshots/tc-login-006-both-empty.png |
| TC-LOGIN-007 | Verify login with locked out user | User is on the SauceDemo login page | 1. Enter locked out username 2. Enter valid password 3. Click the Login button | Username: locked_out_user Password: secret_sauce | System should display an error message stating that the user has been locked out | Error message was displayed indicating that the user has been locked out. | Pass | manual-testing/screenshots/tc-login-007-locked-user.png |
| TC-LOGIN-008 | Verify login with SQL-like input | User is on the SauceDemo login page | 1. Enter SQL-like input in username field 2. Enter any password 3. Click the Login button | Username: ' OR '1'='1 Password: test123 | System should reject the login attempt and display an error message | Login attempt was rejected and an error message was displayed. | Pass | manual-testing/screenshots/tc-login-008-sql-like-input.png |
| TC-LOGIN-009 | Verify login with very long input | User is on the SauceDemo login page | 1. Enter a very long username 2. Enter a very long password 3. Click the Login button | Username: 200 characters Password: 200 characters | System should not crash and should display an error message | Application did not crash and displayed an error message. | Pass | manual-testing/screenshots/tc-login-009-long-input.png |
| TC-LOGIN-010 | Verify logout after successful login | User is logged in with valid credentials | 1. Login with valid credentials 2. Click the menu button 3. Click Logout | Username: standard_user Password: secret_sauce | User should be redirected back to the login page | User was successfully redirected back to the login page after logout. | Pass | manual-testing/screenshots/tc-login-010-logout.png |

---

## Notes

These test cases cover the main login scenarios required for basic manual testing practice. They include positive scenarios, negative scenarios, validation scenarios, and basic security-related input testing.

The same scenarios can later be converted into Playwright automation tests.

---

## Test Execution Summary – Login Module

| Metric | Result |
|---|---|
| Total Test Cases Executed | 10 |
| Passed | 10 |
| Failed | 0 |
| Blocked | 0 |
| Not Run | 0 |

## Overall Result

All planned login test cases were executed successfully.

The SauceDemo login module correctly handled valid login, invalid credentials, empty input fields, locked user login, SQL-like input, long input, and logout flow.

## Key Learning Outcomes

- Practised writing structured manual test cases.
- Executed test cases manually on a real demo web application.
- Compared expected results with actual results.
- Recorded test execution status as Pass, Fail, Blocked, or Not Run.
- Added screenshot evidence for manual testing.
- Improved understanding of login validation and authentication-related test scenarios.