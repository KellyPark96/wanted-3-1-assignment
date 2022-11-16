import axios from "axios";

export const HttpClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 2 * 1000,
    headers: {
        "Content-type": "application/json",
    }
})

