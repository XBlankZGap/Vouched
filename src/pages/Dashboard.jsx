import React, { useEffect, useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import api from '../utils/axios';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/protected/some-data');
        setData(res.data);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {user && (
        <div className="mb-6 bg-green-100 p-4 rounded">
          <p className="font-semibold">Welcome: {user.name}</p>
          <p className="text-sm text-gray-600">Role: {user.role}</p>
        </div>
      )}

      {loading ? (
        <p>Loading protected data...</p>
      ) : data ? (
        <div className="p-4 bg-gray-50 border rounded">
          <h2 className="text-lg font-semibold mb-2">Protected Data:</h2>
          <pre className="text-sm text-gray-700 bg-white p-2 rounded overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p className="text-red-500">Failed to load data.</p>
      )}

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Dashboard;
