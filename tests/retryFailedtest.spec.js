// change in cofig.js for retry failed test cases

const { test, expect } = require('@playwright/test');

test('test1@sanity', async ({ page }) => {
    console.log('this is my test1...');
});
test('test1', async ({ page }) => {
    console.log('this is my test4...');
});

test.skip('test2@sanity', async ({ page }) => {
    console.log('this is my test2...');
});

test.fail('test3@reg', async ({ page }) => {
    console.log('this is my test3...');
});