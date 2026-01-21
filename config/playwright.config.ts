// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});
