"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function addWatchlist(
  id: number,
  mediaType: string,
  posterPath: string,
  backdropPath: string,
  title: string,
  releaseDate: string,
  voteAverage: number
) {
  const session = await auth();
  let res;

  if (mediaType === "movie") {
    res = await addToMovieDocument(
      id,
      posterPath,
      backdropPath,
      title,
      releaseDate,
      voteAverage,
      session
    );

    if (res.success)
      res = await addToWatchlistDocument(
        id,
        mediaType,
        posterPath,
        backdropPath,
        title,
        releaseDate,
        voteAverage,
        session
      );
  }

  if (mediaType === "tv") {
    res = await addToTvDocument(
      id,
      posterPath,
      backdropPath,
      title,
      releaseDate,
      voteAverage,
      session
    );

    if (res.success)
      res = await addToWatchlistDocument(
        id,
        mediaType,
        posterPath,
        backdropPath,
        title,
        releaseDate,
        voteAverage,
        session
      );
  }

  revalidatePath("/");
  revalidatePath("/pages/watchlist");
  revalidatePath("/pages/watchlist/movies");
  revalidatePath("/pages/watchlist/tv");
  return res;
}

const addToMovieDocument = async (
  id: number,
  posterPath: string,
  backdropPath: string,
  title: string,
  releaseDate: string,
  voteAverage: number,
  session: any
) => {
  try {
    await db.movie.create({
      data: {
        cardId: id,
        mediaType: "movie",
        posterPath,
        backdropPath,
        title,
        releaseDate,
        voteAverage,
        userId: session!.user!.id as string,
      },
    });

    return {
      success: "Movie added to watchlist",
    };
  } catch (error) {
    return {
      error: "Failed to add movie to watchlist",
    };
  }
};

const addToTvDocument = async (
  id: number,
  posterPath: string,
  backdropPath: string,
  title: string,
  releaseDate: string,
  voteAverage: number,
  session: any
) => {
  try {
    await db.tv.create({
      data: {
        cardId: id,
        mediaType: "tv",
        posterPath,
        backdropPath,
        title,
        releaseDate,
        voteAverage,
        userId: session!.user!.id as string,
      },
    });

    return {
      success: "Tv show added to watchlist",
    };
  } catch (error) {
    return {
      error: "Failed to add tv show to watchlist",
    };
  }
};

const addToWatchlistDocument = async (
  id: number,
  mediaType: string,
  posterPath: string,
  backdropPath: string,
  title: string,
  releaseDate: string,
  voteAverage: number,
  session: any
) => {
  try {
    await db.watchlist.create({
      data: {
        cardId: id,
        mediaType,
        posterPath,
        backdropPath,
        title,
        releaseDate,
        voteAverage,
        userId: session!.user!.id as string,
      },
    });

    return {
      success: `${
        mediaType === "movie" ? "Movie" : "Tv show"
      } added to watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to add ${
        mediaType === "movie" ? "Movie" : "Tv show"
      } to watchlist`,
    };
  }
};
