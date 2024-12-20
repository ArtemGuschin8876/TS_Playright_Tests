import { BasePage } from "./base.page";
import { expect, Locator } from '@playwright/test'


export class BankMainPage extends BasePage{
    
    private mainPageUrl = this.getFullLink('/login');

    private heading = this.page.locator('.mainHeading');
    private formGroup = this.page.locator('.form-group');

    private customerLoginButton = this.page.getByRole('button', {name: 'Customer Login'});
    private bakManagerLogin = this.page.getByRole('button', {name:'Bank Manager Login'});
    private homeButton = this.page.getByRole('button', {name: 'Home'});
    
    private headingText = 'XYZ Bank';

    async open() {
        await this.goto(this.mainPageUrl)
    }

    async checkTitleIntoHeading() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText(this.headingText);
    }

    async clickCustomerLoginButton() {
        await this.customerLoginButton.click();
    }

    async checkFormGroup() {
        await expect(this.formGroup).toBeVisible();
    }

    async clickHomeButton() {
        await this.homeButton.click();
        await expect(this.customerLoginButton).toBeVisible();
        await expect(this.bakManagerLogin).toBeVisible();
    }

}
