import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to your dashboard, where you can manage your content and analytics.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
