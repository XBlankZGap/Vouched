// This file sets up an Axios instance for making HTTP requests to the backend API.
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true // required to receive cookies from server
});

export default api;
