# Little Lemon — Bug Reports

## BUG-01 — Manual date entry allows dates outside the permitted booking range

**Severity:** Medium

**Priority:** High

**Category:** Functional / Input Validation

**Related Test Case:** TC-08

### Description

The booking interface prevents users from selecting past dates through the calendar interface. However, a past date can still be entered manually through keyboard input.

### Steps to Reproduce

1. Open the Little Lemon reservation page.
2. Focus on the date input.
3. Enter a past year such as `2008` manually using the keyboard.
4. Complete the remaining reservation fields.
5. Attempt to continue.

### Expected Result

The application should reject dates before the current date regardless of whether the date is selected through the calendar or entered manually.

### Actual Result

Past dates are disabled when using the calendar, but manually entering a past date such as 2008 is accepted.

### Impact

Users may be able to submit a reservation date that is outside the intended booking range by bypassing the calendar restrictions through manual input.

### Reproducibility

Consistently reproducible during manual testing.

### Status

Open