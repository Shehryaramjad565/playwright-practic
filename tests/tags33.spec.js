const { test, expect } = require('@playwright/test');

test('test1@sanity', async ({ page }) => {
    console.log('this is my test1...');
});

test('test2@sanity', async ({ page }) => {
    console.log('this is my test2...');
});

test('test3@reg', async ({ page }) => {
    console.log('this is my test3...');
});
