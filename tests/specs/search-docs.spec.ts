import { test, expect } from '@playwright/test';

test('-skip Документация: поиск по сайту playwright.dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: /Search/ }).click();
  await page.keyboard.type('trace viewer');
  await page.keyboard.press('Enter');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.url()).toContain('search');
});
