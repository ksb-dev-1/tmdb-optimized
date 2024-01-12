"use client";

import { useState, useContext } from "react";
import { TmdbContext } from "@/context/context";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories";

const WatchlistCardTvSkeleton = () => {
  const { tvWatchlist } = useContext(TmdbContext);
  const [length] = useState(tvWatchlist);

  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col md:flex-row items-start">
        <WatchlistCategories />

        <div className="max-w-[calc(1100px-257px)] w-[100%] md:ml-8">
          {length.map((item: any, index: number) => (
            <div
              key={index}
              className="skeleton flex flex-col w-[100%] mb-4 pb-8"
            >
              <div className="relative flex">
                <div className="relative overflow-hidden h-[120px] w-[75px] rounded"></div>

                <div className="ml-4 flex flex-col">
                  <p className="font-bold"></p>
                  <p className="font-semibold text-[#555] text-[0.85rem] mb-2"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchlistCardTvSkeleton;
