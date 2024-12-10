import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const AudioUploadPage: React.FC = () => {
  const [audio, setAudio] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!audio) return setMessage('Please select an audio file to upload.');

    const formData = new FormData();
    formData.append('file', audio);

    try {
      await axios.post('/api/uploads/audio', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Audio uploaded successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload audio. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Upload Audio | Zenials</title>
        <meta
          name="description"
          content="Upload audio files to share with your audience on Zenials."
        />
        <meta name="keywords" content="Zenials, upload audio, creator platform" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Upload Audio</h1>
        </header>
        <main className="max-w-4xl mx-auto p-6">
          <form onSubmit={handleUpload} className="bg-white p-6 rounded-lg shadow-lg">
            <label htmlFor="audio" className="block text-lg font-bold mb-2">
              Select Audio File:
            </label>
            <input
              type="file"
              id="audio"
              accept="audio/*"
              onChange={(e) => setAudio(e.target.files?.[0] || null)}
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

export default AudioUploadPage;
