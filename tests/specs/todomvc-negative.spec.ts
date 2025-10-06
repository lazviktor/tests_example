import { test, expect } from '@playwright/test';

test('TodoMVC: отрицательный кейс — пустой ввод не добавляет элемент', async ({ page }) => {
  await page.goto('/todomvc');
  const input = page.getByPlaceholder('What needs to be done?');
  await input.press('Enter');
  await input.fill(' ');
  await input.press('Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});
