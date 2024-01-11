import { Suspense } from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import WatchlistCardSkeleton from "@/ui/WatchlistCardSkeleton";
import WatchlistCard from "@/components/Watchlist/WatchlistCard/WatchlistCard";
import WatchlistPath from "@/components/Watchlist/WatchlistPath/WatchlistPath";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories/WatchlistCategories";

export default async function WatchlistTv() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      mediaType: "movie",
      userId: session?.user?.id,
    },
  });

  return (
    <div className="max-w-[1100px] w-[100%] mx-auto mt-[2rem] md:mt-[6rem]">
      <Suspense fallback={<WatchlistCardSkeleton />}>
        <div className="flex flex-col px-4">
          {watchlist.length > 0 && <WatchlistPath />}

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
  );
}
