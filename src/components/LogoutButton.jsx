import React from 'react';
import api from '../utils/axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('accessToken');
      alert('You have been logged out.');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
      alert('Logout failed');
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
