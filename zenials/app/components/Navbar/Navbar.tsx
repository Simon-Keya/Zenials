import React from "react";
import { useRouter } from 'next/router'; // Next.js router for programmatic navigation

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url); // Programmatic navigation
  };

  return (
    <nav 
      className="bg-gray-800 text-white py-4" 
      role="navigation" 
      aria-label="Main Navigation"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <span
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleNavigation("/")}
          role="link"
          tabIndex={0}
          aria-label="Navigate to Home"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleNavigation("/");
          }}
        >
          Zenials
        </span>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <span
              className={`hover:text-gray-400 cursor-pointer ${router.pathname === "/dashboard" ? "text-blue-400 font-semibold" : ""}`}
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
          <li>
            <span
              className={`hover:text-gray-400 cursor-pointer ${router.pathname === "/profile" ? "text-blue-400 font-semibold" : ""}`}
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
          <li>
            <span
              className={`hover:text-gray-400 cursor-pointer ${router.pathname === "/auth/login" ? "text-blue-400 font-semibold" : ""}`}
              onClick={() => handleNavigation("/auth/login")}
              role="link"
              tabIndex={0}
              aria-label="Navigate to Login"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleNavigation("/auth/login");
              }}
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
