// src/components/LogoutButton.jsx
import React from 'react';
import api from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout'); // Clear refresh token on backend
      localStorage.removeItem('accessToken'); // Clear access token on frontend
      navigate('/login'); // Redirect to login
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
