import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

interface Upload {
  id: string;
  title: string;
  type: string;
  createdAt: string;
  url: string;
}

const UploadsPage: React.FC = () => {
  const [uploads, setUploads] = useState<Upload[]>([]);

  useEffect(() => {
    // Fetch user uploads
    axios
      .get('/api/user/uploads')
      .then((response) => setUploads(response.data))
      .catch((error) => console.error('Error fetching uploads:', error));
  }, []);

  return (
    <>
      <Head>
        <title>My Uploads | Zenials</title>
        <meta
          name="description"
          content="View and manage your uploaded videos, audios, and images on Zenials."
        />
        <meta
          name="keywords"
          content="Zenials, uploads, manage content, creator platform"
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">My Uploads</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          {uploads.length === 0 ? (
            <p className="text-center text-gray-500">No uploads found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {uploads.map((upload) => (
                <div key={upload.id} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold">{upload.title}</h3>
                  <p>Type: {upload.type}</p>
                  <p>Uploaded: {new Date(upload.createdAt).toLocaleDateString()}</p>
                  <a
                    href={upload.url}
                    className="text-indigo-600 underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Content
                  </a>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default UploadsPage;
