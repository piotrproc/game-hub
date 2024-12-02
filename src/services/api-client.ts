import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number,
    results: T[],
    prev: string | null,
    next: string | null
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5cc5f2d1f1384d6badba9c43acb71958'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;