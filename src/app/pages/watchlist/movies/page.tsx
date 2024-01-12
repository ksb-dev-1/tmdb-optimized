import { db } from "@/db";
import { auth } from "@/auth";
import Watchlist from "@/components/Watchlist/Watchlist";
import { redirect } from "next/navigation";

const getWatchlist = async (): Promise<Watchlist[]> => {
  const session = await auth();
  let watchlist;
  try {
    watchlist = await db.watchlist.findMany({
      where: {
        mediaType: "movie",
        userId: session?.user?.id,
      },
    });
    if (!watchlist) {
      throw new Error(`Failed to fetch movies watchlist! 404`);
    }
  } catch (error) {
    console.log(error);
  }
  return watchlist!;
};

export default async function WatchlistMoviesPage() {
  const session = await auth();
  const watchlist = await getWatchlist();

  return (
    <>
      {session?.user?.id ? <Watchlist watchlist={watchlist} /> : redirect("/")}
    </>
  );
}
