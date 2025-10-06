import { test, expect } from '@playwright/test';
test('Smoke: playwright.dev загружается и имеет заголовок', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
