import { Suspense } from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import WatchlistCard from "@/components/WatchlistCard/WatchlistCard";
import WatchlistSkeleton from "@/ui/WatchlistSkeleton";

export default async function Watchlist() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  return (
    <div className="max-w-[1280px] w-[100%] mx-auto mt-[6rem]">
      <Suspense fallback={<WatchlistSkeleton />}>
        <div className="max-w-[1100px] mx-auto px-4 xl:px-0 ">
          <div className="mt-8 sm:mt-12 flex items-center mb-2 sm:mb-4">
            <p className="text-lg sm:text-xl font-bold">Watchlist</p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] items-stretch gap-[2rem_1rem] lg:gap-[4rem_2rem]">
            {watchlist.map((data: Watchlist) => (
              <WatchlistCard data={data} key={data.id} />
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  );
}
