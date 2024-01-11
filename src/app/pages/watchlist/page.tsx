import { db } from "@/db";
import { auth } from "@/auth";
import Watchlist from "@/components/Watchlist/Watchlist";

export default async function WatchlistPage() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  return <Watchlist watchlist={watchlist} />;
}
