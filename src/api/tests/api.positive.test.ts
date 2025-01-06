import { test, expect } from '@playwright/test';
import { UserAPI } from '../api.user';
import { userByIdData, testDataEmails, postData } from '../data/user.data';
import { PostDataDTO } from '../data/user.dto';

test.describe('API tests positive', () => {

let userAPI: UserAPI;

test.beforeEach(async ({ request }) => {
    userAPI = new UserAPI(request);
})
    
/*
Получение пользователя по указанному ID и проверка тела ответа целиком
Проверка заголовка ответа
*/
    test('GET user by ID and validate JSON data', async() => {

        const response = await userAPI.getUserByID(2)
        expect(response.status()).toBe(200)

        expect(response.headers()['content-type']).toContain('application/json')

        const actualData = await response.json();
        expect(actualData).toMatchObject(userByIdData)
    });

/*
Получение списка пользователей (с помощью параметризации)
Проверка заголовка ответа
*/
testDataEmails.forEach(({ id, email }) => {
    test(`GET users list JSON data user with id: ${id}`, async () => {

        const response = await userAPI.getUsersList();
        expect(response.status()).toBe(200);

        expect(response.headers()['content-type']).toContain('application/json');

        const actualData = await response.json();
        
        const user = actualData.data.find((user: { id: number }) => user.id === id);
        expect(user).toBeDefined();
        
        expect(user.email).toBe(email);
        
        });
    });

/*
Проверка на создание пользователя
*/
    test('POST create user', async() => {

        const response = await userAPI.createUser();
        expect(response.status()).toBe(201);

        const responseData = await response.json();
      
        expect(responseData.id).toBeDefined();
        expect(responseData.createdAt).toBeDefined();


    });

/*
Проверка на обновление пользователя 
*/
    test('UPDATE user (PUT)', async() => {
        
        const response = await userAPI.updateUser(2, postData);
        expect(response.status()).toBe(200);

        const responseData = await response.json();
        expect(responseData.updatedAt).toBeDefined();
    })

/*
Проверка на удаление пользователя (только запрос)
*/
    test('DELETE user', async() => {

        const response = await userAPI.deleteUser(2)
        expect(response.status()).toBe(204);
    });

});

