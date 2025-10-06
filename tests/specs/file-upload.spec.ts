test.skip(process.env.CI, 'skip on CI');
import { test, expect } from '@playwright/test';
import path from 'path';

test('Файл: upload на локальной странице', async ({ page, browserName, context }, testInfo) => {
  const filePath = path.resolve(testInfo.project.outputDir, 'sample.txt');
  await testInfo.attach('sample.txt', { body: Buffer.from('hello'), contentType: 'text/plain' });
  // сохраним файл в outputDir (для setInputFiles нужен путь)
  require('fs').writeFileSync(filePath, 'hello');
  const local = 'file://' + path.resolve(__dirname, '../static/upload.html');
  await page.goto(local);
  const input = page.locator('#file');
  await input.setInputFiles(filePath);
  await expect(page.locator('#name')).toHaveText('sample.txt');
});