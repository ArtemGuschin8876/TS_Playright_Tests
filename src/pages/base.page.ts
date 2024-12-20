import {Page} from '@playwright/test';

export abstract class BasePage {
    constructor(protected page:Page){}

    private baseUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#';

    
    protected async goto(url: string) {
        await this.page.goto(url)
    }

    protected getFullLink(path:string): string {
       return `${this.baseUrl}${path}`
    }
}
