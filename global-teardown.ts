import { cleanupTestData } from './utils/cleanup';

async function globalTeardown() {
  console.log('Global teardown started');
  await cleanupTestData();
  console.log('Global teardown completed');
}

export default globalTeardown;
