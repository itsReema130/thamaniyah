import React from 'react';

interface Episode {
  title: string;
  author: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

export default function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="bg-[#23243A] rounded-lg p-4 w-full">
      <ul className="divide-y divide-gray-700">
        {episodes.map((ep, idx) => (
          <li key={idx} className="py-3 flex flex-col">
            <span className="text-white text-sm font-semibold truncate">
              {ep.title}
            </span>
            <span className="text-xs text-gray-400 truncate">{ep.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
