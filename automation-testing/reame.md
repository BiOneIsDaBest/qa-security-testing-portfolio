# Automation Testing – Playwright

## Overview

This folder contains Playwright automation tests for SauceDemo.

The purpose of this section is to demonstrate basic end-to-end automation testing skills using JavaScript and Playwright.

## Application Under Test

**Application:** SauceDemo / Swag Labs  
**Website:** https://www.saucedemo.com/  
**Test Type:** End-to-End Automation Testing  

## Tools Used

- Playwright
- JavaScript
- Node.js
- Playwright HTML Report
- GitHub Actions CI

## Current Test Coverage

| Test ID | Test Scenario | Type | Status |
|---|---|---|---|
| TC-AUTO-LOGIN-001 | Valid login should redirect user to Products page | Positive | Automated |
| TC-AUTO-LOGIN-002 | Invalid login should display error message | Negative | Automated |
| TC-AUTO-CART-001 | User should be able to add product to cart | Functional | Automated |
| TC-AUTO-CART-002 | User should be able to remove product from cart | Functional | Automated |

## How to Run Tests

Install dependencies:

```bash
npm install