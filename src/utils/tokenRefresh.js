import axios from 'axios';

export const refreshAccessToken = async () => {
  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth/refresh-token',
      {}, // No body needed
      { withCredentials: true }
    );

    const newAccessToken = res.data.accessToken;

    localStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  } catch (err) {
    console.error("Token refresh failed", err);
    localStorage.removeItem('accessToken');
    return null;
  }
};
// This function will be used in the axios interceptor to refresh the access token
// when a 403 error occurs, indicating that the token has expired or is invalid.