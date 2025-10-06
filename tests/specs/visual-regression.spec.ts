import { test, expect } from '@playwright/test';

test.skip(process.env.CI, 'Снапшотные тесты пропускаем на CI'); // создают эталоны на локали
test('Визуальный снапшот главной страницы Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixelRatio: 0.01 });
});
