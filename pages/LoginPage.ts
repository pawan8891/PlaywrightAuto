import { Page ,Locator} from "@playwright/test";
import { BASE_URL } from "../config/constant";

export class LoginPage{

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly loginSuccessMsg:Locator;
    readonly incorrectPwdMsg:Locator;


    constructor(private page: Page){
        this.username=page.getByLabel("Username");
        this.password=page.getByLabel("Password");
        this.loginButton=page.getByRole("button",{name:'Login'});
        this.loginSuccessMsg=page.getByText("You logged into a secure area!");
        this.incorrectPwdMsg=page.getByText("Your password is invalid!");
    }

    async login(username: string,password: string)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async navigate()
    {
        await this.page.goto(`${BASE_URL}/login`);
    }


}