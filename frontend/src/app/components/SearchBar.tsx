import React from 'react';

export default function SearchBar() {
  return (
    <div className="w-full flex items-center bg-[#23243A] rounded-lg px-4 py-2 mt-4 mb-8">
      <span className="text-gray-400 mr-2">🔍</span>
      <input
        className="bg-transparent outline-none text-white w-full placeholder-gray-400"
        type="text"
        placeholder="Search through over 70 million podcasts and episodes..."
      />
    </div>
  );
}
