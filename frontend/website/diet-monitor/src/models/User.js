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
            const response = await this.api.get('/' + userId + '/profile');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async updateUser(updatedUser) {
        try {
            const response = await this.api.put("/" + updatedUser.id, updatedUser);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getDailyLimitCalories(userId) {
        try {
            const response = await this.api.get('/' + userId + '/profile/diet');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async postDailyLimitCalories(userId, dailyLimitCalories) {
        try {
            const requestBody = {
                userId: userId,
                dailyCaloriesLimit: dailyLimitCalories
            }
            const response = await this.api.post('/' + userId + '/profile/diet', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async putDailyLimitCalories(userId, dailyLimitCalories) {
        try {
            const requestBody = {
                userId: userId,
                dailyCaloriesLimit: dailyLimitCalories
            }
            const response = await this.api.put('/' + userId + '/profile/diet', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async deleteDailyLimitCalories(userId) {
        try {
            const response = await this.api.delete('/' + userId + '/profile/diet');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getHeight(userId) {
        try {
            const response = await this.api.get('/' + userId + '/profile/height');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async postHeight(userId, height) {
        try {
            const requestBody = {
                userId: userId,
                height: height
            }
            const response = await this.api.post('/' + userId + '/profile/height', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async putHeight(userId, height) {
        try {
            const requestBody = {
                userId: userId,
                height: height
            }
            const response = await this.api.put('/' + userId + '/profile/height', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async deleteHeight(userId) {
        try {
            const response = await this.api.delete('/' + userId + '/profile/height');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getWeight(userId) {
        try {
            const response = await this.api.get('/' + userId + '/profile/weight');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async postWeight(userId, weight) {
        try {
            const requestBody = {
                userId: userId,
                weight: weight
            }
            const response = await this.api.post('/' + userId + '/profile/weight', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async putWeight(userId, weight) {
        try {
            const requestBody = {
                userId: userId,
                weight: weight
            }
            const response = await this.api.put('/' + userId + '/profile/weight', requestBody);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async deleteWeight(userId) {
        try {
            const response = await this.api.delete('/' + userId + '/profile/weight');
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }



}
