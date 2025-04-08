import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'localhost:8020/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
