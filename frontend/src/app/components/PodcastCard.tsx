import React from 'react';

interface PodcastCardProps {
  title: string;
  author: string;
}

export default function PodcastCard({ title, author }: PodcastCardProps) {
  return (
    <div className="bg-[#23243A] rounded-lg w-40 h-48 flex flex-col items-center justify-end p-4">
      <div className="w-24 h-24 bg-gray-700 rounded mb-4" />
      <div className="text-sm font-semibold truncate w-full text-center text-white">
        {title}
      </div>
      <div className="text-xs text-gray-400 truncate w-full text-center">
        {author}
      </div>
    </div>
  );
}
