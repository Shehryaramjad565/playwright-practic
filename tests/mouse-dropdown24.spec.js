const { test, expect } = require('@playwright/test');

test('Drag And Drop', async ({ page }) => {
  await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

  const rome = await page.locator('#box6');
  const italy = await page.locator('#box106');




  await rome.dragTo(italy);


   await expect(await italy.locator('div')).toContainText('Rome');
});