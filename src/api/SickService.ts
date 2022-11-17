import {AxiosError, AxiosInstance} from "axios";
import {getMyCacheData, setMyCacheData} from 'cache/Cache';
import {SearchService, SearchResponse} from '../types/Types';
import HTTPError from "./httpError";

export default class SearchServiceImpl implements SearchService {
    constructor(private HttpClient: AxiosInstance) {
    }

    async getSearch(query: string) {
        if (getMyCacheData(query)) {
            console.info('use Cached Data');
            return getMyCacheData(query);
        }
        try {
            console.info('calling api');
            const {data} = await this.HttpClient.get<SearchResponse>(
                `?q=${query}`
            );
            setMyCacheData(query, data);
            return await data;
        } catch (error) {
            console.error(error);
            if (error instanceof AxiosError) {
                const {response} = error;
                if (response) {
                    throw new HTTPError(response?.status, response?.statusText);
                }
            }
            throw new Error('Server Error');
        }
    }
}
