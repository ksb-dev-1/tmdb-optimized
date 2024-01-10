import { Suspense } from "react";
import { db } from "@/db";
import { auth } from "@/auth";
import WatchlistCard from "@/components/WatchlistCard/WatchlistCard";
import WatchlistSkeleton from "@/ui/WatchlistSkeleton";
import Card from "@/components/Watchlist/Card/Card";
import WatchlistPath from "@/components/Watchlist/WatchlistPath/WatchlistPath";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories/WatchlistCategories";

export default async function WatchlistMovies() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      mediaType: "movie",
      userId: session?.user?.id,
    },
  });

  return (
    <div className="max-w-[1100px] w-[100%] mx-auto mt-[6rem]">
      <div className="flex flex-col px-4">
        <WatchlistPath />

        <div className="flex items-start">
          <WatchlistCategories />

          <div className="max-w-[calc(1100px-257px)] w-[100%] ml-8">
            {watchlist.map((data: Watchlist) => (
              // <WatchlistCard data={data} key={data.id} />
              <Card data={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex items-start">
        <div className="flex flex-col">
          <p className="text-lg sm:text-xl font-bold mb-4">Watchlist</p>
          <div className="flex flex-col p-4 w-[150px] rounded mr-8 shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <Link href="#" className="">
              All
            </Link>
            <Link href="#">Movies</Link>
            <Link href="#">Tv Shows</Link>
          </div>
        </div>
        <Suspense fallback={<WatchlistSkeleton />}>
          <div className="mt-10">
            <div className="w-[85%]">
              {watchlist.map((data: Watchlist) => (
                // <WatchlistCard data={data} key={data.id} />
                <Card data={data} key={data.id} />
              ))}
            </div>
          </div>
        </Suspense>
      </div> */}
    </div>
  );
}
