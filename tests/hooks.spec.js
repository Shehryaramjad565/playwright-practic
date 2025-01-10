import { test, expect } from '@playwright/test';

test.describe('Group1', () => {
  test.beforeAll(async () => {
    console.log('Setup for Group 1');
  });

  test.afterAll(async () => {
    console.log('Teardown for Group 1');
  });

  test('Test1', async ({ page }) => {
    console.log('This is Test 1 in Group 1');
  });

  test('Test2', async ({ page }) => {
    console.log('This is Test 2 in Group 1');
  });
});

test.describe('Group2', () => {
  test.beforeAll(async () => {
    console.log('Setup for Group 2');
  });

  test.afterAll(async () => {
    console.log('Teardown for Group 2');
  });

  test('Test3', async ({ page }) => {
    console.log('This is Test 3 in Group 2');
  });
});
