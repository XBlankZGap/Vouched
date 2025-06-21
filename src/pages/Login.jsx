import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // get login function from context
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData); // uses login() from AuthContext
      navigate('/dashboard'); // redirect on success
    } catch (err) {
      setError(err?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
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
          className="w-full border p-2"
        />

        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            required
            className="w-full border p-2"
          />
          <span
            onClick={togglePassword}
            className="absolute right-3 top-2 cursor-pointer text-sm text-gray-500"
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white py-2 px-4 rounded w-full"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
