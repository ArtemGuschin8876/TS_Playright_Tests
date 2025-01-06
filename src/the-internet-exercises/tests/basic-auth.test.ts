import { expect, Page, test } from '@playwright/test';
import { BasicAuthPage } from '../pages/basic.auth.page';


let basicAuthPage: BasicAuthPage;

test.beforeEach(async ({ page }) => {
    basicAuthPage = new BasicAuthPage(page);
})


test('basic auth positive', async () => {

    await basicAuthPage.createAuthHeader();
    await basicAuthPage.setHttpHeader();
    await basicAuthPage.open();
    await basicAuthPage.checkTitleAfterLogin();

});