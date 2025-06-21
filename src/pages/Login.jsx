import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        formData,
        { withCredentials: true } // ✅ Needed to receive cookies
      );
      console.log('Login successful:', res.data);
      alert('Welcome, ' + res.data.user.name);
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required className="w-full border p-2" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required className="w-full border p-2" />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
