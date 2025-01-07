
// const { test, expect } = require('@playwright/test');

// test('Auto suggest dropdown', async ({ page }) => {
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//   let dropdown= await page.locator('#dropdown-class-example')
//   await dropdown.click()
  
//   let select= await page.locator("xpath=//option[@value='option2']")
//   await select.click()





//   await page.waitForTimeout(50000); 
// });


const { test, expect } = require('@playwright/test');

test('Hidden options dropdown', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("[name='username']").fill('Admin');
  await page.locator("[name='password']").fill('admin123');
  await page.locator("[type='submit']").click();

  await page.locator("span[normalize-space()='PIM']").click();

  // Click on drop down
  await page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div").click();

  // Waiting for options
  await page.waitForTimeout(5000);
});
