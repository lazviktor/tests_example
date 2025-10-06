import { test, expect, request } from '@playwright/test';
test('API: заголовки', async () => {
  const ctx = await request.newContext({ baseURL: 'https://httpbin.org' });
  const res = await ctx.get('/headers', { headers: { 'X-Foo': 'Bar' } });
  const body = await res.json();
  expect(body.headers['X-Foo']).toBe('Bar');
  await ctx.dispose();
});
