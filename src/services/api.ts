import axios from "axios";

const baseURL = "https://8a7b-187-180-212-207.ngrok-free.app";

const api = axios.create({
    baseURL, 
    validateStatus: (status) => status >= 200 && status <=500
})

export default api;
