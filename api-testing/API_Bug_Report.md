# API Bug Report

## Project Information

| Field          | Details                       |
| -------------- | ----------------------------- |
| Project Name   | QA Security Testing Portfolio |
| Module         | API Testing                   |
| API Under Test | ReqRes API                    |
| Tool           | Postman                       |
| Tester         | Brian                         |
| Test Type      | Functional API Testing        |
| Related File   | `API_Test_Cases.md`           |

---

## Bug Summary

| Bug ID      | Title                                                        | Related Test Case | Severity | Priority | Status |
| ----------- | ------------------------------------------------------------ | ----------------- | -------- | -------- | ------ |
| API-BUG-001 | Invalid endpoint returns `200 OK` instead of `404 Not Found` | API-TC-008        | Medium   | Medium   | Open   |

---

# API-BUG-001

## Title

Invalid endpoint returns `200 OK` instead of `404 Not Found`

---

## Type

API Error Handling / Unexpected API Response

---

## Module

API Testing - Negative Test

---

## Environment

| Item             | Details                        |
| ---------------- | ------------------------------ |
| Operating System | Windows                        |
| API Client       | Postman                        |
| Environment      | Public Test API                |
| Base URL         | `https://reqres.in`            |
| Authentication   | API Key via `x-api-key` header |

---

## Severity

Medium

---

## Priority

Medium

---

## Status

Open

---

## Related Test Case

`API-TC-008 - Verify invalid endpoint returns error response`

---

## Description

When sending a GET request to an invalid or undocumented endpoint, the API returned `200 OK` with a resource list response body instead of returning a client error such as `404 Not Found`.

This behavior is unexpected because invalid endpoints should clearly indicate that the requested resource does not exist.

---

## Steps to Reproduce

1. Open Postman.

2. Select the `ReqRes API Testing` environment.

3. Create or open request `API-TC-008 - Invalid Endpoint`.

4. Set method to `GET`.

5. Enter the request URL:

   ```text
   {{base_url}}/api/invalid-endpoint
   ```

6. Add the required header:

   ```text
   x-api-key: {{api_key}}
   ```

7. Click **Send**.

8. Observe the response status code and response body.

---

## Expected Result

The API should return a client error response, such as:

```text
404 Not Found
```

The response body should clearly indicate that the endpoint or resource does not exist.

---

## Actual Result

The API returned:

```text
200 OK
```

The API also returned a resource list response body, even though `/api/invalid-endpoint` does not represent a valid documented resource.

---

## Evidence

```text
api-testing/screenshots/API-TC-008-invalid-endpoint.png
api-testing/screenshots/API-TC-008-failed-test-result.png
```

---

## Impact

This issue may confuse API consumers because an invalid endpoint appears to be successful.
It can make error handling less reliable for frontend applications, automated tests, and API clients.

---

## Recommendation

The API should return a proper client error response for invalid or undocumented endpoints.

Recommended response:

```text
404 Not Found
```

The response body should include a clear error message, for example:

```json
{
  "error": "Endpoint not found"
}
```

---

## Additional Observation

### Observation ID

API-OBS-001

### Title

Create user request accepts missing `job` field

### Related Test Case

`API-TC-007 - Verify create user request with missing job field`

### Observation

When sending a POST request to create a user with only the `name` field and without the `job` field, the API still returned `201 Created`.

### Note

This is not classified as a critical bug because ReqRes is a public test/mock API.
However, in a real production API, required field validation should be clearly defined.

### Recommendation

For a production API, required fields should be validated consistently.
If `job` is required, the API should return a validation error such as:

```text
400 Bad Request
```

Example response:

```json
{
  "error": "job field is required"
}
```
