import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/TodoPage';

test('TodoMVC: редактирование элемента', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  await todo.add('Old');
  await todo.edit('Old', 'New');
  await expect(todo.page.locator('.view', { hasText: 'New' })).toBeVisible();
});
