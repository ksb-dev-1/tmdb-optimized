// lib
import { fetchTrending } from "@/lib/fetchTrending";

// components
import TrendingCard from "./TrendingCard/TrendingCard";

export default async function Trending() {
  const trending = await fetchTrending("day");

  return (
    <div className="max-w-[1100px] mx-auto px-4 xl:px-0">
      <div className="mt-8 sm:mt-12 flex items-center mb-2 sm:mb-4">
        <p className="text-lg sm:text-xl font-bold">Trending</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] items-stretch gap-[2rem_1rem] lg:gap-[4rem_2rem]">
        {trending.results.map((data: TrendingCard) => (
          <TrendingCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
