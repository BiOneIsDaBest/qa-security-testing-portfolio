# AI Testing Awareness Notes

## 1. Purpose

This document summarizes my basic understanding of how AI can support software testing and how QA testers should use AI responsibly.

The goal is not to claim professional AI testing experience.
The goal is to demonstrate awareness of AI-assisted QA workflows, AI-powered application testing concepts, and the importance of human review.

---

## 2. What AI Can Support in QA

AI can support QA activities by helping testers work faster and think of more test ideas.

Common AI-assisted testing use cases include:

* Generating test case ideas from requirements
* Creating positive and negative test scenarios
* Suggesting edge cases
* Generating test data
* Summarizing bug reports
* Drafting automation test code
* Explaining failed test output
* Reviewing test coverage gaps
* Creating documentation drafts

AI should be treated as an assistant, not as a final decision-maker.

---

## 3. AI-Assisted Test Case Generation

### Meaning

AI can help generate test case ideas from a feature description, user story, bug report, or requirement.

### Example

If the requirement is:

```text
Users should not be able to checkout with an empty cart.
```

AI may suggest test cases such as:

| Test Case                                      | Expected Result                           |
| ---------------------------------------------- | ----------------------------------------- |
| Checkout with empty cart                       | System should block checkout              |
| Checkout with one item                         | System should allow checkout              |
| Remove item before checkout                    | System should update cart state correctly |
| Directly access checkout URL with empty cart   | System should prevent invalid access      |
| Refresh checkout page after cart becomes empty | System should still block checkout        |

### QA Responsibility

The QA tester must review AI-generated test cases and check whether they are:

* Correct
* Relevant
* Clear
* Executable
* Not duplicated
* Linked to real requirements
* Covering important positive and negative scenarios

---

## 4. AI-Assisted Test Data Generation

### Meaning

AI can help suggest test data for manual, API, or automation testing.

### Examples

| Test Area              | AI-generated Test Data Idea                                           |
| ---------------------- | --------------------------------------------------------------------- |
| Login                  | Valid username, invalid password, empty username, locked user         |
| Checkout               | Valid name, empty name, invalid postal code, very long input          |
| API Testing            | Valid request body, missing field, invalid endpoint, unexpected value |
| Security-aware Testing | Long input, special characters, invalid format                        |

### QA Responsibility

The QA tester should verify whether generated test data is safe, realistic, and appropriate for the application.

Sensitive real personal data should not be used unnecessarily.

---

## 5. AI-Assisted Bug Reporting

### Meaning

AI can help rewrite rough bug notes into a structured bug report.

For example, AI can help organize:

* Title
* Environment
* Steps to reproduce
* Expected result
* Actual result
* Evidence
* Severity
* Priority
* Recommendation

### QA Responsibility

The tester must make sure the final bug report is accurate and based on real observation.

AI should not invent evidence, screenshots, test results, or reproduction steps.

---

## 6. AI-Assisted Automation Testing

### Meaning

AI can help draft automation test code, explain Playwright syntax, and suggest selectors or assertions.

Example AI-assisted tasks:

* Draft Playwright test cases
* Explain failed test errors
* Suggest locator improvements
* Suggest assertions
* Refactor repeated login steps
* Generate comments or documentation

### QA Responsibility

The tester must run the automation tests and verify that:

* The test actually passes
* The test checks the correct behaviour
* The selectors are stable
* The assertions are meaningful
* The test is not flaky
* The test result is supported by evidence or report output

In my portfolio, Playwright tests are written in JavaScript and verified using Playwright HTML Report and GitHub Actions CI.

---

## 7. AI-Powered Application Testing

### Meaning

AI-powered application testing can also mean testing applications that use AI features.

For AI-based applications, QA may need to test:

* Model accuracy
* Prompt behaviour
* Response quality
* Bias
* Hallucination
* Privacy risks
* Safety and ethical behaviour
* Consistency of output
* Edge cases and unexpected prompts

### Example

For an AI chatbot application, QA may check:

| Area             | Example Check                                          |
| ---------------- | ------------------------------------------------------ |
| Accuracy         | Does the chatbot answer factual questions correctly?   |
| Hallucination    | Does the chatbot invent information?                   |
| Bias             | Does the chatbot treat users unfairly?                 |
| Privacy          | Does the chatbot reveal sensitive data?                |
| Safety           | Does the chatbot refuse unsafe requests appropriately? |
| Prompt Behaviour | Does the chatbot follow instructions consistently?     |

---

## 8. Limitations and Risks of AI in Testing

AI can be useful, but it has limitations.

Important risks include:

* Hallucinated test cases
* Incorrect expected results
* Missing business logic context
* Duplicated or low-value test cases
* Overconfidence in AI-generated answers
* Unstable or poor automation code
* Privacy risk if sensitive data is shared with AI tools
* Lack of traceability to real requirements

Because of these risks, AI output should always be reviewed by a human tester.

---

## 9. Human-in-the-Loop QA Approach

A safe way to use AI in testing is:

```text
Human defines goal
→ AI suggests ideas
→ Human reviews and filters
→ Human executes or automates tests
→ Human verifies result
→ Human documents evidence
```

This means AI can speed up testing work, but QA remains responsible for quality, accuracy, evidence, and final decisions.

---

## 10. How This Connects to My Portfolio

| Portfolio Area         | How AI Could Support It                           |
| ---------------------- | ------------------------------------------------- |
| Manual Testing         | Suggest additional test cases and edge cases      |
| Bug Reporting          | Help structure rough bug notes into clear reports |
| Automation Testing     | Help draft or explain Playwright tests            |
| API Testing            | Suggest positive and negative API test cases      |
| Security Testing       | Suggest input validation and OWASP-related checks |
| README / Documentation | Help improve clarity and structure                |

In this portfolio, I use AI awareness as a learning and productivity topic.
I still manually review, execute, and verify all test cases, automation scripts, bug reports, and documentation.

---

## 11. Interview Talking Points

### How can AI help QA testers?

AI can help QA testers generate test ideas, test data, bug report drafts, automation code suggestions, and documentation. However, AI output still needs human review.

### Can AI replace QA testers?

No. AI can assist testers, but QA testers are still needed to understand requirements, business logic, risk, user behaviour, and final test evidence.

### What are the risks of using AI in testing?

AI may hallucinate, miss important edge cases, generate incorrect expected results, or create unstable automation code. Testers must verify all AI-generated output.

### How would I use AI responsibly as a QA intern?

I would use AI as an assistant for brainstorming and drafting, but I would always review the output, execute the tests myself, check evidence, and confirm the results before documenting them.

### How does this connect to my Cyber Security background?

My Cyber Security background helps me understand AI-related risks such as privacy, hallucination, unsafe output, bias, and misuse. In QA, I can apply this awareness to test applications more carefully.

---

## 12. Key Learning Outcomes

* Learned how AI can support QA activities.
* Learned that AI should assist testers, not replace human review.
* Understood basic AI-powered application testing concepts.
* Learned common AI testing risks such as hallucination, bias, privacy risk, and inconsistent output.
* Practised connecting AI awareness with manual testing, automation testing, API testing, and basic security testing.
