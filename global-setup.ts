import fs from 'fs';
import path from 'path';
import { logger } from './utils/logger';

async function globalSetup() {
  logger.info('========================================');
  logger.info('🚀 TEST EXECUTION STARTED');
  logger.info(`🕒 Start Time : ${new Date().toLocaleString()}`);
  logger.info(`🌍 Environment : ${process.env.ENV || 'dev'}`);
  logger.info('========================================');

  // Ensure result directories exist
  const folders = [
    'test-results/logs',
    'test-results/html-report',
    'test-results/screenshots',
    'test-results/videos'
  ];

  folders.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
  console.log('🔥🔥🔥 GLOBAL SETUP EXECUTED 🔥🔥🔥');
}

export default globalSetup;
