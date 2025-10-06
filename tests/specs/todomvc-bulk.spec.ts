import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/TodoPage';

test('TodoMVC: массовые операции', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  for (let i=0; i<10; i++) await todo.add('Task '+i);
  await todo.toggle('Task 0'); await todo.toggle('Task 1'); await todo.toggle('Task 2');
  await todo.showCompleted(); await expect(todo.todoItems).toHaveCount(3);
  await todo.clearCompleted(); await todo.showAll(); await expect(todo.todoItems).toHaveCount(7);
});
