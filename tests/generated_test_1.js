import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await page.locator('center').getByRole('img').click();

  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');

  await page.getByText('Getting StartedInstallationWriting TestsRunning TestsTest GeneratorTrace ViewerC').click();
  await expect(page).toHaveURL('https://playwright.dev/docs/running-tests');

  await page.locator('li:has-text("Getting StartedInstallationWriting TestsRunning TestsTest GeneratorTrace ViewerC")').getByRole('link', { name: 'Test Generator' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/codegen-intro');

  await page.getByRole('link', { name: 'How to generate tests with Codegen' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/codegen#running-codegen');

});