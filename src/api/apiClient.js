import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://maxim-ecommerce.technomasrsystems.com/api',
    headers: {
        'Accept': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
