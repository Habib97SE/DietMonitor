import axios from 'axios';

export default class User {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8080/api/v1/users/',
            headers: {'Access-Control-Allow-Origin': 'true'},
        });
    }

    async login(loginDetails) {
        try {
            const response = await this.api.post('/login', loginDetails);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async register(user) {
        try {
            const response = await this.api.post('/register', user);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async logout() {
        try {
            const response = await this.api.post('/logout');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getUser(userId) {
        try {
            const response = await this.api.get('/profile/' + userId);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
