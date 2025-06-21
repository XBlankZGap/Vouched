import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
// This component checks if the user is authenticated by looking for an access token in localStorage.
// If the token is not present, it redirects the user to the login page.