"use client"; // Mark this component as client-side

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Correct import for Next.js App Router

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (url: string) => {
    router.push(url); // Programmatic navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-900 text-white py-4" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <span
          className="text-5xl font-bold cursor-pointer text-gray-300"
          onClick={() => handleNavigation("/")}
          role="link"
          tabIndex={0}
          aria-label="Navigate to Home"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNavigation("/");
          }}
        >
          Z
        </span>

        {/* Hamburger menu */}
        <button
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "flex flex-col space-y-4" : "hidden md:flex md:flex-row md:space-x-6"
          } items-center`}
        >
          {/* Dashboard Tab */}
          <li>
            <span
              className={`hover:text-gray-400 cursor-pointer py-2 px-4 rounded-full transition-all duration-200 ${
                pathname === "/dashboard" ? "bg-blue-500 text-white font-semibold" : "text-gray-300"
              }`}
              onClick={() => handleNavigation("/dashboard")}
              role="link"
              tabIndex={0}
              aria-label="Navigate to Dashboard"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavigation("/dashboard");
              }}
            >
              Dashboard
            </span>
          </li>

          {/* Explore Button */}
          <li>
            <span
              className="bg-red-700 text-white py-2 px-6 rounded-full cursor-pointer transition-all duration-200 hover:bg-red-800"
              onClick={() => handleNavigation("/explore")}
              role="link"
              tabIndex={0}
              aria-label="Navigate to Explore"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavigation("/explore");
              }}
            >
              Explore
            </span>
          </li>

          {/* Profile Tab */}
          <li>
            <span
              className={`hover:text-gray-400 cursor-pointer py-2 px-4 rounded-full transition-all duration-200 ${
                pathname === "/profile" ? "bg-green-500 text-white font-semibold" : "text-gray-300"
              }`}
              onClick={() => handleNavigation("/profile")}
              role="link"
              tabIndex={0}
              aria-label="Navigate to Profile"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavigation("/profile");
              }}
            >
              Profile
            </span>
          </li>

          {/* Login Button */}
          <li>
            <button
              className={`py-2 px-4 rounded-full transition-all duration-200 ${
                pathname === "/auth/login" ? "bg-blue-500 text-white font-semibold" : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
              onClick={() => handleNavigation("/auth/login")}
              role="button"
              aria-label="Navigate to Login"
            >
              Login
            </button>
          </li>

          {/* Sign Up Button */}
          <li>
            <button
              className={`py-2 px-4 rounded-full transition-all duration-200 ${
                pathname === "/auth/signup" ? "bg-green-500 text-white font-semibold" : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
              onClick={() => handleNavigation("/auth/signup")}
              role="button"
              aria-label="Navigate to Sign Up"
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
