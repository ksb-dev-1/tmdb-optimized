import { db } from "@/db";
import { auth } from "@/auth";
import Watchlist from "@/components/Watchlist/Watchlist";
import { redirect } from "next/navigation";

export default async function WatchlistPage() {
  const session = await auth();
  const watchlist = await db.watchlist.findMany({
    where: {
      userId: session?.user?.id,
    },
  });

  return (
    <>
      {session?.user?.id ? <Watchlist watchlist={watchlist} /> : redirect("/")}
    </>
  );
}
