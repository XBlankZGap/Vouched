import axios from 'axios'; // Import axios for making HTTP requests
import { refreshAccessToken } from './tokenRefresh';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

// Add access token to every request
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

// Automatically refresh access token if expired
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Only try to refresh once
    if (
      err.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();

      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
