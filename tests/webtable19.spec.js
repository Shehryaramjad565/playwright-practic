





// @ts-check
const { test, expect } = require('@playwright/test');

test('locating web element ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Locate all table rows
  const rows = page.locator("//fieldset/table[@id='product']/tbody/tr");
  const totalRows = await rows.count();

  // Define the element to compare against
  const selectedElementText = await page
    .locator("//fieldset/table[@id='product']/tbody/tr[3]/td[2]")
    .textContent();

  for (let i = 0; i < totalRows; i++) {
    const currentRowText = await rows.nth(i).locator("td:nth-child(2)").textContent(); // Adjust column index if needed
    if (currentRowText?.trim() === selectedElementText?.trim()) {
      console.log('Test passed: Matching row found!');
    }
  }



// await page.waitForTimeout(4000);



});
