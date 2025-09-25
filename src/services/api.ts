import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://e-commerce-api-u3rr.onrender.com'
})