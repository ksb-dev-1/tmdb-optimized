import Link from "next/link";

export default function WatchlistCategories() {
  return (
    <div className="flex flex-col w-[225px] p-4 rounded shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      <Link
        href="/pages/watchlist"
        className="font-semibold mb-4 bg-white rounded"
      >
        All
      </Link>
      <Link
        href="/pages/watchlist/movies"
        className="font-semibold mb-4 bg-white rounded"
      >
        Movies
      </Link>
      <Link
        href="/pages/watchlist/tv"
        className="font-semibold bg-white rounded"
      >
        Tv Shows
      </Link>
    </div>
  );
}
