import { test } from '../fixtures/testFixtures';

test('Validate all page titles', async ({ home, program, campus, blog }) => {
  await home.openPage();
  await program.openPage();
  await campus.openPage();
  await blog.openPage();
});
