import {test,expect} from "@playwright/test";
import { CheckBoxPage } from "../pages/CheckBoxPage";

test('Verify iframes operation',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/iframe");
const frame=page.locator('#email-subscribe').contentFrame();
await frame.locator('#email').fill('pawan@test.com');
await frame.getByRole('button', { name: 'Subscribe' }).click();
await expect(frame.getByText('You are now subscribed!')).toBeVisible();
});