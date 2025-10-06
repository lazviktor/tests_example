import { test, expect } from '@playwright/test';
import { TodoPage } from './pageObjects/TodoPage';

test.describe('TodoMVC (demo.playwright.dev)', () => {
  test('создание, фильтрация и статистика', async ({ page }) => {
    const todo = new TodoPage(page);
    await todo.goto();
    await todo.add('Купить молоко');
    await todo.add('Позвонить клиенту');
    await todo.add('Написать тесты');

    await todo.toggle('Позвонить клиенту');
    await expect(todo.counter).toHaveText('2 items left');

    await todo.showActive();
    await expect(todo.todoItems).toHaveCount(2);

    await todo.showCompleted();
    await expect(todo.todoItems).toHaveCount(1);

    await todo.clearCompleted();
    await todo.showAll();
    await expect(todo.todoItems).toHaveCount(2);
  });
});
