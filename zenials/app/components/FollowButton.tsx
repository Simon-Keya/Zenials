"use client"
import React, { useState } from "react";
import { followUser, unfollowUser } from "../api/followers";

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
  onFollow: () => void;
  onUnfollow: () => void;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, isFollowing, onFollow, onUnfollow }) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleFollow = () => {
    if (following) {
      unfollowUser(userId).then(() => {
        setFollowing(false);  // Correct the expression: set the state after unfollow
        onUnfollow();
      });
    } else {
      followUser(userId).then(() => {
        setFollowing(true);  // Correct the expression: set the state after follow
        onFollow();
      });
    }
  };

  return (
    <button
      onClick={handleFollow}
      className={`px-4 py-2 rounded ${following ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}
    >
      {following ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
