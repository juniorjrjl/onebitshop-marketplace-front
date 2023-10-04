import axios from "axios";

const baseURL = "https://49e5-187-180-212-0.ngrok-free.app";

const api = axios.create({
    baseURL, 
    validateStatus: (status) => status >= 200 && status <=500
})

export default api;
