
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('input field ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


  let mousehover= await page.locator('#mousehover')
  await mousehover.hover()
  await expect(mousehover).toBeVisible()
  await page.waitForTimeout(2000);

  let clickOnTop= await page.locator('xpath=//body[1]/div[4]/div[1]/fieldset[1]/div[1]/div[1]/a[1]')
  await clickOnTop.click()
//   await expect(page).toHaveURL('/#top/');



await page.waitForTimeout(50000);


});