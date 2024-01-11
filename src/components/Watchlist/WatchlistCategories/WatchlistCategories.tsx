import Link from "next/link";

export default function WatchlistCategories() {
  return (
    <div className="flex md:mb-0 mb-8 md:flex-col w-[100%] md:w-[225px] md:p-4 rounded md:shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      <Link
        href="/pages/watchlist"
        className="font-semibold md:mb-4 mr-4 md:mr-0 px-4 md:px-0 py-2 md:py-0 bg-slate-100 md:bg-white rounded"
      >
        All
      </Link>
      <Link
        href="/pages/watchlist/movies"
        className="font-semibold md:mb-4 mr-4 md:mr-0 px-4 md:px-0 py-2 md:py-0 bg-slate-100 md:bg-white rounded"
      >
        Movies
      </Link>
      <Link
        href="/pages/watchlist/tv"
        className="font-semibold mr-4 md:mr-4 px-4 md:px-0 py-2 md:py-0 bg-slate-100 md:bg-white rounded"
      >
        Tv Shows
      </Link>
    </div>
  );
}
