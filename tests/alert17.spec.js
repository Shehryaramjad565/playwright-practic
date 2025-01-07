// const { test, expect } = require('@playwright/test');

// test('Handle alert dialog', async ({ page }) => {
//   // Navigate to the page
//   await page.goto('https://rahulshettyacademy.com/AutomationPractice/'); // Replace with your URL

//   // Listen for the alert dialog
//   page.on('dialog', async (dialog) => {
//     console.log(`Alert message: ${dialog.message()}`); // Print alert message
//     // await page.waitForTimeout(5000);

//     await expect(dialog.message).toEqual('Alert message: Hello , Are you sure you want to confirm?')
//     await dialog.accept(); // Click OK on the alert
//   });

//   // Trigger the alert by clicking the button
//   await page.click('#confirmbtn'); // Replace with the selector of the alert button
  
//   // await page.waitForTimeout(20000);
// });




const { test, expect } = require('@playwright/test');

test('Handle alert dialog', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/'); 
  
  page.on('dialog', async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`); 
    await dialog.accept();
    expect(dialog.message()).toBe('Hello , Are you sure you want to confirm?');
  });


  await page.click('#confirmbtn'); 



  await page.waitForTimeout(20000);
});
