import React from 'react';

const PodcastCardSkeleton: React.FC = () => (
  <div className="bg-[#23243A] rounded-lg w-40 h-48 flex flex-col items-center justify-end p-4 animate-pulse">
    <div className="w-24 h-24 bg-gray-700 rounded mb-4" />
    <div className="w-20 h-4 bg-gray-700 rounded mb-2" />
    <div className="w-16 h-3 bg-gray-700 rounded" />
  </div>
);

export default PodcastCardSkeleton; 