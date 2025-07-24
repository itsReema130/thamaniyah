export default function RecentPage() {
  return (
    <div className="container mx-auto min-h-screen bg-[#181824] px-6 py-10">
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white mb-1">Recently Viewed Podcasts</h2>
        <p className="text-gray-400 mb-6">You have 0 podcasts in this list.</p>
        <div className="h-32" />
      </section>
      <section>
        <h2 className="text-xl font-semibold text-white mb-1">Recently Streamed Episodes</h2>
        <p className="text-gray-400 mb-6">You have 0 episodes in this list.</p>
        <div className="h-32" />
      </section>
    </div>
  );
} 