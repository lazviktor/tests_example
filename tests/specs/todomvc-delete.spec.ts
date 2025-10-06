import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/TodoPage';

test('TodoMVC: удаление элемента', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  await todo.add('Remove me');
  await todo.destroy('Remove me');
  await expect(todo.page.locator('.view', { hasText: 'Remove me' })).toHaveCount(0);
});
