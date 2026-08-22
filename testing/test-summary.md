# Test Summary

## Project

Little Lemon Restaurant Reservation Application

## Testing Scope

Testing focused on the restaurant reservation workflow, including:

- Reservation form functionality
- Input validation
- Guest count boundaries
- Reservation summary
- Editing reservation details
- Responsive behaviour
- Keyboard accessibility
- Cross-browser automation

## Manual Testing

Manual testing was performed across the reservation flow.

### Functional Testing

The reservation workflow was tested for:

- Valid reservation submission
- Required field validation
- Date selection
- Start time selection
- Duration selection
- Guest count controls
- Seating selection
- Reservation summary
- Editing reservation details
- Confirmation flow

### Responsive Testing

The application was manually tested across phone, tablet, and desktop viewport sizes.

Observations:

- Phone layouts worked well across tested devices.
- Tablet and desktop layouts did not continuously expand beyond a certain width.
- Content remained usable despite the maximum content width.

### Accessibility Testing

Keyboard navigation was manually explored across the reservation form.

Observations included:

- Dropdowns can be navigated using the keyboard.
- Guest count controls can be operated using Enter.
- Radio button interaction works through arrow-key navigation.
- The final form action can be triggered using Enter.
- Manually entering an invalid historical year into the date field was accepted even though the date picker prevents selecting past dates.

## Automation Testing

Playwright was used to automate five critical reservation scenarios:

1. Complete reservation successfully
2. Required reservation fields must be completed
3. Guest count cannot go below 1
4. Guest count cannot exceed 10
5. User can edit reservation details before confirmation

### Automation Result

**15/15 test executions passed**

The five automated scenarios were executed across:

- Chromium
- Firefox
- WebKit

## Defects / Observations

A date validation inconsistency was identified:

- The date picker prevents users from selecting dates before the current date.
- However, manually typing a historical year such as 2008 into the date input was accepted.

This was documented as a validation defect/observation.

## Overall Result

The core reservation workflow performed successfully during testing.

The project demonstrates functional testing, negative testing, boundary-value analysis, usability/accessibility testing, responsive testing, defect documentation, and browser automation using Playwright.