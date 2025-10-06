import { test, expect, request } from '@playwright/test';

test('API: basic-auth', async () => {
  const user = process.env.AUTH_USERNAME || 'foo';
  const pass = process.env.AUTH_PASSWORD || 'bar';
  const ctx = await request.newContext({ baseURL: 'https://httpbin.org' });
  const res = await ctx.get(`/basic-auth/${user}/${pass}`, {
    headers: { Authorization: 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64') }
  });
  expect(res.status()).toBe(200);
  await ctx.dispose();
});
