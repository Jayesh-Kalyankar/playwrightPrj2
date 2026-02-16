import { test } from '../fixtures/testFixtures';
import { TestContext } from '../utils/testContext';

test.beforeEach(async ({ page }) => {
  console.log('➡ Starting test...');
  TestContext.set('startTime', Date.now());
});

test.afterEach(async ({ page }, testInfo) => {
  const duration = Date.now() - TestContext.get<number>('startTime');
  console.log(`⬅ Finished: ${testInfo.title} | Time: ${duration}ms`);
});
