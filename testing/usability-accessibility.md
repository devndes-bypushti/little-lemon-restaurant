# Little Lemon — Usability & Accessibility Observations

## 1. Purpose

This document records usability and keyboard interaction observations identified while testing the restaurant reservation workflow.

These observations are separated from functional defects unless the behaviour clearly violates an expected requirement.

---

## U-01 — Form field clarity

**Result:** Positive

The reservation form clearly communicates the information required from the user, including date, start time, duration, number of guests, and seating preference.

The constrained input controls reduce the opportunity for users to enter unsupported values.

---

## U-02 — Error message visibility

**Result:** Improvement opportunity

Validation messages clearly communicate what needs to be corrected.

However, the visual emphasis of the error messages could be increased to make them more noticeable, particularly when users have several elements on the page competing for attention.

**Suggested improvement:**

Consider stronger visual emphasis for validation messages through clearer placement, typography, or visual treatment while maintaining accessibility.

---

## U-03 — Keyboard navigation

**Result:** Mostly functional; further review recommended

Most reservation controls could be reached and operated using keyboard interaction.

Observed behaviour included:

- Dropdown options could be navigated using the keyboard.
- Guest count could be changed using keyboard interaction.
- Seating options could be changed using arrow keys.
- Pressing Enter from the final form interaction could proceed to the next step.

The focus order and interaction behaviour of the seating radio-button group require further review.

---

## U-04 — Seating radio-button keyboard interaction

**Result:** Interaction inconsistency observed

When keyboard focus reaches the Indoor seating option:

1. Indoor receives focus.
2. Pressing Enter does not select Indoor.
3. Pressing Tab moves focus to the Find a Table button rather than the Outdoor option.
4. Pressing the Right Arrow key moves to and selects Outdoor.
5. Pressing the Left Arrow key moves to and selects Indoor.
6. Pressing Enter can then proceed to the next step.

**Observation:**

Arrow-key interaction within the radio-button group works, but the initial focus and Tab behaviour are not immediately intuitive.

**Suggested improvement:**

Review the keyboard focus behaviour and interaction pattern of the seating radio-button group to ensure the controls provide a predictable and discoverable keyboard experience.

---

## U-05 — Confirmation navigation

**Result:** Improvement opportunity

Reservation information remains available when navigating back through the application and can be edited successfully.

However, the confirmation page does not provide an explicit action for modifying the reservation. Returning to the reservation requires navigating through the logo and reservation flow.

**Suggested improvement:**

Consider providing a clear "Modify Reservation" or "Back to Reservation" action if users are expected to edit a confirmed reservation.

---

## U-06 — Reservation state after page reload

**Result:** Behaviour observed

Reservation information remains available during navigation within the application but is reset after a full page reload.

This behaviour is consistent with the application's current client-side implementation and should not be treated as a defect unless persistent reservation data across reloads is an explicit product requirement.

---

## U-07 — Responsive behaviour on larger screens

**Result:** Improvement opportunity

The reservation experience remained usable across tested mobile, tablet, and desktop viewports.

On larger tablet and desktop widths, the content maintains a maximum width instead of continuing to expand proportionally with the viewport.

The behaviour does not currently prevent users from completing the reservation flow.

**Suggested improvement:**

Review whether the maximum content width provides the intended visual balance on larger screens.