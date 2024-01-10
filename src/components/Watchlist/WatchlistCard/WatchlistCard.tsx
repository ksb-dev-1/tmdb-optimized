import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";
import moment from "moment";
import Rating from "./Rating";
import DeleteBtn from "./DeleteBtn";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default async function WatchistCard({ data }: { data: Watchlist }) {
  const { cardId, mediaType, title, posterPath, releaseDate, voteAverage } =
    data;
  const myBlurDataUrl = await getBase64(
    posterPath === null ? url : IMG_PATH + posterPath
  );
  return (
    <div className="flex flex-col w-[100%] mb-4 border-b-[1px] border-gray-400 pb-8">
      <div className="relative flex">
        <div className="relative overflow-hidden h-[120px] w-[75px] rounded">
          <Image
            src={posterPath === null ? url : IMG_PATH + posterPath}
            blurDataURL={myBlurDataUrl}
            placeholder="blur"
            alt={title!}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-125 transition duration-300 object-cover rounded"
          />
        </div>

        <Rating id={cardId} mediaType={mediaType} />

        <div className="ml-4 flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="font-semibold text-[#555] text-[0.85rem] mb-2">
            {releaseDate && moment(releaseDate).format("Do MMM, YYYY")}
          </p>
          <DeleteBtn id={cardId} mediaType={mediaType} />
        </div>
      </div>
    </div>
  );
}
