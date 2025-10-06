import { test as base, expect } from '@playwright/test';

// Пример пользовательской фикстуры (можно расширять контекст теста)
type Fixtures = {
  apiBaseUrl: string;
};

export const test = base.extend<Fixtures>({
  apiBaseUrl: ['https://httpbin.org', { option: true }],
});

export { expect };
