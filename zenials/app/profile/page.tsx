"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

interface UserProfile {
  name: string;
  bio: string;
  email: string;
  uploadsCount: number;
  followersCount: number;
  isFollowing: boolean;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleFollowToggle = async () => {
    if (!user) return;

    try {
      const updatedUser = { ...user };

      if (user.isFollowing) {
        updatedUser.followersCount -= 1;
        updatedUser.isFollowing = false;

        // Backend API call to unfollow
        await axios.post(`/api/user/${user.email}/unfollow`);
      } else {
        updatedUser.followersCount += 1;
        updatedUser.isFollowing = true;

        // Backend API call to follow
        await axios.post(`/api/user/${user.email}/follow`);
      }

      setUser(updatedUser);
    } catch (err) {
      console.error("Error updating follow status:", err);
      alert("Failed to update follow status. Please try again.");
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user/profile");
        setUser(response.data);
      } catch (err) {
        setError("Failed to load user data. Please try again later.");
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        {error}
        <div className="mt-4">
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center text-gray-600">No user data found.</div>;
  }

  return (
    <>
      <Head>
        <title>{`${user.name}'s Profile | Zenials`}</title>
        <meta
          name="description"
          content={`View ${user.name}'s profile on Zenials.`}
        />
        <meta
          name="keywords"
          content="Zenials, profile, user profile, creator platform"
        />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-600 text-white py-4">
          <h1 className="text-center text-3xl font-bold">
            {`${user.name}'s Profile`}
          </h1>
        </header>
        <main className="max-w-6xl mx-auto p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p className="text-gray-600">{user.bio}</p>
            <h3 className="text-lg font-bold mt-4">
              Contact:{" "}
              <span className="text-gray-800 font-normal">{user.email}</span>
            </h3>
            <h3 className="text-lg font-bold mt-4">
              Uploads:{" "}
              <span className="text-gray-800 font-normal">{user.uploadsCount}</span>
            </h3>
            <h3 className="text-lg font-bold mt-4">
              Followers:{" "}
              <span className="text-gray-800 font-normal">{user.followersCount}</span>
            </h3>
            <button
              className={`mt-4 btn ${user.isFollowing ? "btn-error" : "btn-primary"}`}
              onClick={handleFollowToggle}
            >
              {user.isFollowing ? "Unfollow" : "Follow"}
            </button>
            <a
              href="/profile/edit"
              className="text-indigo-600 underline mt-4 block"
            >
              Edit Profile
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProfilePage;
