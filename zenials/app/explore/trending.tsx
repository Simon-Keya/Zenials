import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

interface TrendingContent {
  id: string;
  title: string;
  type: string;
  url: string;
}

const TrendingPage: React.FC = () => {
  const [content, setContent] = useState<TrendingContent[]>([]);

  useEffect(() => {
    axios
      .get('/api/explore/trending')
      .then((response) => setContent(response.data))
      .catch((error) => console.error('Error fetching trending content:', error));
  }, []);

  return (
    <>
      <Head>
        <title>Trending Content | Zenials</title>
        <meta
          name="description"
          content="Discover the latest and trending content on Zenials."
        />
        <meta name="keywords" content="Zenials, trending content, popular creators" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Trending Content</h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>Type: {item.type}</p>
                <a
                  href={item.url}
                  className="text-indigo-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Content
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default TrendingPage;
