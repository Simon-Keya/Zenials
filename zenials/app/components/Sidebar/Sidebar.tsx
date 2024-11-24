import React from "react";
import { useRouter } from 'next/router'; // Next.js router for programmatic navigation

const Sidebar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url); // This will handle the navigation
  };

  return (
    <aside className="bg-gray-100 w-64 h-full p-4">
      <ul className="space-y-4">
        <li>
          <span 
            className="block text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => handleNavigation("/dashboard")}
          >
            Dashboard
          </span>
        </li>
        <li>
          <span 
            className="block text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => handleNavigation("/analytics")}
          >
            Analytics
          </span>
        </li>
        <li>
          <span 
            className="block text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => handleNavigation("/earnings")}
          >
            Earnings
          </span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
