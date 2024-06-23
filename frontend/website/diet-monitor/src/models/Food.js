import axios   from "axios";


export default class Food {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:8080/api/v1/foods/',
            headers: {'Access-Control-Allow-Origin': 'true'},
        });
    }

    async autocomplete (search) {
        try {
            const response = await this.api.get("search/autocomplete/" + search + "?maxResults=10");
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async search (search, pageNumber = 1) {
        try {
            const response = await this.api.get("search/" + search + "?page=" + pageNumber + "&maxResults=10");
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }


}