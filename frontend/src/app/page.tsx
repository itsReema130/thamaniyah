"use client";


import PodcastCard from '../components/PodcastCard';
import { fetchSearchHistory, searchHistory } from '../services/search.service';
import { useState, useEffect, useMemo } from 'react';
import { ItunesSearchResult } from '../core/type/search.type';
import Loading from '../components/loading';
import SectionTitle from '@/components/sectionTitle';
import HomeDiscovery from './HomeDiscovery';
import { useSearch } from '@/context/SearchContext';

export default function Home() {
  const { term } = useSearch();
  const [podcasts, setPodcasts] = useState<ItunesSearchResult[]>([]);
  const [trendingPodcasts, setTrendingPodcasts] = useState<ItunesSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [allData, setAllData] = useState<ItunesSearchResult[]>([]);

  // Group podcasts by genre for BrowseByGenre
  const genres = useMemo(() => {
    const genreMap: { [genre: string]: { image: string; title: string }[] } = {};
    allData.forEach((podcast) => {
      const genre = podcast.primaryGenreName || 'Other';
      if (!genreMap[genre]) genreMap[genre] = [];
      if (podcast.artworkUrl100 && podcast.trackName) {
        genreMap[genre].push({ image: podcast.artworkUrl100, title: podcast.trackName });
      }
    });
    return Object.entries(genreMap).map(([name, podcasts]) => ({
      name,
      podcasts: podcasts.slice(0, 3),
    }));
  }, [allData]);

  // Debounce search term
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTerm(term), 500);
    return () => clearTimeout(handler);
  }, [term]);

  // Fetch podcasts on search
  useEffect(() => {
    if (!debouncedTerm.trim()) {
      setPodcasts([]);
      return;
    }
    setLoading(true);
    (async () => {
      await searchHistory(debouncedTerm);
      const dbResponse = await fetchSearchHistory(1, 10);
      const latest = Array.isArray(dbResponse) ? dbResponse[0] : null;
      setPodcasts(latest?.search_results?.results ?? []);
      setLoading(false);
    })();
  }, [debouncedTerm]);


  useEffect(() => {
    (async () => {
      setLoading(true);
      const dbResponse = await fetchSearchHistory();
      const latest = Array.isArray(dbResponse) ? dbResponse[0] : null;
      const allResults = latest?.search_results?.results ?? [];
      setTrendingPodcasts(allResults.filter((podcast: ItunesSearchResult) => podcast.isTrending));
      setPodcasts(allResults);
      setAllData(allResults);
      setLoading(false);
    })();
  }, []);

  return (
    <main className="container mx-auto  px-4 pt-8 flex flex-col gap-10">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px] w-full">
          <Loading />
        </div>
      ) : (
        <>
          {!term && (
            <HomeDiscovery trendingPodcasts={trendingPodcasts} loading={loading} genres={genres} />
          )}
          {term && (
            <section>
              <SectionTitle title={`Top podcasts for ${term}`} subtitle={`${podcasts.length} podcasts found`} />
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-y-5 gap-x-3'>


                {(podcasts && podcasts.length > 0) ? (
                  podcasts.map((pod, idx) => {
                    const podWithId = pod as ItunesSearchResult & { collectionId?: number };
                    return (
                      <PodcastCard
                        key={idx}
                        title={podWithId.trackName ?? ''}
                        author={podWithId.artistName ?? ''}
                        primaryGenreName={podWithId.primaryGenreName ?? ''}
                        image={podWithId.artworkUrl100 ?? ''}
                        collectionId={podWithId.collectionId}
                      />
                    );
                  })
                ) : (
                  <div className="text-gray-400">No podcasts found. Try searching for something!</div>
                )}
</div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
