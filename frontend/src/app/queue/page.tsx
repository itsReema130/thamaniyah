import Link from 'next/link';

export default function QueuePage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-60 rounded-xl p-10 flex flex-col items-center w-full max-w-xl">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4 text-center">
          You don&apos;t have anything in your queue yet.
        </h2>
        <p className="text-lg text-gray-200 mb-6 text-center">
          Try adding an episode from the{' '}
          <Link href="/discover" className="text-blue-400 hover:underline">Discover</Link> page, or
        </p>
        <input
          type="text"
          placeholder="Search for an episode by title, podcast, guest, or topic"
          className="w-full px-4 py-3 rounded-lg bg-[#232336] text-gray-400 placeholder-gray-400 focus:outline-none cursor-not-allowed"
          disabled
        />
      </div>
    </div>
  );
} 