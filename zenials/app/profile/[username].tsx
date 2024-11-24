import React from "react";
import { useRouter } from "next/router";

const Profile: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profile: {username}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <div className="card bg-base-200 p-4 shadow">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-2">This is the user profile for {username}.</p>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-bold mb-4">Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-base-200 p-4 shadow">
              <h3 className="font-semibold">Post Title 1</h3>
              <p className="text-sm mt-2 text-gray-600">Description of the post...</p>
            </div>
            <div className="card bg-base-200 p-4 shadow">
              <h3 className="font-semibold">Post Title 2</h3>
              <p className="text-sm mt-2 text-gray-600">Description of the post...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
