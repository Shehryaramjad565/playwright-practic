// @ts-check
const { test, expect } = require('@playwright/test');

test('locating web element ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Locate the dropdown and select 'option2'
  let dropdown = await page.locator('#dropdown-class-example');
  await dropdown.selectOption({ value: 'option2' }); // Correct syntax for selecting an option by value

  await page.waitForTimeout(40000);
});
