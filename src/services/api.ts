import axios from "axios";

const baseURL = "https://ee1a-187-180-212-207.ngrok.io";

const api = axios.create({
    baseURL, 
    validateStatus: (status) => status >= 200 && status <=500
})

export default api;
