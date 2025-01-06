
const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  
  await page.locator('#src').fill('Delhi');

  
  await page.waitForSelector('//li[contains(@class, "sc-iwsKbI")]/div', { timeout: 60000 });

  
  const suggestions = await page.locator('//li[contains(@class, "sc-iwsKbI")]/div');
  const suggestionTexts = await suggestions.allInnerTexts();
  console.log(suggestionTexts);

  await page.waitForTimeout(5000); 
});
