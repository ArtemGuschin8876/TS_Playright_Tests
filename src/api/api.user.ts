import { APIRequest, APIRequestContext } from '@playwright/test';

export class UserAPI {

    private request: APIRequestContext;
    private baseUrl = 'https://reqres.in/api';

    private endpoints = {
        getList: '/users?page=2',
        postUser: '/users',
        endpointID: '/users/',
    }

    constructor(request:APIRequestContext) {
        this.request = request;
    }

    private async getID(userID:number, method: 'get'| 'delete' | 'put' ) {
        const endpoint = `${this.baseUrl}${this.endpoints.endpointID}${userID}`;
        return this.request[method](endpoint);

    } 
    
    async getUserByID(userID:number) {
        return this.getID(userID, 'get')
    }

    async getUsersList() {
        return this.request.get(`${this.baseUrl}${this.endpoints.getList}`)
    }

    async createUser() {
        return this.request.post(`${this.baseUrl}${this.endpoints.postUser}`)
    }

    async updateUser(userID:number, data:any) {
        const endpoint = `${this.baseUrl}${this.endpoints.endpointID}${userID}`;
        return this.request.put(endpoint, {data})
    }

    async deleteUser(userID:number) {
        return this.getID(userID, 'delete')
    }
}