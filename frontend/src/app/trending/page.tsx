"use client";

import { useEffect, useState } from "react";
import { fetchSearchHistory } from "../../services/search.service";
import { ItunesSearchResult } from "../../core/type/search.type";
import PodcastCard from "../../components/PodcastCard";
import Loading from "../../components/loading";
import PodcastCardSkeleton from "../../components/PodcastCardSkeleton";

export default function TrendingPage() {
  const [trending, setTrending] = useState<ItunesSearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const dbResponse = await fetchSearchHistory();
      const latest = Array.isArray(dbResponse) ? dbResponse[0] : null;
      const allResults = latest?.search_results?.results ?? [];
      setTrending(allResults.filter((podcast: ItunesSearchResult) => podcast.isTrending));
      setLoading(false);
    })();
  }, []);

  return (
    <main className="container mx-auto min-h-screen px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-8">All Trending Podcasts</h1>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2">
          {[...Array(7)].map((_, idx) => (
            <PodcastCardSkeleton key={idx} />
          ))}
        </div>
      ) : trending.length === 0 ? (
        <div className="text-gray-400 text-center py-8">No trending podcasts found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-y-10 gap-x-2">
          {trending.map((podcast, idx) => (
            <PodcastCard
              key={idx}
              title={podcast.trackName}
              author={podcast.artistName}
              primaryGenreName={podcast.primaryGenreName}
              image={podcast.artworkUrl100}
            />
          ))}
        </div>
      )}
    </main>
  );
} 