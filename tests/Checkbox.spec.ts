import {test,expect} from "../fixtures/fixture";


test('Verify checkbox is checked',async({checkBoxPage})=>{
await checkBoxPage.checkbox1.check();
await checkBoxPage.checkbox2.check();
await expect(checkBoxPage.checkbox1).toBeChecked();
await expect(checkBoxPage.checkbox2).toBeChecked();
});