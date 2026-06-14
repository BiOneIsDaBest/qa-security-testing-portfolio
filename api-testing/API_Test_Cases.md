# API test Cases

## Project Information

| Field | Details |
|--------|---------|
| Project Name | QA Security Testing Portfolio |
| Module | API Testing |
| API Under Test | ReqRes API |
| Base URL | `https://reqres.in` |
| Tool | Postman |
| Tester | Brian |
| Test Type | Functional API Testing |
| Testing Scope | GET, POST, PUT, DELETE, Status Code Validation, JSON Response Validation, Header Validation, Request Body Validation, Positive Testing, Negative Testing |

---

## API Testing Scope

This document contains API test cases for validating common REST API operations using Postman.

### Objectives

- Verify correct HTTP methods are supported.
- Verify correct HTTP status codes are returned.
- Verify JSON response structure and data integrity.
- Verify request body handling.
- Verify positive and negative API scenarios.
- Verify header validation using `x-api-key`.

---

## Test Environment

| Item | Details |
|--------|---------|
| Operating System | Windows |
| API Client | Postman |
| Browser | N/A |
| Environment | Public Test API |
| Authentication | API Key via `x-api-key` Header |
| Network | Personal Internet Connection |

---

## API Test Cases

| Test Case ID | Test Scenario | Method | Endpoint | Preconditions | Test Steps | Test Data | Expected Result | Actual Result | Status | Evidence |
|-------------|-------------|--------|----------|---------------|------------|-----------|----------------|--------------|--------|----------|
| API-TC-001 | Verify user list can be retrieved successfully | GET | `/api/users?page=2` | ReqRes environment is selected in Postman | 1. Open Postman.<br>2. Select GET method.<br>3. Enter `{{base_url}}/api/users?page=2`.<br>4. Add `x-api-key` header.<br>5. Click Send. | N/A | Response status should be `200 OK`. Response body should contain `page`, `per_page`, `total`, and `data` array. | Response returned 200 OK. Response body contains page, per_page, total, total_pages, and data array. | Pass | api-testing/screenshots/API-TC-001-user-list.png |
| API-TC-002 | Verify single user can be retrieved successfully | GET | `/api/users/2` | ReqRes environment is selected in Postman | 1. Select GET method.<br>2. Enter `{{base_url}}/api/users/2`.<br>3. Add `x-api-key` header.<br>4. Click Send. | User ID: `2` | Response status should be `200 OK`. Response body should contain `id`, `email`, `first_name`, `last_name`, and `avatar`. | Response returned 200 OK. Response body contains user data with id, email, first_name, last_name, and avatar. | Pass | api-testing/screenshots/API-TC-002-single-user.png |
| API-TC-003 | Verify non-existing user returns not found | GET | `/api/users/999` | ReqRes environment is selected in Postman | 1. Select GET method.<br>2. Enter `{{base_url}}/api/users/999`.<br>3. Add `x-api-key` header.<br>4. Click Send. | User ID: `999` | Response status should be `404 Not Found`. Response body should not contain valid user data. | Response returned 404 Not Found. Response body does not contain valid user data. | Pass | api-testing/screenshots/API-TC-003-user-not-found.png |
| API-TC-004 | Verify user can be created with valid request body | POST | `/api/users` | ReqRes environment is selected in Postman | 1. Select POST method.<br>2. Enter `{{base_url}}/api/users`.<br>3. Add required headers.<br>4. Add JSON request body.<br>5. Click Send. | `{ "name": "Brian", "job": "QA Intern" }` | Response status should be `201 Created`. Response body should contain `name`, `job`, `id`, and `createdAt`. | Response returned 201 Created. Response body contains name, job, id, and createdAt. | Pass | api-testing/screenshots/API-TC-004-create-user.png |
| API-TC-005 | Verify user can be updated with PUT request | PUT | `/api/users/2` | Existing user ID is available | 1. Select PUT method.<br>2. Enter `{{base_url}}/api/users/2`.<br>3. Add required headers.<br>4. Add JSON request body.<br>5. Click Send. | `{ "name": "Brian Updated", "job": "Automation Testing Intern" }` | Response status should be `200 OK`. Response body should contain updated `name`, `job`, and `updatedAt`. | Response returned 200 OK. Response body contains updated name, job, and updatedAt. | Pass | api-testing/screenshots/API-TC-005-update-user.png |
| API-TC-006 | Verify user can be deleted successfully | DELETE | `/api/users/2` | Existing user ID is available | 1. Select DELETE method.<br>2. Enter `{{base_url}}/api/users/2`.<br>3. Add `x-api-key` header.<br>4. Click Send. | User ID: `2` | Response status should be `204 No Content`. Response body should be empty. | Response returned 204 No Content. Response body is empty. | Pass | api-testing/screenshots/API-TC-006-delete-user.png |
| API-TC-007 | Verify create user request with missing job field | POST | `/api/users` | ReqRes environment is selected in Postman | 1. Select POST method.<br>2. Enter `{{base_url}}/api/users`.<br>3. Add required headers.<br>4. Send request body without `job` field.<br>5. Click Send. | `{ "name": "Brian" }` | API should handle missing field consistently. Result should be analyzed based on actual API behavior. | To be executed | Not Run | To be added |
| API-TC-008 | Verify invalid endpoint returns error response | GET | `/api/invalid-endpoint` | ReqRes environment is selected in Postman | 1. Select GET method.<br>2. Enter `{{base_url}}/api/invalid-endpoint`.<br>3. Add `x-api-key` header.<br>4. Click Send. | N/A | Response should return client error such as `404 Not Found`. | To be executed | Not Run | To be added |
| API-TC-009 | Verify response status code for valid GET request | GET | `/api/users?page=2` | ReqRes environment is selected in Postman | 1. Send GET request to user list endpoint.<br>2. Verify status code in Postman response panel. | N/A | Status code should be `200 OK`. | To be executed | Not Run | To be added |
| API-TC-010 | Verify response body structure for user list | GET | `/api/users?page=2` | ReqRes environment is selected in Postman | 1. Send GET request to user list endpoint.<br>2. Open response body.<br>3. Verify JSON fields and data array. | N/A | Response body should contain `page`, `per_page`, `total`, `total_pages`, and `data` array. | To be executed | Not Run | To be added |

---

## Notes

- Positive test cases validate expected successful behavior.
- Negative test cases validate API handling of invalid input, missing data, or invalid endpoints.
- Update **Actual Result**, **Status**, and **Evidence** after executing each test case.
- Do not commit real API keys to GitHub repositories.
- Store screenshots in:

```text
api-testing/screenshots/
```

### Example Evidence Naming Convention

```text
API-TC-001-user-list.png
API-TC-002-single-user.png
API-TC-003-user-not-found.png
API-TC-004-create-user.png
API-TC-005-update-user.png
API-TC-006-delete-user.png
```

### Status Values

```text
Pass
Fail
Blocked
Not Run
```