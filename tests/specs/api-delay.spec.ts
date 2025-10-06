import { test, expect, request } from '@playwright/test';
test('API: задержки (delay)', async () => {
  const ctx = await request.newContext({ baseURL: 'https://httpbin.org', timeout: 15000 });
  const res = await ctx.get('/delay/2');
  expect(res.ok()).toBeTruthy();
  await ctx.dispose();
});
