import { chromium } from '@playwright/test';

async function globalSetup() {
  console.log('Global setup started');

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Example: warm up app, preload cache, fetch tokens, etc.
  await page.goto(process.env.BASE_URL!);

  await browser.close();
  console.log('Global setup completed');
}

export default globalSetup;
