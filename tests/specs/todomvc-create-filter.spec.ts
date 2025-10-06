import { test, expect } from '@playwright/test';
import { TodoPage } from '../pageObjects/TodoPage';

test('TodoMVC: создание/фильтрация/очистка', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  await todo.add('A'); await todo.add('B'); await todo.add('C');
  await todo.toggle('B');
  await todo.showActive(); await expect(todo.todoItems).toHaveCount(2);
  await todo.showCompleted(); await expect(todo.todoItems).toHaveCount(1);
  await todo.clearCompleted(); await todo.showAll(); await expect(todo.todoItems).toHaveCount(2);
});
