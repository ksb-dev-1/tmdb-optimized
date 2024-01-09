"use client";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useContext } from "react";
import * as actions from "@/actions";
import { TmdbContext } from "@/context/context";

interface Props {
  id: number;
  mediaType: string;
}

export default function DeleteBtn({ id, mediaType }: Props) {
  const [loading, setLoading] = useState(false);

  const { getWatchlist } = useContext(TmdbContext);

  const handleDelete = async () => {
    setLoading(true);
    const res = await actions.deleteWatchlist(id, mediaType);
    if (res!.success) {
      const res = await getWatchlist();
      if (res.msg === "success") {
        setLoading(false);
      }
    } else {
      console.log(res);
    }
  };

  return (
    <button
      key={id}
      onClick={handleDelete}
      type="submit"
      className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease"
    >
      <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
        {loading ? (
          <span className="loader inline-block mt-[0.35rem]"></span>
        ) : (
          <RiDeleteBin6Line />
        )}
      </span>
    </button>
  );
}
