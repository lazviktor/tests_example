import { test, expect } from '@playwright/test';

test('TodoMVC: маршрутизация фильтров', async ({ page }) => {
  await page.goto('/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('x');
  await page.keyboard.press('Enter');
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page).toHaveURL(/#\/completed/);
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page).toHaveURL(/#\/active/);
});
