//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('Group1', () => {
  test('Test1', async ({ page }) => {
    console.log('this is test 1....');
  });

  test('Test2', async ({ page }) => {
    console.log('this is test 2....');
  });
});

test.describe('Group 2', () => {
    test('Test3', async ({ page }) => {
        console.log('This is test 3 in Group 2')
    })
});