import axios from 'axios';
import { getToken, isAssignedIn } from './auth'

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

api.interceptors.request.use(async (config) => {
    const token = await getToken();

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
})

export default api;