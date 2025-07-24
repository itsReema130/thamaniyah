import React from 'react';
import Image from 'next/image';
import SectionTitle from './sectionTitle';
import HorizontalScroll from './HorizontalScroll';
import { getRandomColor } from '@/core/helpers/getRandomColor';
interface Genre {
  name: string;
  podcasts: {
    image: string;
    title: string;
  }[];
}

interface BrowseByGenreProps {
  genres: Genre[];
}


const BrowseByGenre: React.FC<BrowseByGenreProps> = ({ genres }) => (
  <section className="relative">
   <SectionTitle title="Browse by genre" subtitle="The most popular podcasts and episodes now categorized by genre. Last updated 2 hours ago." />
    <div className="">
    <HorizontalScroll>
      {genres.map((genre, idx) => (
        <div
          key={idx}
          className="rounded-md px-4 pt-6 flex flex-col justify-center items-center mx-auto min-w-[220px] max-w-xs flex-shrink-0 relative"
          style={{ background: getRandomColor(idx) }}
        >
          <div className="font-bold text-white mb-2">{genre.name}</div>
          <div className="flex -space-x-6 hover:scale-105 transition-transform duration-200">
            {genre.podcasts.slice(0, 3).map((podcast, i) => {

              const isCenter = i === 1;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden  shadow-lg flex items-end justify-center 
                    ${isCenter ? 'w-24 h-24 z-20' : 'w-20 h-24 z-10 '}
                  `}
                  style={{ zIndex: genre.podcasts.length - i }}
                >
                  <Image
                    width={isCenter ? 96 : 80}
                    height={isCenter ? 96 : 80}
                    src={podcast.image}
                    alt={podcast.title}
                    className={`absolute left-0 bottom-0 object-cover rounded-t-lg
                      ${isCenter ? 'w-24 h-24' : 'w-20 h-20'}
                    `}
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
      </HorizontalScroll>
    </div>
  </section>
);

export default BrowseByGenre;
