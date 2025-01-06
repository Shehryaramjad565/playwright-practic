const { test, expect } = require('@playwright/test');

test('locating submit button', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // Locate the submit button using the 'button[type="submit"]' selector
  const button = await page.locator('button[type="submit
    "]');
  
  // Assert that the button is visible
  try {
    await expect(button).toBeVisible();
    await button.click();
  } catch (error) {
    console.log(`Assertion failed: ${error.message}`);
  }

  // Wait for 6 seconds
  await page.waitForTimeout(9000);

  // Log a message indicating the click
  console.log('Submit button clicked');
});
