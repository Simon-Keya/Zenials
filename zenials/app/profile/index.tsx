import React from "react";
import Button from "../components/UI/Button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Zenials</h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        A platform for content creators to monetize their work and connect with their audience.
      </p>
      <Button
        text="Get Started"
        onClick={() => alert("Redirecting to the sign-up page...")}
      />
    </div>
  );
};

export default Home;
