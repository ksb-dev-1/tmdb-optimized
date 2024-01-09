"use client";

import { Circle } from "rc-progress";

export default function Rating({ vote_average }: { vote_average: number }) {
  const getBg = (vote_average: any) => {
    return vote_average < 5
      ? "tomato"
      : vote_average >= 7.5
      ? "#0FFF50"
      : "gold";
  };

  return (
    <div
      className="absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5
    bg-[var(--c3)]"
    >
      <Circle
        percent={vote_average * 10}
        strokeWidth={6}
        strokeColor={`${getBg(vote_average.toFixed(0))}`}
      />
      <span
        className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4 ${getBg(
          vote_average.toFixed(0)
        )}`}
      >
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
}
