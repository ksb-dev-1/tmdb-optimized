import { Suspense } from "react";
import { WatchlistBackdropSkeleton } from "@/ui/skeletons/WatchlistBackdropSkeleton";
import WatchlistCard from "@/components/Watchlist/WatchlistCard";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories";
import WatchlistBackdrop from "@/components/Watchlist/WatchlistBackdrop";
import Link from "next/link";
import ConditionalSuspenseFallback from "./ConditionalSuspenseFallback";
// import { db } from "@/db";
// import { auth } from "@/auth";
import { redirect } from "next/navigation";

const getWatchlist = async (category: string) => {
  //const session = await auth();
  let watchlist;
  try {
    if (category === "watchlist") {
      const response = await fetch(
        "http://localhost:3000/api/fetch_watchlist",
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch watchlist! ${response.status}`);
      }

      watchlist = await response.json();

      return watchlist;
    } else {
      const response = await fetch(
        `http://localhost:3000/api/fetch_${category}_watchlist`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch ${category} watchlist! ${response.status}`
        );
      }

      watchlist = await response.json();
      return watchlist;
    }
  } catch (error) {
    console.log(error);
  }
};

export default async function Watchlist({ category }: { category?: string }) {
  const watchlist = await getWatchlist(category!);

  return (
    <>
      {watchlist && watchlist.length > 1 && (
        <div className="max-w-[1280px] w-[100%] mx-auto">
          <Suspense fallback={<WatchlistBackdropSkeleton />}>
            <WatchlistBackdrop image={watchlist[0].backdropPath} />
          </Suspense>
          <div className="max-w-[1100px] w-[100%] mx-auto mt-[2rem]">
            <ConditionalSuspenseFallback>
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
            </ConditionalSuspenseFallback>
          </div>
        </div>
      )}

      {watchlist && watchlist.length === 0 && (
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

      {/* {!session?.user?.id && redirect("/")} */}
    </>
  );
}
