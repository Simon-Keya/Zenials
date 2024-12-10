import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put('/api/user/profile', formData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating profile.');
    }
  };

  return (
    <>
      <Head>
        <title>Edit Profile | Zenials</title>
        <meta name="description" content="Edit your profile on Zenials to update your personal information and bio." />
        <meta name="keywords" content="Zenials, edit profile, user settings, creator platform" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Edit Profile</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <form className="bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
              Update Profile
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default EditProfilePage;
