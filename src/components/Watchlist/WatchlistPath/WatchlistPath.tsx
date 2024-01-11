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
      <p className="md:text-xl font-medium md:font-bold mb-4 text-white md:text-black mt-4 hidden md:flex items-center">
        Wtachlist <span className="hidden md:block"> / {path}</span>
      </p>
    </div>
  );
}
