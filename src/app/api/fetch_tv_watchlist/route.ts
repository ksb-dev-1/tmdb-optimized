import { db } from "@/db";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = await auth();
  try {
    const wishlist = await db.watchlist.findMany({
      where: {
        mediaType: "tv",
        userId: session?.user?.id,
      },
    });
    revalidatePath("/");
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.error();
  }
}
