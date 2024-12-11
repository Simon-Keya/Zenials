"use client"
import React, { useEffect, useState } from 'react';
import CreatorCard from '../components/CreatorCard';
import axios from 'axios';

interface Creator {
  id: string;
  name: string;
  bio: string;
  profileImage: string;
  isFollowing: boolean;
  followersCount: number;
}

const CreatorsSection: React.FC = () => {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch creators from the backend
  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const response = await axios.get('/api/creators');
        setCreators(response.data);
      } catch (err) {
        setError('Failed to load creators. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading creators...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {creators.map((creator) => (
        <CreatorCard
          key={creator.id} // Unique key
          creatorId={creator.id}
          name={creator.name}
          bio={creator.bio}
          profileImage={creator.profileImage}
          isFollowing={creator.isFollowing}
          followersCount={creator.followersCount}
        />
      ))}
    </div>
  );
};

export default CreatorsSection;
