import React from "react";

const Analytics: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>
      <p className="text-gray-600">
        Track your content performance, audience insights, and engagement metrics here.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-200 p-4 shadow">
          <h2 className="text-lg font-semibold">Views</h2>
          <p className="text-4xl font-bold mt-2">12,345</p>
        </div>
        <div className="card bg-base-200 p-4 shadow">
          <h2 className="text-lg font-semibold">Followers</h2>
          <p className="text-4xl font-bold mt-2">1,234</p>
        </div>
        <div className="card bg-base-200 p-4 shadow">
          <h2 className="text-lg font-semibold">Shares</h2>
          <p className="text-4xl font-bold mt-2">567</p>
        </div>
        <div className="card bg-base-200 p-4 shadow">
          <h2 className="text-lg font-semibold">Likes</h2>
          <p className="text-4xl font-bold mt-2">89,101</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
