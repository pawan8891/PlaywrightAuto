import {test,expect} from "../fixtures/fixture";

test('Valid login',async ({page,loginPage}) => {
await loginPage.login("practice","SuperSecretPassword!");
await expect(page).toHaveURL(/secure/);
await expect(loginPage.loginSuccessMsg).toBeVisible();
});

test('InValid Password',async ({loginPage}) => {
await loginPage.login("practice","SuperSecret");
await expect(loginPage.incorrectPwdMsg).toBeVisible();
});
