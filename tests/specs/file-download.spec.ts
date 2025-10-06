import { test, expect } from '@playwright/test';
import path from 'path';

test('Файл: download c локальной страницы', async ({ page }, testInfo) => {
  const local = 'file://' + path.resolve(__dirname, '../static/download.html');
  await page.goto(local);
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#dl')
  ]);
  const savePath = await download.path();
  expect(savePath).toBeTruthy();
});
