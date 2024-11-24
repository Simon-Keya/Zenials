import React from "react";
import Navbar from "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";


const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Zenials</h1>
        <p className="mt-4 text-lg text-gray-600">
          The platform for creators to monetize and grow their audience.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
