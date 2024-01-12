"use client";

import { Circle } from "rc-progress";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";

export default function Rating({
  id,
  mediaType,
}: {
  id: number;
  mediaType: string;
}) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const memoizeRating = useMemo(
    () => async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US`
        );
        const rating = await res.json();

        if (rating) {
          setRating(rating.vote_average);
          setLoading(false);
        }
      } catch (error: any) {
        setRating(0);
        setLoading(false);
        console.log(error.message);
      }
    },
    [id, apiKey, mediaType]
  );

  useEffect(() => {
    session?.data?.user && memoizeRating();
  }, [session?.data?.user, memoizeRating]);

  const getBg = (vote_average: any) => {
    return vote_average < 5
      ? "tomato"
      : vote_average >= 7.5
      ? "#0FFF50"
      : "gold";
  };

  return (
    <div
      className="absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white
    bg-[var(--c3)] bottom-[-1rem]  left-[3rem]"
    >
      <Circle
        percent={rating * 10}
        strokeWidth={6}
        strokeColor={`${getBg(rating.toFixed(0))}`}
      />
      <span
        className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4 ${getBg(
          rating.toFixed(0)
        )}`}
      >
        {loading ? (
          <span className="loader inline-block mt-[0.35rem]"></span>
        ) : (
          rating.toFixed(1)
        )}
      </span>
    </div>
  );
}
