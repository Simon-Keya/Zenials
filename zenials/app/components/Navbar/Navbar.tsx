"use client"; // Mark this component as client-side

import React from "react";
import { useRouter, usePathname } from "next/navigation"; // Correct import for Next.js App Router

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (url: string) => {
    router.push(url); // Programmatic navigation
  };

  return (
    <nav className="bg-purple-900 text-white py-4" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <span
          className="text-4xl font-bold cursor-pointer text-gray-300"
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

        {/* Navigation Links */}
        <ul className="flex space-x-6">
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
