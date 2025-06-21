import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/signup',
        formData,
        { withCredentials: true } //  Send refreshToken cookie
      );
      console.log('Signup successful:', res.data);
      alert('Signup successful!');
    } catch (err) {
      alert(err.response.data.message || 'Signup failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" onChange={handleChange} placeholder="Name" required className="w-full border p-2" />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required className="w-full border p-2" />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required className="w-full border p-2" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
