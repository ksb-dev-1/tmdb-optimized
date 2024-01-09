import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import moment from "moment";
import DeleteBtn from "./DeleteBt";
import getBase64 from "@/lib/getLocalBase64";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default async function TrendingCard({ data }: { data: Watchlist }) {
  const { cardId, mediaType, title, posterPath, releaseDate, voteAverage } =
    data;

  const myBlurDataUrl = await getBase64(
    posterPath === null ? url : IMG_PATH + posterPath
  );

  return (
    <div className="relative h-[325px] md:h-[360px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
      <Link
        href="#"
        className="group block h-full no-underline rounded-[var(--border-radius-1)]"
      >
        <div className="relative overflow-hidden h-[225px] md:h-[250px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)]">
          <Image
            src={posterPath === null ? url : IMG_PATH + posterPath}
            blurDataURL={myBlurDataUrl}
            placeholder="blur"
            alt={title!}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-125 transition duration-300 object-cover"
          />
        </div>

        <div className="relative flex flex-col pt-6 pb-2 md:pb-4 px-2 md:px-4">
          <Rating vote_average={voteAverage} />

          <span className="font-bold text-[0.85rem] md:text-[1rem] mb-1 rounded min-h-[20px]">
            {title
              ? title.length < 25
                ? title
                : title.substring(0, 25) + " ..."
              : ""}
          </span>

          <span className="text-[0.75rem] md:text-[0.85rem] text-[#555] font-medium rounded min-h-[20px]">
            {releaseDate && moment(releaseDate).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>
      <DeleteBtn id={cardId} mediaType={mediaType} />
    </div>
  );
}
