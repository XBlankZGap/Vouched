import api from './axios';

export const refreshAccessToken = async () => {
  try {
    const res = await api.post('/auth/refresh');
    const newAccessToken = res.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken); // store new token
    return newAccessToken;
  } catch (err) {
    console.error("Token refresh failed:", err);
    return null;
  }
};
// This function can be used in your app to refresh the access token
// when needed, e.g., before making a protected API call.