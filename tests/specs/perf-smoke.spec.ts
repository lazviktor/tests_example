import { test, expect } from '@playwright/test';

test('Perf: главная playwright.dev открывается < 5с', async ({ page }) => {
  const start = Date.now();
  await page.goto('https://playwright.dev/');
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(5000);
});
