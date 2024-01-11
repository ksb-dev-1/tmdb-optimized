import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";

// lib
import { fetchTrending } from "@/lib/fetchTrending";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export default async function WatchlistBackdrop({ image }: { image: string }) {
  const myBlurDataUrl = await getBase64(
    image === null ? url : IMG_PATH + image
  );

  return (
    <div className="relative h-[125px] sm:h-[200px] md:h-[250px]">
      <div className="relative h-[125px] sm:h-[200px] md:h-[250px]">
        <Image
          src={image === null ? url : IMG_PATH + image}
          blurDataURL={myBlurDataUrl}
          placeholder="blur"
          alt="backdrop"
          fill
          priority={true}
          className="object-cover"
        />
      </div>

      <div className="bg-gradient-to-t from-[var(--g2)] to-[var(--g1)] absolute top-0 left-0 h-[125px] sm:h-[200px] md:h-[250px] w-[100%] flex flex-col justify-end">
        <p className="font-semibold text-xl md:text-2xl m-4 lg:m-8 text-white">
          Watchlist
        </p>
      </div>
    </div>
  );
}
