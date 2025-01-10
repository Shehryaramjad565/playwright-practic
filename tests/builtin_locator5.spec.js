




const { test, expect } = require('@playwright/test');

test('locating submit button .', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // Locate the submit button using the 'button[type="submit"]' selector
  const button = await page.locator('button[type="submit"]');
  await button.click();

  // Wait for 6 seconds
  await page.waitForTimeout(9000);

  // Log a message indicating the click
  console.log('Submit button clicked');
});








//get element by getbyRole 
test('locating submit button', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // Locate the submit button using the correct syntax for 'getByRole'
  const button = await page.getByRole('button', { type: 'submit' });  
  await button.click();

  // Wait for 6 seconds
  await page.waitForTimeout(6000);

  // Log a message indicating the click
  console.log('Submit button clicked');
});
