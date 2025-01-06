
const { test, expect } = require('@playwright/test');

test('assertion for visibility', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // Locate the submit button using the 'button[type="submit"]' selector
  const button = await page.locator('button[type="submit"]');
  await button.click();

  expect(button).toBeVisible()

  // Wait for 6 seconds
  await page.waitForTimeout(9000);

  // Log a message indicating the click
  console.log('Submit button clicked');
});







test('assertion for url', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


  // Wait for 6 seconds
  await page.waitForTimeout(9000);

  // Log a message indicating the click
  console.log('Submit button clicked');
});