import {test} from '@playwright/test';
import { BankMainPage } from '../pages/bank_demo.main.page';


let bankPage: BankMainPage

test.beforeEach(async ({ page }) => {
    bankPage = new BankMainPage(page);
})

/*
Проверяем что загловок появляется на странице
*/
test('page title check', async () =>{
    
    await bankPage.open();
    await bankPage.checkTitleIntoHeading();
})
/*
Проверяем изменения после нажатия на кнопку Home
Повторно нажимаем на кнопку Home для возвращения страницы в прежнее состояние
*/
test('check home button', async () =>{
    
    await bankPage.open();
    await bankPage.clickCustomerLoginButton();
    await bankPage.checkFormGroup();
    await bankPage.clickHomeButton()
})