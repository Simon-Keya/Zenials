import React from 'react';
import Head from 'next/head';

const UploadLandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Uploads | Zenials</title>
        <meta
          name="description"
          content="Upload and manage your content, including videos, audios, and images on Zenials."
        />
        <meta name="keywords" content="Zenials, uploads, manage content, creator platform" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Content Uploads</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/uploads/video" className="block bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-50">
              <h2 className="text-xl font-bold">Upload Video</h2>
            </a>
            <a href="/uploads/audio" className="block bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-50">
              <h2 className="text-xl font-bold">Upload Audio</h2>
            </a>
            <a href="/uploads/image" className="block bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-50">
              <h2 className="text-xl font-bold">Upload Image</h2>
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default UploadLandingPage;
