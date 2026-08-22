# Bug Reports

## BUG-01 — Manual date entry bypasses past-date validation

**Severity:** Medium

**Priority:** High

**Category:** Functional / Input Validation

### Description

The date input prevents users from selecting past dates through the calendar using the HTML `min` attribute. However, the form-level validation only checks whether a date has been entered and does not verify whether the entered date is within the permitted booking range.

As a result, users can bypass the calendar restriction by manually entering a past date.

### Steps to Reproduce

1. Open the Little Lemon reservation page.
2. Focus on the Date field.
3. Enter a past date manually, such as a date in 2008.
4. Complete the remaining reservation fields.
5. Click "Find a Table".

### Expected Result

The application should reject dates before the current date regardless of whether the date is selected through the calendar or entered manually.

### Actual Result

The calendar prevents selection of past dates, but manually entering a past date is accepted and the reservation flow can proceed.

### Technical Observation

The date input uses a minimum date:

`min={new Date().toISOString().split("T")[0]}`

However, `validateForm()` only checks whether the date value exists and does not independently validate whether the entered date satisfies the minimum-date requirement.

### Impact

A user can bypass the intended booking-date restriction through manual input and submit a reservation for a date outside the permitted booking range.

### Reproducibility

Consistently reproducible during manual testing.

### Status

Open