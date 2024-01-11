import { Suspense } from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import WatchlistCardSkeleton from "@/ui/WatchlistCardSkeleton";
import WatchlistCard from "@/components/Watchlist/WatchlistCard/WatchlistCard";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories/WatchlistCategories";
import WatchlistBackdrop from "@/components/Watchlist/WatchlistBackdrop/WatchlistBackdrop";
import { WatchlistBackdropSkeleton } from "@/components/Watchlist/WatchlistBackdrop/WatchlistBackdropSkeleton";

export default async function WatchlistMovies() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      mediaType: "movie",
      userId: session?.user?.id,
    },
  });

  return (
    <div className="max-w-[1280px] w-[100%] mx-auto">
      <Suspense fallback={<WatchlistBackdropSkeleton />}>
        <WatchlistBackdrop image={watchlist[0].backdropPath} />
      </Suspense>
      <div className="max-w-[1100px] w-[100%] mx-auto mt-[2rem]">
        <Suspense fallback={<WatchlistCardSkeleton />}>
          <div className="flex flex-col px-4">
            <div className="flex flex-col md:flex-row items-start">
              {watchlist.length > 0 && <WatchlistCategories />}

              <div className="max-w-[calc(1100px-257px)] w-[100%] md:ml-8">
                {watchlist.map((data: Watchlist) => (
                  <WatchlistCard data={data} key={data.id} />
                ))}
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
