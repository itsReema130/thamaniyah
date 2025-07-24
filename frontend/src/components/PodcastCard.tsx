import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getColorClass } from '../core/helpers/color';

interface PodcastCardProps {
  title: string;
  author: string;
  primaryGenreName: string;
  image: string;
  collectionId?: number;
  count?: number;
}

export default function PodcastCard({ title, author, image, collectionId, count }: PodcastCardProps) {
  const router = useRouter();
  const podcastId = collectionId ? collectionId.toString() : encodeURIComponent(title);

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    router.push(`/${podcastId}`);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = [
    {
      label: 'Add to My Podcasts',
      onClick: () => { setMenuOpen(false); },
    },
    {
      label: 'Go to Podcast',
      onClick: () => { setMenuOpen(false); handleClick(); },
    },
    {
      label: 'Share podcast',
      onClick: () => { setMenuOpen(false); },
    },
    {
      label: 'Hide podcast',
      onClick: () => { setMenuOpen(false); },
    },
  ];

  return (
    <div
      className="relative w-full max-w-xs flex flex-col items-center justify-between p-3 bg-[#232336] rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 group"
      title={title}
    >
      {/* Menu Button */}
      <button
        className="absolute top-2 right-2 text-gray-400 hover:text-white p-1 rounded-full focus:outline-none z-10 bg-black/30"
        onClick={e => { e.stopPropagation(); setMenuOpen(v => !v); }}
        tabIndex={0}
        aria-label="Open podcast menu"
      >
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <circle cx="10" cy="4" r="1.5" />
          <circle cx="10" cy="10" r="1.5" />
          <circle cx="10" cy="16" r="1.5" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-10 right-2 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg shadow-lg py-2 w-44 z-20 animate-fade-in"
          onClick={e => e.stopPropagation()}
        >
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="block w-full text-left text-sm px-4 py-1 hover:bg-purple-600 transition-colors"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      {/* Image */}
      <div onClick={handleClick} className="flex flex-col items-center w-full gap-2">
        <div className="relative w-full aspect-square rounded bg-gray-700 overflow-hidden mb-2">
          <Image src={image} alt={title} fill className="object-cover rounded" />
        </div>
        {/* Title and Author */}
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 text-sm font-semibold text-white truncate w-full">
            {count && (
              <span className="text-gray-400"># {count}</span>
            )}
            <span className="truncate" title={title}>{title}</span>
          </div>
          <div className={`text-xs ${getColorClass(author)} truncate w-full`} title={author}>
            {author}
          </div>
        </div>
      </div>
    </div>
  );
}
