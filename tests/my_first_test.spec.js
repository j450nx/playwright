const { test, expect } = require('@playwright/test');

test('My first test', async ({ page }) => {
    await page.goto('https://goasyncogle.com')
    await expect.page.toHaveTitle('Google');
}); 