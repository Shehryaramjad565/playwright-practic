// @ts-check
const { test, expect } = require('@playwright/test');

test('locating web element ', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  let get= await page.locator("text='Home'")
  console.log(get)
  let get1=await page.locator("id='contcont'")
  console.log(get1)
  // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
});
