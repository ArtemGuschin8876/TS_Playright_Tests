import { expect, Page } from "@playwright/test";
import { BasePageHeroku } from "./base.heroku.page";


export interface AuthCredentials {
    username: string;
    password: string;
}

export class BasicAuthPage extends BasePageHeroku {

    private credentials: AuthCredentials;

    private url = this.getLink('basic_auth');


    private title = this.page.locator('div.example p');
    private titleText = 'Congratulations! You must have the proper credentials.'

    async open() {
        await this.openPage(this.url)
    }

    setCredentials(credentials:AuthCredentials) {
        this.credentials = credentials;
    }

    async createAuthHeader() {
        if (!this.credentials) {
            throw new Error('Credentials are not set');
        }
        return 'Basic ' + btoa(this.credentials.username + ':' + this.credentials.password);
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