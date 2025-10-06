import { test, expect } from '@playwright/test';

test('Playwright site is reachable', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
