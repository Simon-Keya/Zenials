import React from "react";
import { useRouter } from 'next/router'; // Next.js router for programmatic navigation

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url); // This will handle the navigation
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <span 
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          Zenials
        </span>
        <ul className="flex space-x-6">
          <li>
            <span 
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation("/dashboard")}
            >
              Dashboard
            </span>
          </li>
          <li>
            <span 
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation("/profile")}
            >
              Profile
            </span>
          </li>
          <li>
            <span 
              className="hover:text-gray-400 cursor-pointer"
              onClick={() => handleNavigation("/auth/login")}
            >
              Login
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
