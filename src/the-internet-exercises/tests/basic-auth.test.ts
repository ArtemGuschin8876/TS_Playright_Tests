import { expect, Page, test } from '@playwright/test';
import { AuthCredentials, BasicAuthPage } from '../pages/basic.auth.page';

let basicAuthPage: BasicAuthPage;

test.beforeEach(async ({ page }) => {
    basicAuthPage = new BasicAuthPage(page);
})


test('basic auth positive', async () => {

    const positiveCredentials: AuthCredentials =  {
        username: 'admin',
        password: 'admin',
    }

    basicAuthPage.setCredentials(positiveCredentials)

    await basicAuthPage.createAuthHeader();
    await basicAuthPage.setHttpHeader();
    await basicAuthPage.open();
    await basicAuthPage.checkTitleAfterLogin();
});
