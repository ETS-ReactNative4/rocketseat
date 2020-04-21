import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.75.130:3333/v1'
});

export default api;