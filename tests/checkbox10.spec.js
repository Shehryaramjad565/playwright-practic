// @ts-check
const { test, expect } = require('@playwright/test');

test('locating web element ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');


  //checkbox click
  let checkbox = await page.locator('#exampleCheck1').click()

  let submit= await  page.locator("//input[@type='submit']").click()
  


const checkSubmit = page.locator('xpath=//body[1]/app-root[1]/form-comp[1]/div[1]/div[2]/div[1]');


// const messageText = await checkSubmit.textContent();
// expect(messageText.trim()).toEqual(' The Form has been submitted successfully!. ');

await page.waitForTimeout(20000);


});