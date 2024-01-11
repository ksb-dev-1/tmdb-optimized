"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WatchlistCategories() {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  let path = pathArr[pathArr.length - 1];

  return (
    <div className="flex md:mb-0 mb-8 md:flex-col w-[100%] md:w-[225px] md:p-4 rounded md:shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      <Link
        href="/pages/watchlist"
        className={`font-semibold mr-4 md:mr-0 px-4 py-1 md:py-2 ${
          path == "watchlist" ? "bg-[var(--c2)] text-white" : "bg-slate-200"
        } md:${
          path == "watchlist" ? "bg-slate-200 md:text-black" : "bg-white"
        } rounded`}
      >
        All
      </Link>
      <Link
        href="/pages/watchlist/movies"
        className={`font-semibold mr-4 md:mr-0 px-4 py-1 md:py-2 ${
          path == "movies" ? "bg-[var(--c2)] text-white" : "bg-slate-200"
        } md:${
          path === "movies" ? "bg-slate-200 md:text-black" : "bg-white"
        } rounded`}
      >
        Movies
      </Link>
      <Link
        href="/pages/watchlist/tv"
        className={`font-semibold mr-4 md:mr-4 px-4 py-1 md:py-2 ${
          path == "tv" ? "bg-[var(--c2)] text-white" : "bg-slate-200"
        } md:${
          path === "tv" ? "bg-slate-200 md:text-black" : "bg-white"
        } rounded`}
      >
        Tv Shows
      </Link>
    </div>
  );
}
