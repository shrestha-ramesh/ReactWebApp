// tests/hotel.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Hotel reservation form', () => {
    // Adjust URL if your app runs on a different port
    const APP_URL = 'http://localhost:3000';

    test('fills form with valid dates and shows summary', async ({ page }) => {
        await page.goto(APP_URL);
        // Fill inputs by id
        await page.locator('#checkin').fill('2025-12-20');
        await page.locator('#checkout').fill('2025-12-22');
        await page.locator('#people').fill('2');
        await page.waitForTimeout(10000);  // wait 10 second

        await page.locator('#firstname').fill('Ramesh');
        await page.locator('#lastname').fill('Kumar');

        // Click the submit input (value="CheckPrice")
        await page.locator('input[type="submit"][value="CheckPrice"]').click();
        // Wait for the generated summary to appear in main
        const summary = page.locator('main div'); // the component injects a div into <main>
        await expect(summary).toBeVisible({ timeout: 5000 });
        await page.waitForTimeout(10000);  // wait 10 second
        // Basic assertions on summary content
        await expect(summary).toContainText('Name: Ramesh Kumar');
        await expect(summary).toContainText('CheckIN:2025-12-20');
        await expect(summary).toContainText('CheckOut: 2025-12-22');
        await expect(summary).toContainText('Guests: 2');
        await expect(summary).toContainText('Total Cost: 150'); // 100 + 50*(2-1)
    });

    test('shows alert and does not render summary for invalid dates', async ({ page }) => {
        await page.goto(APP_URL);

        // Listen for dialog (alert)
        page.on('dialog', async dialog => {
            // assert alert message
            expect(dialog.message()).toContain('please enter correct dates');
            await dialog.dismiss();
        });

        // Fill invalid dates (checkout <= checkin)
        await page.locator('#checkin').fill('2025-12-22');
        await page.locator('#checkout').fill('2025-12-20');
        await page.locator('#people').fill('1');
        await page.locator('#firstname').fill('A');
        await page.locator('#lastname').fill('B');

        await page.locator('input[type="submit"][value="CheckPrice"]').click();

        // Ensure no summary div was injected
        const summary = page.locator('main div');
        await expect(summary).not.toBeVisible({ timeout: 1000 });
    });
});
