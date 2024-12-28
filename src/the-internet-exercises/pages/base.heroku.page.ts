import {Page} from "@playwright/test";

export class BasePageHeroku {
    constructor(protected page:Page){}

    private baseUrl = 'https://the-internet.herokuapp.com/'

    protected async openPage(url:string) {
        await this.page.goto(url)
    }

    protected getLink(path:string): string {
        return `${this.baseUrl}${path}`
    }
}