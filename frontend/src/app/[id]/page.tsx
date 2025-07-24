"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { searchHistory } from "@/services/search.service";
import { ItunesSearchResult } from "@/core/type/search.type";
import Loading from "@/components/loading";

export default function PodcastDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [podcast, setPodcast] = useState<ItunesSearchResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    searchHistory(id as string)
      .then((data) => {
        if (data?.results?.length > 0) {
          setPodcast(data.results[0]);
        } else {
          setPodcast(null);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (!podcast) return <div className="text-white p-8">Podcast not found.</div>;

  return (
    <div className="flex min-h-screen bg-[#18192A] text-white">
      {/* Sidebar */}
      <aside className="w-80 p-6 flex flex-col items-center bg-[#23243A] rounded-lg m-6">
        {podcast.artworkUrl100 && (
          <Image
            src={podcast.artworkUrl100}
            alt={podcast.trackName}
            width={200}
            height={200}
            className="rounded-lg mb-4"
          />
        )}
        <h1 className="text-2xl font-bold text-center">{podcast.trackName}</h1>
        <p className="text-green-400 text-center mb-4">{podcast.artistName}</p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-2">
          + Add to My Podcasts
        </button>
        <button className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-2 rounded mb-4">
          ⟳ Refresh episodes
        </button>
        {podcast.primaryGenreName && (
          <div className="mb-4 w-full">
            <div className="text-xs text-gray-400 mb-1">GENRE</div>
            <div className="flex justify-between items-center bg-[#18192A] rounded px-2 py-1 mb-1">
              <span>{podcast.primaryGenreName}</span>
            </div>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-2">
          {podcast.artistName && `Copyright © ${podcast.artistName}`}
        </p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <div className="bg-[#23243A] rounded p-4 mb-4">
          {podcast.trackName && (
            <div className="font-bold mb-2">{podcast.trackName}</div>
          )}
          {podcast.releaseDate && (
            <div className="text-gray-400 text-sm mb-2">
              Released: {new Date(podcast.releaseDate).toLocaleDateString()}
            </div>
          )}
          {/* Add more fields if available */}
        </div>
      </main>
    </div>
  );
}
