import React from 'react';
import Head from 'next/head';

const StatsPage = () => {
  return (
    <>
      <Head>
        <title>Analytics | Zenials</title>
        <meta name="description" content="View detailed analytics on your content's performance and audience engagement on Zenials." />
        <meta name="keywords" content="Zenials, analytics, stats, content performance, audience engagement" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Analytics</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Content Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Views</h3>
              <p>Track how many people have viewed your content.</p>
              <p className="mt-2 text-3xl font-bold">12,345</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Engagement</h3>
              <p>Monitor likes, shares, and comments on your uploads.</p>
              <p className="mt-2 text-3xl font-bold">678</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default StatsPage;
