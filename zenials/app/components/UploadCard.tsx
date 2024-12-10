import React from 'react';

interface UploadCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UploadCard: React.FC<UploadCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card shadow-lg bg-white hover:shadow-2xl">
      <div className="card-body flex items-center space-x-4">
        <div className="text-4xl text-indigo-600">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-700">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
