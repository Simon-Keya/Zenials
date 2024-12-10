import React from 'react';
import Head from 'next/head';

const BadgesPage = () => {
  return (
    <>
      <Head>
        <title>Badges | Zenials</title>
        <meta name="description" content="Track your badge progress and learn how to unlock new badges on Zenials." />
        <meta name="keywords" content="Zenials, badges, achievements, creator platform, rewards" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Badge Progress</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Your Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Newbie Creator</h3>
              <p>Earned for uploading your first piece of content.</p>
              <p className="mt-2 text-green-500 font-bold">Achieved</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">Rising Star</h3>
              <p>Earned for reaching 10,000 views across all uploads.</p>
              <p className="mt-2 text-yellow-500 font-bold">In Progress</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default BadgesPage;
