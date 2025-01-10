import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await page.screenshot({ path: 'tests/screenshots/HomePage.png' });
});


