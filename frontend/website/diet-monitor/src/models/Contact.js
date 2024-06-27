import axios from "axios";


export default class Contact {
    constructor() {

        this.api = axios.create({
            baseURL: process.env.BACKEND_URL_V1,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    async createContact(name, email, message) {
        try {
            const response = await this.api.post("/contact", {
                name,
                email,
                message
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}