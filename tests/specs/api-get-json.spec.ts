import { test, expect, request } from '@playwright/test';
test('API: httpbin /json контракт', async () => {
  const ctx = await request.newContext({ baseURL: 'https://httpbin.org' });
  const res = await ctx.get('/json');
  expect(res.ok()).toBeTruthy();
  const body = await res.json();
  expect(body).toHaveProperty('slideshow.title');
  await ctx.dispose();
});
