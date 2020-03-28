import axios from 'axios';

import Constants from '../utils/constants';

const api = axios.create({
    baseURL: `${Constants.PROPS.BASE_URL}`
});

export default api;