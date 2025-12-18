// tests/reservation.spec.js
const { test, expect } = require('@playwright/test');

test.describe('KaWa Hotel reservation form', () => {
    test('fills reservation form and checks price', async ({ page }) => {
        // Open local app
        await page.goto('http://localhost:3000');

        // Fill date fields (use input selectors that match your app)
        await page.getByLabel('Check In').fill('12/20/2025');
        await page.getByLabel('Check Out').fill('12/22/2025');

        // People field (could be input or select)
        await page.getByLabel('People').fill('2');

        // First and Last name
        await page.getByLabel('First Name').fill('Ramesh');
        await page.getByLabel('Last Name').fill('Kumar');

        // Click the CheckPrice button (by role or text)
        await page.getByRole('button', { name: /CheckPrice/i }).click();

        // Example assertion: wait for a price element or confirmation text
        await expect(page.locator('text=$100')).toBeVisible({ timeout: 5000 });
    });
});
