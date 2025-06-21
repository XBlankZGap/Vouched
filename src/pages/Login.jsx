import React, { useState, useEffect } from 'react';
import api from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await api.post('/auth/login', formData);
      login(res.data.accessToken);
      alert(`Welcome back, ${res.data.user.name}!`);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email"
          required
          className="w-full border border-gray-300 p-2 rounded"
        />
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <span
            onClick={togglePassword}
            className="absolute right-3 top-2 text-sm cursor-pointer text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 px-4 rounded w-full hover:bg-green-700"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
