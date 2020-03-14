import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.31.130:33333'
});

export default api;