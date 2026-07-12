import {test as base,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import {CheckBoxPage} from '../pages/CheckBoxPage';
type MyFixtures={
    loginPage:LoginPage;
    checkBoxPage:CheckBoxPage;

};

export const test=base.extend<MyFixtures>({
loginPage:async({page},use)=>{
    const loginPage=new LoginPage(page);  
    await loginPage.navigate(); 
    await use(loginPage);
},
checkBoxPage:async({page},use)=>{
    const checkBoxPage=new CheckBoxPage(page);   
    await checkBoxPage.open();
    await use(checkBoxPage);
},
});
export {expect};