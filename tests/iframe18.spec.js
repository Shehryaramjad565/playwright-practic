


const { test, expect } = require('@playwright/test');

test('Hidden options dropdown', async ({ page }) => {
  
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


  const iframeelement = await page.frameLocator('#courses-iframe');
  

  const email = iframeelement.locator("xpath=//li[normalize-space()='contact@rahulshettyacademy.com']");
  const emailtext = await email.textContent();
  await expect(emailtext).toBe(' contact@rahulshettyacademy.com')
  console.log(emailtext);
});
