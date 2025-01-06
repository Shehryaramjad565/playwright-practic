// @ts-check
const { test, expect } = require('@playwright/test');

test('input field ', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');


  const nameField = await page.locator('xpath=/html[1]/body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[1]/input[1]');
  await nameField.fill('shehryar')
  
  await expect(nameField).toHaveValue('shehryar');
  const emailField = await page.locator('xpath=//body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[2]/input[1]');
  await emailField.fill('alikhanaj00@gmail.com');
  await expect(emailField).toHaveValue('alikhanaj00@gmail.com')
  
  let password= await  page.locator('//body[1]/app-root[1]/form-comp[1]/div[1]/form[1]/div[3]/input[1]');
  await password.fill("Abc123")
  await expect(password).toHaveValue("Abc123")
  let checkbox = await page.locator('#exampleCheck1').click()

  let submit= await  page.locator("//input[@type='submit']").click()
  


const checkSubmit = page.locator('xpath=//body[1]/app-root[1]/form-comp[1]/div[1]/div[2]/div[1]');


// const messageText = await checkSubmit.textContent();
// expect(messageText.trim()).toEqual(' The Form has been submitted successfully!. ');

await page.waitForTimeout(20000);


});