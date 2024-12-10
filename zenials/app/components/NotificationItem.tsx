import React from 'react';

interface NotificationItemProps {
  title: string;
  description: string;
  time: string; // Time can be a formatted string like "2 hours ago"
}

const NotificationItem: React.FC<NotificationItemProps> = ({ title, description, time }) => {
  return (
    <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
        {/* Icon placeholder */}
        <span className="text-xl font-bold">!</span>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-bold text-gray-700">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <span className="text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
