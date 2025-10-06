import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly todoItems: Locator;
  readonly counter: Locator;
  readonly filterAll: Locator;
  readonly filterActive: Locator;
  readonly filterCompleted: Locator;
  readonly clearCompletedBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
    this.counter = page.locator('.todo-count');
    this.filterAll = page.getByRole('link', { name: 'All' });
    this.filterActive = page.getByRole('link', { name: 'Active' });
    this.filterCompleted = page.getByRole('link', { name: 'Completed' });
    this.clearCompletedBtn = page.getByRole('button', { name: 'Clear completed' });
  }

  async goto() {
    await this.page.goto('/todomvc');
    await expect(this.newTodo).toBeVisible();
  }

  async add(text: string) {
    await this.newTodo.fill(text);
    await this.newTodo.press('Enter');
  }

  async toggle(text: string) {
    const item = this.page.locator('.view', { hasText: text });
    await item.locator('.toggle').check();
  }

  async showAll() { await this.filterAll.click(); }
  async showActive() { await this.filterActive.click(); }
  async showCompleted() { await this.filterCompleted.click(); }

  async clearCompleted() {
    if (await this.clearCompletedBtn.isVisible()) {
      await this.clearCompletedBtn.click();
    }
  }
}
