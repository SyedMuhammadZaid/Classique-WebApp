import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 10000, // Optional: set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from localStorage or any other storage
        const token = localStorage.getItem('accessToken');
        if (token) {
            // Attach the token to the request headers
            const customHeaders = { 'x-auth-token': token }
            config.headers = customHeaders
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle token expiration or unauthorized access
        if (error.response && error.response.status === 401) {
            // Example: redirect to login page or refresh token
            console.error('Unauthorized access - possibly token expired');
            // Redirect to login or show a message
            localStorage.clear()
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
