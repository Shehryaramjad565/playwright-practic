const { test, expect } = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

  const button = await page.locator('//span[normalize-space()="right click me"]');


  //assertions
  const deleteOption = page.locator('.context-menu-item.context-menu-icon-delete'); // Selector for the "Delete" option
  await expect(deleteOption).toHaveText('Delete');


  await button.click({ button: 'right' });


  await page.waitForTimeout(5000);
});