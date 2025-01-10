const { test, expect } = require('@playwright/test');

test('Keyboard actions', async ({ page }) => {

  await page.goto("https://gotranscript.com/text-compare");

  await page.type('name="text1"', 'welcome to automation');

  await page.locator('name="text1"').press('Control+A'); 
  
  await page.locator('name="text1"').press('Control+C'); 

  await page.locator('name="text1"').press('Tab');

  await page.locator('name="text2"').press('Control+V'); 
    await expect(page.locator('name="text2"')).toHaveValue('welcome to automation');
});