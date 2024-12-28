import { test } from '@playwright/test';
import { AddRemovePage } from '../pages/add-remove.page';


let addRemovePage: AddRemovePage

test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);
    await addRemovePage.open()
})


//ID: AR_01
test('Проверка кнопки "Add element"',  async () => {
    await addRemovePage.clickButtonAddElementAndCheckVisibility();
})

//ID: AR_02
test('Проверка кнопки "Delete"', async () => {
    await addRemovePage.clickButtonAddElementAndCheckVisibility();
    await addRemovePage.checkButtonDeleteIsVsisble();
    await addRemovePage.clickButtonDeleteAndCheckIsNotVisibility();
})