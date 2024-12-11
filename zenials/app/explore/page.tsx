import React from 'react';
import Head from 'next/head';

const ExplorePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Explore | Zenials</title>
        <meta
          name="description"
          content="Discover trending content and amazing creators on Zenials."
        />
        <meta name="keywords" content="Zenials, explore, discover creators, trending content" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-gray-300 py-4">
          <h1 className="text-center text-3xl font-bold">Explore Content</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/explore/trending" className="block bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-50">
              <h2 className="text-xl font-bold">Trending Content</h2>
            </a>
            <a href="/explore/creators" className="block bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-50">
              <h2 className="text-xl font-bold">Discover Creators</h2>
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default ExplorePage;
