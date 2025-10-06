import { test as base, expect } from '@playwright/test';

type Fixtures = {
  apiBaseUrl: string;
};

export const test = base.extend<Fixtures>({
  apiBaseUrl: [process.env.API_BASE_URL || 'https://httpbin.org', { option: true }],
});

export { expect };
