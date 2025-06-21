import axios from 'axios';
import { refreshAccessToken } from './tokenRefresh'; // This function handles calling /refresh-token

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // API base
  withCredentials: true, // Needed to send cookies like refreshToken
});

// REQUEST INTERCEPTOR: Attach access token to all requests
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

// RESPONSE INTERCEPTOR: Auto-refresh token if expired (403) and retry original request
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 403 (forbidden) and it's the first retry
    if (
      error.response?.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newToken = await refreshAccessToken();

        if (newToken) {
          localStorage.setItem('accessToken', newToken); // Ensure token is saved
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest); // Retry with new token
        }
      } catch (err) {
        console.error('Token refresh failed:', err);
        // Optional: redirect to login or logout
      }
    }

    return Promise.reject(error);
  }
);

export default api;
