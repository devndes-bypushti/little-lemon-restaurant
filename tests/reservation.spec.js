import { test, expect } from '@playwright/test';

test('User can successfully complete a reservation', async ({ page }) => {
  // Open Little Lemon
  await page.goto('/');

  // Navigate to the reservation form
  await page.getByRole('button', { name: 'Reserve a Table' }).click();

  // Verify reservation form is displayed
  await expect(
    page.getByRole('heading', { name: 'Reserve a Table' })
  ).toBeVisible();

  // Enter reservation details
  await page.getByRole('textbox', { name: 'Date' }).fill('2026-08-24');

  await page.getByLabel('Start Time').selectOption('19:00');

  await page.getByLabel('Duration').selectOption('02:00');

  // Increase guests from 1 to 2
  await page.getByRole('button', {
    name: 'Increase number of guests',
  }).click();

  // Select indoor seating
  await page.getByRole('radio', { name: 'Indoor' }).check();

  // Submit reservation
  await page.getByRole('button', { name: 'Find a Table' }).click();

  // Verify reservation summary
  await expect(
    page.getByRole('heading', { name: 'Reservation Summary' })
  ).toBeVisible();
});


test('Required reservation fields must be completed', async ({ page }) => {
  // Open Little Lemon
  await page.goto('/');

  // Navigate to the reservation form
  await page.getByRole('button', { name: 'Reserve a Table' }).click();

  // Submit without completing the required fields
  await page.getByRole('button', { name: 'Find a Table' }).click();

  // Verify validation messages
  await expect(page.getByText('Please select a date.')).toBeVisible();

  await expect(
    page.getByText('Please select a start time.')
  ).toBeVisible();

  await expect(
    page.getByText('Please select a duration.')
  ).toBeVisible();

  await expect(
    page.getByText('Please select a seating type.')
  ).toBeVisible();

  // User should remain on the reservation form
  await expect(
    page.getByRole('heading', { name: 'Reserve a Table' })
  ).toBeVisible();
});


test('Guest count cannot go below the minimum of 1', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Reserve a Table' }).click();

  const decreaseButton = page.getByRole('button', {
    name: 'Decrease number of guests',
  });

  const increaseButton = page.getByRole('button', {
    name: 'Increase number of guests',
  });

  // Reduce the guest count until the minimum is reached
  while (await decreaseButton.isEnabled()) {
    await decreaseButton.click();
  }

  // At 1 guest, decrease must be disabled
  await expect(decreaseButton).toBeDisabled();

  // Increase must still be available
  await expect(increaseButton).toBeEnabled();
});


test('Guest count cannot exceed the maximum of 10', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Reserve a Table' }).click();

  const decreaseButton = page.getByRole('button', {
    name: 'Decrease number of guests',
  });

  const increaseButton = page.getByRole('button', {
    name: 'Increase number of guests',
  });

  const guestCount = page.locator('[aria-live="polite"]');

  // Bring the guest count down to 1.
  while (await decreaseButton.isEnabled()) {
    await decreaseButton.click();
  }

  // Verify the minimum state.
  await expect(decreaseButton).toBeDisabled();

  // Increase guests until the maximum is reached.
  while (await increaseButton.isEnabled()) {
    await increaseButton.click();
  }

  // Verify the maximum state.
  await expect(increaseButton).toBeDisabled();

  // At 10 guests, decreasing must still be possible.
  await expect(decreaseButton).toBeEnabled();

  // Verify that the displayed count is 10.
  await expect(guestCount).toHaveText('10');
});



test('User can edit reservation details before confirmation', async ({ page }) => {
  await page.goto('/');

  // Navigate to reservation form
  await page.getByRole('button', { name: 'Reserve a Table' }).click();

  // Set initial reservation details
  await page.getByRole('textbox', { name: 'Date' }).fill('2026-08-24');

  await page.getByLabel('Start Time').selectOption('19:00');

  await page.getByLabel('Duration').selectOption('02:00');

  // Make sure guest count starts at 1
  const decreaseButton = page.getByRole('button', {
    name: 'Decrease number of guests',
  });

  while (await decreaseButton.isEnabled()) {
    await decreaseButton.click();
  }

  // Increase guests from 1 to 2
  await page.getByRole('button', {
    name: 'Increase number of guests',
  }).click();

  // Select Indoor seating
  await page.getByRole('radio', { name: 'Indoor' }).check();

  // Submit reservation
  await page.getByRole('button', { name: 'Find a Table' }).click();

  // Verify reservation summary appears
  await expect(
    page.getByRole('heading', { name: 'Reservation Summary' })
  ).toBeVisible();

  // Edit the reservation
  await page.getByRole('button', { name: 'Edit Reservation' }).click();

  // Change guests from 2 to 1
  await decreaseButton.click();

  // Change seating from Indoor to Outdoor
  await page.getByRole('radio', { name: 'Outdoor' }).check();

  // Submit the edited reservation
  await page.getByRole('button', { name: 'Find a Table' }).click();

  // Verify updated reservation summary appears
  await expect(
    page.getByRole('heading', { name: 'Reservation Summary' })
  ).toBeVisible();

  // Verify guest count was updated from 2 to 1
  await expect(
    page.locator('.summary-row').filter({ hasText: 'Guests' })
  ).toContainText('1');

  // Verify seating type was updated from Indoor to Outdoor
  await expect(
    page.locator('.summary-row').filter({ hasText: 'Seating Type' })
  ).toContainText('Outdoor');
});