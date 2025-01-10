// Reference: https://playwright.dev/docs/input#upload-files

const { test, expect } = require('@playwright/test');

test('Single File', async ({ page }) => {
  await page.goto('https://www.file.io/');

//   await page.waitForSelector('.mqfihd-upload');
  let clickbutton=await page.locator("xpath=//label[@for='upload-button']");
  await clickbutton.click();

  let fileinput= await page.locator('#upload-button').setInputFiles('tests/uploadFiles/file1.pdf')

  await page.waitForTimeout(5000);
});
