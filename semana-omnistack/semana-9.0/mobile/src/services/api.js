import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.31.130:3333',
});

export default api;