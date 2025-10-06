import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/TodoPage';

test('TodoMVC: сохранение в localStorage', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  await todo.add('Persist');
  await page.reload();
  await expect(todo.page.locator('.view', { hasText: 'Persist' })).toBeVisible();
});
