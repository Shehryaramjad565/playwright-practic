// Only, Skip,Fail, Fixme & Slow


const { test, expect } = require('@playwright/test');

test.only('test1@sanity', async ({ page }) => {
    console.log('this is my test1...');
});

test.skip('test2@sanity', async ({ page }) => {
    console.log('this is my test2...');
});

test.fail('test3@reg', async ({ page }) => {
    console.log('this is my test3...');
});