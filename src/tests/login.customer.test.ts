import { test } from '@playwright/test'
import { LoginPage } from '../pages/bank_demo.login.page'
import { BankMainPage } from '../pages/bank_demo.main.page';

let loginPage: LoginPage;
let bankPage: BankMainPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    bankPage = new BankMainPage(page);
})

/*
Проверка на вход пользователя под выбранным из списка именем
Проверка что выбранное имя из списка соответствует ожидаемому
После логина проверяем что url изменился
*/
test('checking user login and link changes after login ', async() =>{

    await loginPage.open();
    await loginPage.selectAndVerifyOption();
    await loginPage.clickLoginButton();
    await loginPage.checkUrlAfterLogin();
})

test('cheking title changes and logout button after user login', async() => {
    
    await loginPage.open();
    await loginPage.selectAndVerifyOption();
    await loginPage.clickLoginButton();
    await loginPage.checkTitleAfterLogin();
    await loginPage.clickLogoutButton();

    await bankPage.checkFormGroup();
})