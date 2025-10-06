import { test, expect, request } from '@playwright/test';
test('API: коды статуса', async () => {
  const ctx = await request.newContext({ baseURL: 'https://httpbin.org' });
  for (const code of [200, 201, 204, 400, 404, 500]) {
    const res = await ctx.get(`/status/${code}`);
    expect(res.status()).toBe(code);
  }
  await ctx.dispose();
});
