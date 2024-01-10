"use client";

import { usePathname } from "next/navigation";

export default function WatchlistPath() {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  let path = pathArr[pathArr.length - 1];

  if (path === "watchlist") path = "All";
  else if (path === "movies") path = "Movies";
  else path = "Tv Shows";

  return (
    <p className="text-lg sm:text-xl font-bold mb-4">Watchlist / {path}</p>
  );
}
