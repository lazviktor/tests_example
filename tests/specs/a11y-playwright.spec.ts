import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'playwright-axe';

test('A11y: главная playwright.dev без критических нарушений', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await injectAxe(page);
  await checkA11y(page);
});
