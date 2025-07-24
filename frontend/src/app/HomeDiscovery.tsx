import TrendingPodcasts from '../components/TrendingPodcasts';
import BrowseByGenre from '../components/BrowseByGenre';
import { ItunesSearchResult } from '../core/type/search.type';
interface HomeDiscoveryProps {
  trendingPodcasts: ItunesSearchResult[];
  loading: boolean;
  genres: { name: string; podcasts: { image: string; title: string }[] }[];
}

export default function HomeDiscovery({ trendingPodcasts, loading, genres }: HomeDiscoveryProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col gap-10">
      <TrendingPodcasts trendingPodcasts={trendingPodcasts} loading={loading} />
      <BrowseByGenre genres={genres} />
    </section>
  );
} 