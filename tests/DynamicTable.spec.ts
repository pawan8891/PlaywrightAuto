import {test,expect} from '@playwright/test';


test('Verify Dynamic Table',async ({page}) =>
{
await page.goto("https://practice.expandtesting.com/dynamic-table");
const tableCPURam=await page.locator("tbody tr").filter({hasText:'Chrome'}).locator('td').filter({hasText:/%/}).textContent();
const extractChromeCPUText=await page.locator('#chrome-cpu').textContent();
const ChromeCPUText=extractChromeCPUText?.split(':')[1].split('%')[0]+'%';
console.log(ChromeCPUText);
console.log(tableCPURam);
await expect(ChromeCPUText.trim()).toEqual(tableCPURam?.trim());
});
