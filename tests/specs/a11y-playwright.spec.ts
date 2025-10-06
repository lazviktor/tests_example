import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('A11y: главная playwright.dev без критических нарушений', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const results = await new AxeBuilder({ page }).analyze();

  // Падаем только на serious/critical нарушениях, чтобы избежать ложных срабатываний
  const serious = results.violations.filter(v => ['serious','critical'].includes(v.impact || ''));
  expect(serious).toHaveLength(0);
});
