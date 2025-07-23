import React from 'react';

export default function Sidebar() {
  return (
    <aside className="bg-[#18192A] text-white w-64 min-h-screen flex flex-col p-6 gap-8">
      <div className="flex items-center gap-2 mb-8">
        {/* Logo placeholder */}
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg" />
        <span className="font-bold text-lg">Podbay</span>
      </div>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-cyan-400 flex items-center gap-2">
          <span>🏠</span> Home
        </a>
        <a href="#" className="hover:text-cyan-400 flex items-center gap-2">
          <span>🔍</span> Discover
        </a>
      </nav>
      <div className="mt-8">
        <div className="uppercase text-xs text-gray-400 mb-2">Your Stuff</div>
        <nav className="flex flex-col gap-3">
          <a href="#" className="hover:text-cyan-400 flex items-center gap-2">
            <span>📥</span> My Queue
          </a>
          <a href="#" className="hover:text-cyan-400 flex items-center gap-2">
            <span>🎙️</span> My Podcasts
          </a>
          <a href="#" className="hover:text-cyan-400 flex items-center gap-2">
            <span>🕑</span> Recents
          </a>
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
