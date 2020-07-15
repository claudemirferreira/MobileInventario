import axios from 'axios';
import { getToken } from './storage-utils'

const api = axios.create({
    baseURL: 'http://typeorm-inventario.herokuapp.com/'
});

api.interceptors.request.use(async (config) => {
    const token = await getToken();

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;