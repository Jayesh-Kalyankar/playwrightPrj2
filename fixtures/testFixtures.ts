import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BlogPage } from '../pages/BlogPage';
import { ProgramPage } from '../pages/ProgramPage';
import { CampusPage } from '../pages/CampusPage';
import { TestContext } from '../utils/testContext';

type Fixtures  = {
  home: HomePage;
  program: ProgramPage;
  campus: CampusPage;
  blog: BlogPage;
  
};

export const test = base.extend<Fixtures>({
  home: async ({ page }, use) => { 
    await use(new HomePage(page));
  },

  program: async ({ page }, use) => { 
    await use(new ProgramPage(page));
  },
  
  campus: async ({ page }, use) => { 
    await use(new CampusPage(page));
  },
  
  blog: async ({ page }, use) => { 
    await use(new BlogPage(page));
  },
});

export { expect } from '@playwright/test';
