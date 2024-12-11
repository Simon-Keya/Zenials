"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    // Fetch a random image from Unsplash
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(
          "https://source.unsplash.com/random/1920x1080/?nature,technology,creativity"
        );
        if (response.ok) {
          setBackgroundImage(response.url);
        } else {
          console.error("Failed to fetch the background image.");
        }
      } catch (error) {
        console.error("Error fetching the background image:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen flex flex-col items-center justify-center ${
          backgroundImage ? "" : "bg-gray-900"
        }`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-60 text-center p-10 rounded-md">
          <h1 className="text-4xl font-bold text-white">
            Welcome to{" "}
            <span className="text-5xl font-extrabold text-red-800">Z</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            The platform for creators to monetize and grow their audience.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
