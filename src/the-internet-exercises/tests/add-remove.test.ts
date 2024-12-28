import { test } from '@playwright/test';
import { BasePageHeroku } from '../pages/base.heroku.page';
import { AddRemovePage } from '../pages/add-remove.page';


let addRemovePage: AddRemovePage

test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);
})


//ID: UI_01
test('Проверка кнопки "Add element',  async () => {

    await addRemovePage.open()
    await addRemovePage.clickButtonAndCheckVisibility()
})