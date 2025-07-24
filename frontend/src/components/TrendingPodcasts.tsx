import React, { useState, useRef } from 'react';
import PodcastCard from './PodcastCard';
import { ItunesSearchResult } from '../core/type/search.type';
import { useRouter } from 'next/navigation';
import PodcastCardSkeleton from './PodcastCardSkeleton';
import SectionTitle from './sectionTitle';
import { HiOutlineDotsVertical } from "react-icons/hi";


interface TrendingPodcastsProps {
  trendingPodcasts: ItunesSearchResult[];
  loading?: boolean;
}

const TrendingPodcasts: React.FC<TrendingPodcastsProps> = ({ trendingPodcasts, loading = false }) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const isEmpty = !Array.isArray(trendingPodcasts) || trendingPodcasts.length === 0;

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className='flex flex-col gap-4 container'>
      <div className="flex items-center justify-between">
        <SectionTitle title="Trending Podcasts" subtitle={`${trendingPodcasts.length} podcasts found`} />
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex flex-col items-center justify-center w-8 h-8 rounded-full hover:bg-gray-700 focus:outline-none"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Open actions menu"
          >
            <HiOutlineDotsVertical />

          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 text-white ${layout === 'grid' ? 'font-bold' : ''}`}
                onClick={() => { setLayout('grid'); setDropdownOpen(false); }}
              >
                Grid View
              </button>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-gray-700 text-white ${layout === 'list' ? 'font-bold' : ''}`}
                onClick={() => { setLayout('list'); setDropdownOpen(false); }}
              >
                List View
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-purple-700 text-white border-t border-gray-700"
                onClick={() => { router.push('/trending'); setDropdownOpen(false); }}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        layout === 'grid' ? (
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 gap-0">
            {[...Array(5)].map((_, idx) => (
              <PodcastCardSkeleton key={idx} />
            ))}
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[...Array(4)].map((_, idx) => (
              <PodcastCardSkeleton key={idx} />
            ))}
          </div>
        )
      ) : isEmpty ? (
        <div className="text-gray-400 text-center py-8">No trending podcasts at the moment.</div>
      ) : (
        layout === 'grid' ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2">
              {trendingPodcasts.slice(0, 6).map((podcast, id) => (
                  <PodcastCard
                  key={id}
                    title={podcast.trackName}
                    author={podcast.artistName}
                    primaryGenreName={podcast.primaryGenreName}
                    image={podcast.artworkUrl100}
                    count={id + 1}
                  />
              ))}
            </div>

          </>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-2">
            {trendingPodcasts.map((podcast, id) => (
              <div className="min-w-[180px] max-w-xs flex-shrink-0 transition-transform duration-200 hover:scale-105" key={id}>
                <PodcastCard
                  title={podcast.trackName}
                  author={podcast.artistName}
                  primaryGenreName={podcast.primaryGenreName}
                  image={podcast.artworkUrl100}
                  count={trendingPodcasts.length}
                />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default TrendingPodcasts; 