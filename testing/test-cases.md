# Little Lemon — Test Cases

## 1. Testing Scope

The testing focused on the restaurant table reservation workflow, covering functional behaviour, input validation, boundary conditions, reservation state consistency, confirmation behaviour, and selected keyboard and responsive interactions.

---

## 2. Environment

- Application: Little Lemon Restaurant
- Browser: Google Chrome
- Testing approach: Manual testing
- Viewports: Desktop, tablet and mobile
- Primary feature tested: Table reservation

---

# 3. Functional Testing

## TC-01 — Successful reservation

**Priority:** High

**Precondition:** User is on the reservation page.

**Steps:**
1. Select a valid future date.
2. Select an available start time.
3. Select a valid duration.
4. Set a valid number of guests.
5. Select a seating preference.
6. Continue to the next step.

**Expected Result:**  
User should proceed to the reservation summary with the entered details.

**Actual Result:**  
Reservation proceeded successfully and the entered details were displayed correctly.

**Status:** PASS


## TC-02 — Reservation with missing date

**Priority:** High

**Steps:**
1. Leave the date unselected.
2. Complete the remaining required fields.
3. Attempt to continue.

**Expected Result:**  
The application should prevent progression and display appropriate validation.

**Actual Result:**  
The application prevented progression and displayed the required validation.

**Status:** PASS


## TC-03 — Reservation with missing start time

**Priority:** High

**Steps:**
1. Select a valid date.
2. Leave the start time unselected.
3. Complete the remaining required fields.
4. Attempt to continue.

**Expected Result:**  
The application should prevent progression and display appropriate validation.

**Actual Result:**  
The application prevented progression and displayed the required validation.

**Status:** PASS


## TC-04 — Reservation with missing duration

**Priority:** High

**Steps:**
1. Select a valid date.
2. Select a valid start time.
3. Leave duration unselected.
4. Complete the remaining required fields.
5. Attempt to continue.

**Expected Result:**  
The application should prevent progression and display appropriate validation.

**Actual Result:**  
The application prevented progression and displayed the required validation.

**Status:** PASS


## TC-05 — Reservation with missing guest count

**Priority:** High

**Steps:**
1. Leave the guest count at an invalid/unselected state if applicable.
2. Complete the remaining required fields.
3. Attempt to continue.

**Expected Result:**  
The application should prevent progression if the guest count is invalid.

**Actual Result:**  
The application prevented progression when the required condition was not satisfied.

**Status:** PASS


## TC-06 — Reservation with missing seating preference

**Priority:** Medium

**Steps:**
1. Complete all required fields except seating preference.
2. Attempt to continue.

**Expected Result:**  
The application should prevent progression and request a seating selection.

**Actual Result:**  
The application prevented progression and displayed the required validation.

**Status:** PASS


# 4. Boundary Testing

## TC-07 — Today's date

**Expected Result:**  
Today's date should be available for selection.

**Actual Result:**  
Today's date was available for selection.

**Status:** PASS


## TC-08 — Past date through calendar

**Expected Result:**  
Dates before the current date should not be available for selection.

**Actual Result:**  
Past dates were disabled in the calendar.

**Status:** PASS


## TC-09 — Last available date of the month

**Expected Result:**  
The last available date of the current month should be selectable.

**Actual Result:**  
The last available date of the month was selectable.

**Status:** PASS


## TC-10 — Date beyond the allowed booking range

**Expected Result:**  
Dates beyond the allowed booking period should not be available.

**Actual Result:**  
Dates beyond the available booking period could not be selected through the calendar.

**Status:** PASS


## TC-11 — Earliest available time

**Test Data:** 18:00

**Expected Result:**  
18:00 should be selectable.

**Actual Result:**  
18:00 was selectable.

**Status:** PASS


## TC-12 — Latest available time

**Test Data:** 21:00

**Expected Result:**  
21:00 should be selectable.

**Actual Result:**  
21:00 was selectable.

**Status:** PASS


## TC-13 — Default time option

**Expected Result:**  
The default "Select a time" state should not allow a reservation to proceed as a valid time selection.

**Actual Result:**  
The application prevented progression without a valid time selection.

**Status:** PASS


## TC-14 — Minimum duration

**Test Data:** 1 hour

**Expected Result:**  
The minimum duration should be selectable.

**Actual Result:**  
1 hour was selectable.

**Status:** PASS


## TC-15 — Maximum duration

**Test Data:** 3 hours

**Expected Result:**  
The maximum duration should be selectable.

**Actual Result:**  
3 hours was selectable.

**Status:** PASS


## TC-16 — Minimum guest count

**Test Data:** 1 guest

**Expected Result:**  
The guest count should not decrease below 1 and the decrement control should be disabled.

**Actual Result:**  
The decrement control was disabled at 1.

**Status:** PASS


## TC-17 — Maximum guest count

**Test Data:** 10 guests

**Expected Result:**  
The guest count should not increase beyond 10 and the increment control should be disabled.

**Actual Result:**  
The increment control was disabled at 10.

**Status:** PASS


## TC-18 — Guest count increment and decrement

**Steps:**
1. Start with 1 guest.
2. Increase the count using +.
3. Decrease the count using -.

**Expected Result:**  
The guest count should update correctly.

**Actual Result:**  
The guest count updated correctly.

**Status:** PASS


## TC-19 — Attempt to exceed maximum guest count

**Expected Result:**  
The count should remain at 10.

**Actual Result:**  
The count remained at 10.

**Status:** PASS


## TC-20 — Attempt to go below minimum guest count

**Expected Result:**  
The count should remain at 1.

**Actual Result:**  
The count remained at 1.

**Status:** PASS


# 5. Seating Selection

## TC-21 — Indoor seating

**Expected Result:**  
Indoor seating should become selected.

**Actual Result:**  
Indoor seating was selected successfully.

**Status:** PASS


## TC-22 — Outdoor seating

**Expected Result:**  
Outdoor seating should become selected.

**Actual Result:**  
Outdoor seating was selected successfully.

**Status:** PASS


## TC-23 — Switching seating type

**Steps:**
1. Select Indoor.
2. Select Outdoor.

**Expected Result:**  
Only the most recently selected seating option should remain selected.

**Actual Result:**  
The seating selection switched correctly between Indoor and Outdoor.

**Status:** PASS


# 6. Reservation State and Data Consistency

## TC-24 — Verify reservation summary

**Steps:**
1. Complete a reservation using known values.
2. Proceed to the summary page.
3. Compare the summary with the entered values.

**Expected Result:**  
All reservation details should match the values entered by the user.

**Actual Result:**  
The summary displayed the correct reservation details.

**Status:** PASS


## TC-25 — Edit reservation

**Steps:**
1. Complete a reservation.
2. Return to the reservation flow.
3. Change one reservation value.
4. Review the updated information.

**Expected Result:**  
The changed value should be reflected correctly.

**Actual Result:**  
The reservation value was successfully edited.

**Status:** PASS


## TC-26 — Edit multiple reservation values

**Steps:**
1. Complete a reservation.
2. Return to the reservation flow.
3. Modify multiple fields.
4. Review the reservation summary.

**Expected Result:**  
All modified values should be reflected correctly.

**Actual Result:**  
All modified values were reflected correctly.

**Status:** PASS


# 7. Confirmation

## TC-27 — Confirmation displays correct details

**Expected Result:**  
The confirmation page should display the final reservation details accurately.

**Actual Result:**  
The confirmation page displayed the correct reservation details.

**Status:** PASS


## TC-28 — Reservation state during navigation

**Steps:**
1. Complete a reservation.
2. Navigate away from the reservation flow using the available navigation.
3. Return to the reservation page.
4. Review and edit the previously entered details.

**Expected Result:**  
Reservation information should remain available during navigation within the application.

**Actual Result:**  
Previously entered information remained available and could be edited.

**Status:** PASS


## TC-29 — Reservation state after page reload

**Steps:**
1. Complete or partially complete a reservation.
2. Reload the application.
3. Return to the reservation flow.

**Expected Result:**  
Behaviour depends on whether reservation persistence across page reloads is required.

**Actual Result:**  
The reservation data was reset after a full page reload.

**Status:** OBSERVATION


# 8. Responsive Testing

## TC-30 — Mobile viewport

**Expected Result:**  
Reservation workflow should remain usable without content being cut off or overlapping.

**Actual Result:**  
The reservation flow remained usable across the tested mobile viewport sizes.

**Status:** PASS


## TC-31 — Tablet viewport

**Expected Result:**  
Reservation workflow should remain usable and visually coherent.

**Actual Result:**  
The content remained usable, although the layout did not continue expanding proportionally beyond a certain width.

**Status:** OBSERVATION


## TC-32 — Desktop viewport

**Expected Result:**  
Reservation workflow should remain usable and visually coherent.

**Actual Result:**  
The content remained usable, although the layout maintained a maximum width rather than expanding with larger viewport widths.

**Status:** OBSERVATION