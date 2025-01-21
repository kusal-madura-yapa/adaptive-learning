import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend API URL
  timeout: 10000, // Request timeout in milliseconds
});

// Add a request interceptor for auth token (if needed)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Example: token stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
