import {test,expect} from "@playwright/test";

test('Verify file upload Success',async({page})=>{

await page.goto("https://practice.expandtesting.com/upload");
await page.locator("input[type='file']").setInputFiles('test-data/sample.pdf');
await page.getByRole("button",{name:"Upload"}).click();
await expect(page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();
});