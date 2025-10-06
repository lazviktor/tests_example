import { test, expect } from '@playwright/test';

test('Мок сети: перехват и фиктивный ответ', async ({ page }) => {
  await page.route('https://httpbin.org/headers', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ headers: { 'X-Intercepted': 'Yes' } })
    });
  });
  const res = await page.request.get('https://httpbin.org/headers');
  const data = await res.json();
  expect(data.headers['X-Intercepted']).toBe('Yes');
});
