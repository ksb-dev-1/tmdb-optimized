"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WatchlistPath() {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  let path = pathArr[pathArr.length - 1];

  if (path === "watchlist") path = "All";
  else if (path === "movies") path = "Movies";
  else path = "Tv Shows";

  return (
    <div>
      <div className="flex items-center justify-between fixed md:relative left-0 top-0 w-full h-[64px] bg-[var(--c3)] md:bg-white px-4 md:px-0 z-[2]">
        {/* <Link
          href="/"
          aria-label="TMDB"
          className="gradient text-[1.25rem] md:text-[1.75rem] font-[900] flex items-center no-underline rounded-[var(--border-radius-1)] tracking-[1px] mr-8 md:hidden"
        >
          TMDB
          <span className="inline-block w-[35px] md:w-[55px] h-4 md:h-5 ml-1 md:ml-2 mt-[0.125rem] md:mt-1 rounded-[50px] bg-[var(--c2)]"></span>
        </Link> */}
        <p className="md:text-xl font-medium md:font-bold mb-4 bg-[var(--c3)] md:bg-white text-white md:text-black mt-4 flex items-center">
          Wtachlist <span className="hidden md:block"> / {path}</span>
        </p>
      </div>
    </div>
  );
}
