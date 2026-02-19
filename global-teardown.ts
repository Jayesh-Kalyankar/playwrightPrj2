import { logger } from './utils/logger';

async function globalTeardown() {
  logger.info('========================================');
  logger.info('🏁 TEST EXECUTION FINISHED');
  logger.info(`🕒 End Time : ${new Date().toLocaleString()}`);
  logger.info('========================================');
}

export default globalTeardown;