"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteWatchlist(id: any, mediaType: any) {
  const session = await auth();
  let res;

  if (mediaType === "movie") {
    res = await deleteFromMovieDocument(id, session);

    if (res.success)
      res = await deleteFromWatchlistDocument(id, mediaType, session);
  }

  if (mediaType === "tv") {
    res = await deleteFromTvDocument(id, session);

    if (res.success)
      res = await deleteFromWatchlistDocument(id, mediaType, session);
  }

  revalidatePath("/");
  revalidatePath("/pages/watchlist");
  revalidatePath("/pages/watchlist/movies");
  revalidatePath("/pages/watchlist/tv");
  return res;
}

const deleteFromMovieDocument = async (id: number, session: any) => {
  try {
    const movieToDelete = await db.movie.findFirst({
      where: {
        cardId: Number(id),
        mediaType: "movie",
        userId: session!.user!.id,
      },
    });

    if (!movieToDelete) {
      return {
        error: "Failed to delete movie from watchlist-1",
      };
    }

    await db.movie.delete({
      where: {
        id: movieToDelete.id,
      },
    });

    return {
      success: "Movie deleted from watchlist",
    };
  } catch (error) {
    return {
      error: "Failed to delete movie from watchlist-2",
    };
  }
};

const deleteFromTvDocument = async (id: number, session: any) => {
  try {
    const tvToDelete = await db.tv.findFirst({
      where: {
        cardId: id,
        mediaType: "tv",
        userId: session!.user!.id,
      },
    });

    if (!tvToDelete) {
      return {
        error: "Failed to delete tv show from watchlist-1",
      };
    }

    await db.tv.delete({
      where: {
        id: tvToDelete.id,
      },
    });

    return {
      success: "Tv show deleted from watchlist",
    };
  } catch (error) {
    return {
      error: "Failed to delete tv show from watchlist-2",
    };
  }
};

const deleteFromWatchlistDocument = async (
  id: number,
  mediaType: string,
  session: any
) => {
  try {
    const watchlistToDelete = await db.watchlist.findFirst({
      where: {
        cardId: id,
        mediaType,
        userId: session!.user!.id,
      },
    });

    if (!watchlistToDelete) {
      return {
        error: `Failed to delete ${
          mediaType === "movie" ? "Movie" : "Tv show"
        } from watchlist-1`,
      };
    }

    await db.watchlist.delete({
      where: {
        id: watchlistToDelete.id,
      },
    });

    return {
      success: `${
        mediaType === "movie" ? "Movie" : "Tv show"
      } deleted from watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to delete ${
        mediaType === "movie" ? "Movie" : "Tv show"
      } from watchlist-2`,
    };
  }
};
