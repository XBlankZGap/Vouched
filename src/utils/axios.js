import axios from 'axios';
import { refreshAccessToken } from './tokenRefresh'; // Make sure this file exists

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true, // Needed for cookie-based refresh tokens
});

// Add access token to request headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auto-refresh access token on 403
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const newToken = await refreshAccessToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // Retry request with new token
      }
    }

    return Promise.reject(error);
  }
);

export default api;
