import React from 'react';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome to your Vouched dashboard!</p>
      <LogoutButton />
    </div>
  );
};

export default Dashboard;
