import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const VideoUploadPage: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!video) return setMessage('Please select a video to upload.');

    const formData = new FormData();
    formData.append('file', video);

    try {
      await axios.post('/api/uploads/video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Video uploaded successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload video. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Upload Video | Zenials</title>
        <meta
          name="description"
          content="Upload videos to share with your audience on Zenials."
        />
        <meta name="keywords" content="Zenials, upload video, creator platform" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Upload Video</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <form onSubmit={handleUpload} className="bg-white p-6 rounded-lg shadow-lg">
            <label htmlFor="video" className="block text-lg font-bold mb-2">
              Select Video:
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files?.[0] || null)}
              className="block w-full mb-4"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              Upload
            </button>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </main>
      </div>
    </>
  );
};

export default VideoUploadPage;
