import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const NotificationSettingsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Notification Settings | Zenials</title>
        <meta name="description" content="Manage your notification preferences on Zenials." />
        <meta name="keywords" content="Zenials, notification settings, preferences" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-indigo-600 text-center mb-8">Notification Settings</h1>
          <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <label className="block font-bold mb-2">Email Notifications</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <div>
              <label className="block font-bold mb-2">Push Notifications</label>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Save Settings
            </button>
          </form>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotificationSettingsPage;
