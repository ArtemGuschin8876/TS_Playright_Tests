import { BasePage } from "./base.page";
import { expect } from '@playwright/test';


export class LoginPage extends BasePage {

    private loginUrl = this.getFullLink('/customer')
    private afterLoginUrl = this.getFullLink('/account')

    private expectedText = 'Harry Potter';
    private optionValue = '2';

    private dropDown = this.page.locator('#userSelect');
    private optionForCheck = this.dropDown.locator('option[value="2"]');
    private titleAfterLogin = this.page.locator('span.fontBig.ng-binding', {hasText: this.expectedText})

    private loginButton = this.page.getByRole('button', {name: 'Login'});
    private logoutButton = this.page.getByRole('button', {name: 'Logout'});

  

    async open() {
        await this.page.goto(this.loginUrl)
    }

    async selectAndVerifyOption() {
        await this.dropDown.selectOption(this.optionValue)
        
        const selectedOptionText = await this.optionForCheck.innerText();
        expect(selectedOptionText).toBe(this.expectedText);
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async checkUrlAfterLogin() {
        await this.page.waitForURL(this.afterLoginUrl)

        const currentUrl = this.page.url()
        expect(currentUrl).toBe(this.afterLoginUrl)
    }

    async checkTitleAfterLogin() {
        await expect(this.titleAfterLogin).toBeVisible();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    


}