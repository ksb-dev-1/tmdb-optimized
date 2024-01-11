"use client";
import style from "./skeletons.module.css";
import { ImImage } from "react-icons/im";

import { useState, useContext } from "react";
import { TmdbContext } from "@/context/context";
import WatchlistPath from "@/components/Watchlist/WatchlistPath/WatchlistPath";
import WatchlistCategories from "@/components/Watchlist/WatchlistCategories/WatchlistCategories";

const WatchlistCardSkeleton = () => {
  const { watchlist } = useContext(TmdbContext);
  const [length] = useState(watchlist);

  return (
    <div className="flex flex-col px-4">
      <WatchlistPath />

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

                {/* <Rating id={cardId} mediaType={mediaType} /> */}

                <div className="ml-4 flex flex-col">
                  <p className="font-bold"></p>
                  <p className="font-semibold text-[#555] text-[0.85rem] mb-2"></p>
                  {/* <DeleteBtn id={cardId} mediaType={mediaType} /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <>
    //   {length.map((item: any, index: number) => (
    //     <div
    //       key={index}
    //       className="skeleton max-w-[calc(1100px-257px)] w-[100%] ml-8"
    //     >
    //       <div className="flex flex-col w-[100%] mb-4 border-b-[1px] border-gray-400 pb-8">
    //         <div className="relative flex">
    //           <div className="relative overflow-hidden h-[120px] w-[75px] rounded"></div>

    //           {/* <Rating id={cardId} mediaType={mediaType} /> */}

    //           <div className="ml-4 flex flex-col">
    //             <p className="font-bold"></p>
    //             <p className="font-semibold text-[#555] text-[0.85rem] mb-2"></p>
    //             {/* <DeleteBtn id={cardId} mediaType={mediaType} /> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </>
  );
};

export default WatchlistCardSkeleton;
