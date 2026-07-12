import {test,expect} from "@playwright/test";

test('Verify multiple window/tabs',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/windows");
const page1promise=page.waitForEvent("popup");
await page.getByRole("link",{name:'Click Here'}).click();
const page1=await page1promise;
await expect(page1.getByRole("heading",{name:'Example of a new window page for Automation Testing Practice'})).toBeVisible()
});