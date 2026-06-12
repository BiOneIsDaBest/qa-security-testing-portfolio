# Test Reporting Notes

## Purpose

This note explains the basic purpose of test reporting tools in automation testing.

Test reports help QA engineers and developers review automated test execution results, understand which tests passed or failed, and investigate failures using evidence such as error messages, screenshots, traces, or logs.

---

## Playwright HTML Report

In this portfolio, I used Playwright HTML Report as the main reporting solution.

Playwright HTML Report helps display:

* Passed tests
* Failed tests
* Test execution time
* Test details for each scenario
* Browser or project used during test execution
* Failure evidence such as screenshots, traces, and error details when available

The report can be generated locally with:

```powershell
npx playwright test --reporter=list,html
npx playwright show-report
```

In GitHub Actions, the report is uploaded as an artifact named:

```text
playwright-html-report
```

---

## Allure Report Basic Awareness

Allure Report is another popular test reporting tool used in automation testing projects.

Allure Report helps visualize test execution results, including:

* Passed tests
* Failed tests
* Skipped tests
* Test duration
* Failure details
* Attachments and evidence
* Test history and trends when configured in CI

In this portfolio, I used Playwright HTML Report because it is simple, built into Playwright, and suitable for an intern-level automation testing portfolio.

Allure Report is a nice-to-have tool that can be explored later if the project needs more advanced reporting and visual test result analysis.

---

## Playwright HTML Report vs Allure Report

| Area                      | Playwright HTML Report              | Allure Report                                 |
| ------------------------- | ----------------------------------- | --------------------------------------------- |
| Setup                     | Simple and built into Playwright    | Requires extra setup                          |
| Best for                  | Small to medium Playwright projects | Larger projects with advanced reporting needs |
| Shows passed/failed tests | Yes                                 | Yes                                           |
| Shows failure evidence    | Yes                                 | Yes                                           |
| Test history/trends       | Limited                             | Better support when configured                |
| Portfolio priority        | Must-have                           | Nice-to-have                                  |

---

## Interview Explanation

If asked about test reporting tools, I can explain:

```text
In my portfolio, I used Playwright HTML Report to review automated UI test results. The report shows passed and failed tests, execution time, and failure details. I also integrated it with GitHub Actions so the report is uploaded as an artifact after each CI run.

I have also learned the basic purpose of Allure Report. Allure helps visualize test execution results such as passed, failed, skipped tests, failure evidence, and test history. For this portfolio, I kept Playwright HTML Report as the main reporting tool because it is simple and suitable for an intern-level project.
```

---

## Summary

For this portfolio:

* Playwright HTML Report = used in the project
* GitHub Actions artifact = used to store CI report
* Allure Report = basic awareness only
* Priority = keep reporting simple, clear, and practical for internship applications
