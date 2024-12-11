"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface CreatorCardProps {
  creatorId: string;
  name: string;
  bio: string;
  profileImage: string;
  isFollowing: boolean;
  followersCount: number;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ 
  creatorId, 
  name, 
  bio, 
  profileImage, 
  isFollowing, 
  followersCount 
}) => {
  const [following, setFollowing] = useState(isFollowing);
  const [followerCount, setFollowerCount] = useState(followersCount);
  const [loading, setLoading] = useState(false);

  const handleFollowToggle = async () => {
    setLoading(true);

    try {
      if (following) {
        // Unfollow logic
        await axios.post('/api/unfollow', { creatorId });
        setFollowerCount((prev) => Math.max(prev - 1, 0));
      } else {
        // Follow logic
        await axios.post('/api/follow', { creatorId });
        setFollowerCount((prev) => prev + 1);
      }
      setFollowing(!following);
    } catch (error) {
      console.error('Error updating follow status:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-lg bg-white hover:shadow-2xl p-4">
      <figure className="mb-4">
        <Image 
          src={profileImage} 
          alt={name} 
          width={100} 
          height={100} 
          className="rounded-full object-cover mx-auto" 
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-indigo-600 text-xl">{name}</h2>
        <p className="text-gray-600">{bio}</p>
        <p className="text-gray-500 text-sm mt-2">{followerCount} Followers</p>
        <div className="card-actions justify-center mt-4">
          <button
            onClick={handleFollowToggle}
            className={`btn ${following ? 'btn-error' : 'btn-primary'} ${loading ? 'btn-disabled' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : following ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
