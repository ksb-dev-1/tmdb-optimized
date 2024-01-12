"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import WatchlistCardSkeleton from "@/ui/skeletons/WatchlistCardSkeleton";
import WatchlistCardMoviesSkeleton from "@/ui/skeletons/WatchlistCardMoviesSkeleton";
import WatchlistCardTvSkeleton from "@/ui/skeletons/WatchlistCardTvSkeleton";

export default function ConditionalSuspenseFallback({ children }: any) {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  let path = pathArr[pathArr.length - 1];

  let skeleton;
  if (path === "watchlist") skeleton = <WatchlistCardSkeleton />;
  else if (path === "movies") skeleton = <WatchlistCardMoviesSkeleton />;
  else skeleton = <WatchlistCardTvSkeleton />;

  return <Suspense fallback={skeleton}>{children}</Suspense>;
}
