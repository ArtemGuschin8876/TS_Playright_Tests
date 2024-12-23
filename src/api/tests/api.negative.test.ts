import { test, expect } from '@playwright/test';

test.describe('API tests negative', () => {
    
    test('GET user invalid endpoint', async({request}) => {
        const response = await request.get('https://reqres.in/api/users/none');
        expect(response.status()).toBe(404);
    })

    
})