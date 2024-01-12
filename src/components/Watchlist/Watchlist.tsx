import { Suspense } from "react";
import { WatchlistBackdropSkeleton } from "@/ui/skeletons/WatchlistBackdropSkeleton";
import WatchlistCardSkeleton from "@/ui/skeletons/WatchlistCardSkeleton";
import WatchlistCard from "@/components/Watchlist/WatchlistCard";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories";
import WatchlistBackdrop from "@/components/Watchlist/WatchlistBackdrop";
import Link from "next/link";

export default function Watchlist({ watchlist }: { watchlist: Watchlist[] }) {
  return (
    <>
      {watchlist.length ? (
        <div className="max-w-[1280px] w-[100%] mx-auto">
          <Suspense fallback={<WatchlistBackdropSkeleton />}>
            <WatchlistBackdrop image={watchlist[0].backdropPath} />
          </Suspense>
          <div className="max-w-[1100px] w-[100%] mx-auto mt-[2rem]">
            <Suspense fallback={<WatchlistCardSkeleton />}>
              <div className="flex flex-col px-4">
                <div className="flex flex-col md:flex-row items-start">
                  <WatchlistCategories />

                  <div className="max-w-[calc(1100px-257px)] w-[100%] md:ml-8">
                    {watchlist.length > 0 &&
                      watchlist.map((data: Watchlist) => (
                        <WatchlistCard data={data} key={data.id} />
                      ))}
                  </div>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-(188px+64px))] md:h-[calc(100vh-(124px+64px))] px-4">
          <p className="font-semibold text-lg mb-4 text-center">
            Nothing to show here! Please add something to watchlist.
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-[var(--c2)] rounded text-medium text-white"
          >
            Back to Home
          </Link>
        </div>
      )}
    </>
  );
}
