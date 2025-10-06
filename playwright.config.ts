import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config({ path: process.env.DOTENV_CONFIG || '.env' });

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || 'https://demo.playwright.dev';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5 * 1000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'reports/junit.xml' }],
    ['allure-playwright']
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 0,
    navigationTimeout: 15000,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  outputDir: 'test-results',
  grepInvert: process.env.CI ? [/@flaky/] : undefined,
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}'
});
