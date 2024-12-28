import { BasePageHeroku } from "./base.heroku.page";

export class AddRemovePage extends BasePageHeroku {

    private url = this.getLink('add_remove_elements/');
    private buttonAddElement = this.page.getByRole('button', {name: 'Add Element'});
    private buttonDelete = this.page.getByRole('button', {name: 'Delete'});

    async open() {
       await this.openPage(this.url)
    }

    async clickButtonAddElementAndCheckVisibility() {
        await this.buttonAddElement.isVisible();
        await this.buttonAddElement.click();
    }

    async checkButtonDeleteIsVsisble() {
        await this.buttonDelete.isVisible();
    }

    async clickButtonDeleteAndCheckIsNotVisibility() {
        await this.buttonDelete.click();
        await this.buttonDelete.isHidden();
    }

}