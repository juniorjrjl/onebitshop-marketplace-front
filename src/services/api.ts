import axios from "axios";

const baseURL = "https://9f23-187-180-212-135.ngrok-free.app";

const api = axios.create({
    baseURL, 
    validateStatus: (status) => status >= 200 && status <=500
})

export default api;
