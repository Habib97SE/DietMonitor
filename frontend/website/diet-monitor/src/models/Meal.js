import axios from "axios";

export default class Meal {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8080/api/v1/meals/',
            headers: {'Access-Control-Allow-Origin': 'true'},
        });
    }

    async createMeal(meal) {
        try {
            console.log(meal);
            const response = await this.api.post('/', meal);
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getMeals(userId, date, mealType) {
        try {
            const response = await this.api.get('/' + userId + '/' + date + '/' + mealType);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async getTotalCalories(userId, date) {
        try {
            const response = await this.api.get('/totalcalories/' + userId + '/' + date);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

}