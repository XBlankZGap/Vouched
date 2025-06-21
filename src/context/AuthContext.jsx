import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken') || '');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (token, userData) => {
    localStorage.setItem('accessToken', token);
    setAccessToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAccessToken('');
    setUser(null);
    navigate('/login');
  };

  const isAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider value={{ accessToken, user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
