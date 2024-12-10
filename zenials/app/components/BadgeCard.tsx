import React from 'react';
import Image from 'next/image';

interface BadgeCardProps {
  title: string;
  description: string;
  image: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ title, description, image }) => {
  return (
    <div className="card shadow-lg bg-white hover:shadow-2xl">
      <figure>
        <Image src={image} alt={title} width={300} height={200} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-indigo-600">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;
