"use client"
import React from 'react';
import { BiSolidPlanet } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from '@/core/util/cn';
import { HiOutlineClock ,HiOutlineViewList ,HiOutlineViewGrid} from 'react-icons/hi';
import { PiRocketLaunch } from 'react-icons/pi';
import Logo from './logo';
export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const isDiscover = pathname === '/discover';
  const isQueue = pathname === '/queue';
  const isPodcasts = pathname === '/podcasts';
  const isRecents = pathname === '/recent';

  return (
    <aside className="bg-[#18192A] h-fit text-white w-52 max-w-52 min-h-screen flex flex-col p-6 gap-8 border-r border-gray-700 shadow-2xl backdrop-blur-3xl shadow-black">
      <div className="flex items-center gap-2 mb-8">
      <Logo />
        <span className="font-bold text-lg">Podbay</span>
      </div>
      <nav className="flex flex-col gap-4 ">
        <Link
          href="/"
          className={cn(
            'hover:text-cyan-400 flex items-center gap-2',
            isHome && 'text-cyan-400 font-bold'
          )}
        >
          <span className={'text-2xl'}>
            <BiSolidPlanet />
          </span> Home
        </Link>
        <Link
          href="/discover"
          className={cn(
            'hover:text-cyan-400 flex items-center gap-2',
            isDiscover && 'text-cyan-400 font-bold'
          )}
        >
          <span className="text-2xl">
          <PiRocketLaunch />
          </span> Discover
        </Link>
      </nav>
      <div className="">
        <div className="uppercase text-sm text-gray-400 mb-2">Your Stuff</div>
        <nav className="flex flex-col gap-3">
          <Link
            href="/queue"
            className={cn(
              'hover:text-cyan-400 flex items-center gap-2',
              isQueue && 'text-cyan-400 font-bold'
            )}
          >
            <span><HiOutlineViewList /></span> My Queue
          </Link>
          <Link
            href="/podcasts"
            className={cn(
              'hover:text-cyan-400 flex items-center gap-2',
              isPodcasts && 'text-cyan-400 font-bold'
            )}
          >
            <span><HiOutlineViewGrid /></span> My Podcasts
          </Link>
          <Link
            href="/recent"
            className={cn(
              'hover:text-cyan-400 flex items-center gap-2',
              isRecents && 'text-cyan-400 font-bold'
            )}
          >
            <span><HiOutlineClock /></span> Recents
          </Link>
        </nav>
      </div>
      <div className="mt-auto text-xs text-gray-500">
        Podbay v2.9.6 by Fancy Soups.
        <br />
        About | All Podcasts
      </div>
    </aside>
  );
}
