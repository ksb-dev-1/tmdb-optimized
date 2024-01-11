import { db } from "@/db";
import { auth } from "@/auth";
import Watchlist from "@/components/Watchlist/Watchlist";

export default async function WatchlistMoviesPage() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      mediaType: "movie",
      userId: session?.user?.id,
    },
  });

  return <Watchlist watchlist={watchlist} />;
}
