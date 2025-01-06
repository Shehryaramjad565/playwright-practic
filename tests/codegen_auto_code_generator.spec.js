//auto generated code by playwright codegen
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pf.com.pk/');
  await page.getByRole('link', { name: 'Apply Now' }).nth(1).click();
  await page.locator('div:nth-child(7) > #btn-popup > .apply-m-now').click();
  await page.locator('#popup').getByText('×').click();
});