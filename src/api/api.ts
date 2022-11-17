import axios, {AxiosInstance} from "axios";

// create an axios instance
export default class HttpClient {
    httpClient: AxiosInstance;

    constructor(private baseUrl: string) {
        this.httpClient = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            withCredentials : true,
            timeout: 1000,
        });
    }
}

export const DEBOUNCING_TIME = 500;