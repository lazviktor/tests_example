import { test, expect } from '@playwright/test';
import path from 'path';

test('Storage State: сохранение и повторное использование', async ({ browser }, testInfo) => {
  const context = await browser.newContext();
  await context.addCookies([{
    name: 'session', value: 'abc123', domain: '.example.com', path: '/', httpOnly: true
  }]);
  const statePath = path.resolve(testInfo.project.outputDir, 'state.json');
  await context.storageState({ path: statePath });
  await context.close();

  const ctx2 = await browser.newContext({ storageState: statePath });
  const cookies = await ctx2.cookies();
  expect(cookies.some(c => c.name === 'session')).toBeTruthy();
  await ctx2.close();
});
