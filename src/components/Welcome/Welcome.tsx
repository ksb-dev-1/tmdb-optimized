import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";

// lib
import { fetchTrending } from "@/lib/fetchTrending";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export default async function Welcome() {
  const trending = await fetchTrending("week");
  //Math.floor(Math.random() * (19 - 0 + 1)) + 0
  const { name, title, backdrop_path } = trending.results[0];

  const myBlurDataUrl = await getBase64(
    backdrop_path === null ? url : IMG_PATH + backdrop_path
  );

  return (
    <div className="relative h-[188px] sm:h-[250px] md:h-[400px]">
      <div className="relative h-[188px] sm:h-[250px] md:h-[400px]">
        <Image
          src={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          blurDataURL={myBlurDataUrl}
          placeholder="blur"
          alt={name ? name! : title!}
          fill
          priority={true}
          className="object-cover"
        />
      </div>

      <div className="bg-gradient-to-t from-[var(--g2)] to-[var(--g1)] absolute top-0 left-0 h-[188px] sm:h-[250px] md:h-[400px] w-[100%] px-4 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="text-white">
          <p className="font-bold text-2xl sm:text-4xl md:text-5xl mb-[0.5rem]">
            Welcome.
          </p>
          <p className="font-semibold text-lg sm:text-2xl md:text-3xl">
            Millions of movies and TV shows to discover. Explore now.
          </p>
        </div>

        <div className="relative mt-4 md:mt-8 h-[35px] md:h-[45px] rounded-[50px] bg-white pl-[1rem] cursor-pointer">
          <p className="absolute h-[35px] md:h-[45px] top-[12.5%] md:top-[21.5%] left-[1.25rem] bg-trasparent">
            <span className="text-[#555] text-[0.85rem] md:text-[1rem]">
              Search for a movie, tv show...
            </span>
          </p>
          <p className="absolute h-[35px] md:h-[45px] w-[75px] md:w-[100px] top-0 right-0 bg-gradient-to-r from-[var(--c1)] to-[var(--c2)] text-white rounded-[50px]">
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 font-[500]">
              Search
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
