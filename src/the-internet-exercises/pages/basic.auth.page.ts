import { expect, Page } from "@playwright/test";
import { BasePageHeroku } from "./base.heroku.page";


export class BasicAuthPage extends BasePageHeroku {

    private url = this.getLink('basic_auth');

    private username = 'admin';
    private password = 'admin';

    private title = this.page.locator('div.example p');
    private titleText = 'Congratulations! You must have the proper credentials.'
 
    async open() {
       await this.openPage(this.url)
    }

    async createAuthHeader() {
        return 'Basic ' + btoa(this.username + ':' + this.password);
    }

    async setHttpHeader() {
        const authHeader = await this.createAuthHeader(); 
        await this.page.setExtraHTTPHeaders({Authorization :authHeader})
    }

    async checkTitleAfterLogin() {
        await this.title.isVisible();
        await expect(this.title).toHaveText(this.titleText);
    }

}