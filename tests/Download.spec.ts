import {test, expect } from "@playwright/test";

test('Verify download file operation',async({page})=>{
await page.goto("https://practice.expandtesting.com/download");
const pagePromise=page.waitForEvent("download");
await page.getByTestId("some-file.json").click();
const download=await pagePromise;
const filePath= download.suggestedFilename();
console.log(filePath);
await download.saveAs('downloads/sample.json');
await expect(await download.failure()).toBeNull();

});