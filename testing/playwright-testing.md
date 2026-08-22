# Playwright Automation Testing

## Overview

Playwright was used to automate critical reservation workflows in the Little Lemon restaurant application.

The automated tests focus on functional workflows, validation, boundary conditions, and reservation editing.

## Automated Test Scenarios

| Test | QA Coverage |
|---|---|
| Complete reservation successfully | Functional / happy path testing |
| Required reservation fields must be completed | Negative testing / validation |
| Guest count cannot go below 1 | Boundary-value testing |
| Guest count cannot exceed 10 | Boundary-value testing |
| User can edit reservation details before confirmation | Multi-step workflow and state testing |

## Browser Coverage

The automated test suite was executed across three browser engines:

- Chromium
- Firefox
- WebKit

### Test Result

**15/15 test executions passed**

The five automated scenarios were executed against all three supported browser engines.

## Playwright Techniques Used

- Role-based locators
- Label-based locators
- CSS locators
- Form interaction
- Dropdown selection
- Radio button selection
- Button state validation
- Assertions using Playwright `expect`
- Repeated interaction for boundary testing
- Multi-step workflow automation
- Cross-browser execution

## Example Validation

The guest count requirement was tested using boundary-value analysis.

Expected behaviour:

- Minimum guests: 1
- Maximum guests: 10
- Decrease button disabled at 1
- Increase button disabled at 10

## Notes

The automation suite was developed against the existing Little Lemon React application.

The tests intentionally cover realistic user workflows rather than isolated UI elements.