import React from 'react';
import { ItunesSearchResult } from '../core/type/search.type';

interface EpisodeListProps {
  episodes: ItunesSearchResult[];
}

export default function EpisodeList({ episodes }: EpisodeListProps) {
  return (
    <div className="bg-[#23243A] rounded-lg p-4 w-full">
      <ul className="divide-y divide-gray-700">
        {episodes.map((ep, idx) => (
          <li key={idx} className="py-3 flex flex-col">
            <span className="text-white text-sm font-semibold truncate">
              {ep.trackName}
            </span>
            <span className="text-xs text-gray-400 truncate">{ep.artistName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
