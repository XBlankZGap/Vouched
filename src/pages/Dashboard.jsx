import React, { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import api from '../utils/axios'; // Axios instance with withCredentials

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        setError("No token found. Please log in.");
        return;
      }

      try {
        const res = await api.get('/protected/some-data', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load protected data. Token may be invalid or expired.');
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {userData ? (
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium mb-2">Protected Data:</p>
          <pre className="text-sm">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        <p className="text-gray-600">Loading protected data...</p>
      )}

      <LogoutButton />
    </div>
  );
};

export default Dashboard;
// This component fetches protected data from the server using the access token stored in localStorage.
// If the token is invalid or expired, it will display an error message.