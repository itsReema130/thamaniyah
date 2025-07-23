import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import PodcastCard from './components/PodcastCard';
import EpisodeList from './components/EpisodeList';

const podcasts = [
  { title: 'بودكاست فنجان', author: 'بودكاست فنجان' },
  { title: 'فنجان قهوة', author: 'Mashael saud' },
  { title: 'فنجان قهوة', author: 'Omar Eldeep' },
  { title: 'بودكاست فنجان قهوة', author: 'OUMA Ahmed Abdelbasset' },
  { title: 'فنجان مع عائشة', author: 'عائشة الفيفي' },
  { title: 'بك فنجان امريكانو!', author: 'LngLounge' },
  { title: 'بك فنجان قهوة', author: 'Mohammad' },
];

const episodes = [
  { title: 'فنجان مسمر', author: 'هيلة' },
  { title: 'فنجان قهوة', author: 'Nataloo Talks | ناتلو سكل' },
  {
    title: 'فنجان النور',
    author: 'Al Noor with Coach Maysoon | بودكاست النور',
  },
  { title: 'همسة فنجان - البداية', author: 'Podcasts By Reham Ayam' },
  { title: 'همسة فنجان | الصور', author: 'Podcasts By Reham Ayam' },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#18192A]">
      <Sidebar />
      <div className="flex-1 flex flex-col p-8">
        <SearchBar />
        <h2 className="text-white text-xl font-bold mb-6">
          Top podcasts for فنجان
        </h2>
        <div className="flex gap-4 overflow-x-auto mb-10">
          {podcasts.map((pod, idx) => (
            <PodcastCard key={idx} title={pod.title} author={pod.author} />
          ))}
        </div>
        <h2 className="text-white text-xl font-bold mb-6">
          Top episodes for فنجان
        </h2>
        <EpisodeList episodes={episodes} />
      </div>
    </div>
  );
}
