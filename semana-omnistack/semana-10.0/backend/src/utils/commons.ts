import axios, { AxiosInstance } from 'axios';

const api = (url: string): AxiosInstance => {
    const createObjectRequest = axios.create({
        baseURL: url
    });

    return createObjectRequest;
}

export default api;