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
        mediaType: "tv",
        userId: session?.user?.id,
      },
    });
    if (!watchlist) {
      throw new Error(`Failed to fetch tc shows watchlist! 404`);
    }
  } catch (error) {
    console.log(error);
  }
  return watchlist!;
};

export default async function WatchlistTvPage() {
  const session = await auth();
  const watchlist = await getWatchlist();

  return (
    <>
      {session?.user?.id ? <Watchlist watchlist={watchlist} /> : redirect("/")}
    </>
  );
}
