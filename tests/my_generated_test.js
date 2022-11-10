import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright vs selenium');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await expect(page).toHaveURL('https://www.google.com/search?q=playwright+vs+selenium&source=hp&ei=UYptY4KaLZGckPIP2IK0wAY&iflsig=AJiK0e8AAAAAY22YYSp_PHY3ZGueRvrvQsvnH7kR9Twd&ved=0ahUKEwjChtee46T7AhURDkQIHVgBDWgQ4dUDCAo&uact=5&oq=playwright+vs+selenium&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOhEIABCPARCPARDqAhCMAxDlAjoRCC4QjwEQjwEQ6gIQjAMQ5QI6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CwguEIAEEMcBENEDOggIABCxAxCDAToICAAQgAQQsQM6CwguEIAEELEDEIMBOhEILhCABBCxAxCDARDHARCvAToOCC4QrwEQxwEQ1AIQgARQiAdYqCtg1C1oAXAAeACAAX-IAZgNkgEEMjAuMpgBAKABAbABCg&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Playwright vs Selenium : Core Differences | BrowserStack https://www.browserstack.com › Guide' }).click();
  await expect(page).toHaveURL('https://www.browserstack.com/guide/playwright-vs-selenium');
  await page.getByRole('link', { name: 'Playwright vs Selenium' }).click();
  await page.getByText('Ease of Installation').click();
  await page.getByText('Easy to Install').first().click();
});