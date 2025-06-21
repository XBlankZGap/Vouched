import React, { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import api from '../utils/axios'; // Axios instance with withCredentials

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      const token = localStorage.getItem('accessToken');
      const storedRole = localStorage.getItem('userRole'); // get role from storage
      setRole(storedRole || '');

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

      {role === 'admin' && (
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded mb-4">
          👑 You are an <strong>Admin</strong>. Admin-only features will appear here.
        </div>
      )}

      {userData ? (
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium mb-2">Protected Data:</p>
          <pre className="text-sm">{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : !error ? (
        <p className="text-gray-600">Loading protected data...</p>
      ) : null}

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
