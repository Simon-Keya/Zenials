import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/settings', formData);
      alert('Password updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating password.');
    }
  };

  return (
    <>
      <Head>
        <title>Account Settings | Zenials</title>
        <meta name="description" content="Manage your Zenials account settings and change your password." />
        <meta name="keywords" content="Zenials, account settings, password change, creator platform" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Account Settings</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
              Update Password
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default SettingsPage;
