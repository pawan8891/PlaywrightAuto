import { Page ,Locator} from "@playwright/test";
import { BASE_URL } from "../config/constant";

export class CheckBoxPage{

    readonly checkbox1: Locator;
    readonly checkbox2: Locator;



    constructor(private page: Page){
        this.checkbox1=page.getByLabel(/Checkbox 1/i);
        this.checkbox2=page.getByLabel(/Checkbox 2/i);

    }


    async open()
    {
        await this.page.goto(`${BASE_URL}/checkboxes`);
    }


}