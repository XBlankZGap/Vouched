import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // get logout function from context

  const handleLogout = async () => {
    try {
      await logout(); // call context logout
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
