# Little Lemon — Test Summary

## 1. Overview

Manual quality assurance testing was performed on the Little Lemon restaurant reservation workflow.

The testing focused on functional correctness, input validation, boundary conditions, reservation data consistency, confirmation behaviour, responsive behaviour, and basic keyboard interaction.

---

## 2. Scope

The following areas were tested:

- Reservation form
- Date selection and validation
- Start time selection
- Reservation duration
- Guest count controls
- Seating selection
- Required-field validation
- Reservation summary
- Reservation editing
- Confirmation page
- State retention during navigation
- State behaviour after page reload
- Mobile, tablet, and desktop layouts
- Keyboard navigation and interaction

---

## 3. Testing Approach

Testing was performed manually using Google Chrome.

The testing approach included:

- Positive testing
- Negative testing
- Boundary-value testing
- State consistency testing
- Responsive testing
- Basic keyboard accessibility testing
- Usability observation

---

## 4. Results

### Functional Testing

The core reservation workflow performed correctly across the tested valid and invalid scenarios.

Required-field validation, guest count boundaries, time and duration selections, seating selection, reservation summary, editing, and confirmation details behaved as expected.

### Boundary Testing

The defined boundaries for:

- Booking dates
- Start times
- Reservation duration
- Guest count

were tested.

The calendar correctly prevented selection of past dates and dates outside the available booking period.

However, one validation inconsistency was identified: past dates could be entered manually through keyboard input.

### Data Consistency

Reservation information remained consistent across the booking and summary flow.

Changes made to reservation details were correctly reflected when reviewing the updated reservation.

### Responsive Testing

The reservation flow remained usable across the tested mobile, tablet, and desktop viewports.

On larger tablet and desktop widths, the content maintained a maximum width instead of expanding proportionally with the viewport. This did not prevent completion of the reservation flow.

### Keyboard Interaction

Most tested controls were keyboard-operable.

Dropdowns could be navigated using the keyboard, guest controls could be operated using keyboard interaction, and seating options could be changed using arrow keys.

The seating radio-button group showed an inconsistent focus/Tab interaction and requires further review.

---

## 5. Defects Identified

### BUG-01 — Manual date entry bypasses past-date restriction

The calendar prevents users from selecting past dates, but manually entering a past date such as 2008 is accepted.

**Severity:** Medium

**Priority:** High

**Status:** Open

See `bug-reports.md` for reproduction details.

---

## 6. Usability Observations

The testing identified several improvement opportunities:

1. Validation messages could have stronger visual emphasis.
2. Keyboard interaction for the seating radio-button group could be made more predictable.
3. The confirmation page could provide a clearer way to modify an existing reservation.
4. Larger-screen layout behaviour could be reviewed for visual balance.

See `usability-accessibility.md` for details.

---

## 7. Overall Assessment

The core reservation workflow performed reliably across the tested scenarios.

The testing identified one functional validation defect and several usability/accessibility improvement opportunities.

The results demonstrate that structured testing can identify inconsistencies that may not be apparent during normal happy-path usage, particularly when testing boundary conditions and alternative interaction methods such as keyboard input.