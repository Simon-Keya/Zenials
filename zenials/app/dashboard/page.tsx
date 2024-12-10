import React from 'react';
import Head from 'next/head';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Zenials</title>
        <meta name="description" content="Manage your Zenials account, view analytics, and track badge progress from your dashboard." />
        <meta name="keywords" content="Zenials, dashboard, creator platform, analytics, badges" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Creator Dashboard</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">Analytics</h2>
              <p>Track your content performance with detailed analytics.</p>
              <a href="/dashboard/stats" className="text-indigo-600 underline mt-2 block">
                View Analytics
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">Badge Progress</h2>
              <p>Check your progress towards earning new badges.</p>
              <a href="/dashboard/badges" className="text-indigo-600 underline mt-2 block">
                Track Progress
              </a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold">Manage Content</h2>
              <p>Upload and manage your videos, audios, and pictures.</p>
              <a href="/profile/uploads" className="text-indigo-600 underline mt-2 block">
                Manage Uploads
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
