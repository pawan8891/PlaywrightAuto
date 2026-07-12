import {test,expect} from '@playwright/test';
test('Verify js Alert',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/js-dialogs");
page.once("dialog",async dialog => {
 expect(dialog.type()).toBe("alert");
 expect(dialog.message()).toBe("I am a Js Alert");
  await dialog.accept();

});
 await page.getByRole("button",{name:"Js Alert"}).click();
});

test('Verify js Confirm accept',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/js-dialogs");
page.once("dialog",async dialog => {
 expect(dialog.type()).toBe("confirm");
 expect(dialog.message()).toBe("I am a Js Confirm");
  await dialog.accept();

});
 await page.getByRole("button",{name:"Js Confirm"}).click();
});

test('Verify js Confirm dismiss',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/js-dialogs");
page.once("dialog",async dialog => {
 expect(dialog.type()).toBe("confirm");
 expect(dialog.message()).toBe("I am a Js Confirm");
  await dialog.dismiss();

});
 await page.getByRole("button",{name:"Js Confirm"}).click();
});

test('Verify js Prompt accept',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/js-dialogs");
page.once("dialog",async dialog => {
 expect(dialog.type()).toBe("prompt");
 expect(dialog.message()).toBe("I am a Js prompt");
  await dialog.accept("Pavan");
});
 await page.getByRole("button",{name:"Js Prompt"}).click();
 await expect(page.getByText('Pavan')).toBeVisible();
});

test('Verify js Prompt dismiss',async({page})=>{
// const checkboxPage=new CheckBoxPage(page);

await page.goto("https://practice.expandtesting.com/js-dialogs");
page.on("dialog",async dialog => {
 expect(dialog.type()).toBe("prompt");
 expect(dialog.message()).toBe("I am a Js prompt");
  await dialog.dismiss();
});
 await page.getByRole("button",{name:"Js Prompt"}).click();
});

