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
        setTimeout(() => setLoading(false), 1000);
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
      className="relative h-10 w-[110px] bg-red-500 cursor-pointer rounded-[3px] hover:bg-red-600 transition ease"
    >
      <span className="text-white">
        {loading ? (
          <div className="flex items-center justify-center">
            <span className="loader inline-block"></span>
            {/* <span>Deleting...</span> */}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <span className="text-[1.25rem]">
              <RiDeleteBin6Line />
            </span>
            <span className="inline-block ml-2 font-semibold">Delete</span>
          </div>
        )}
      </span>
    </button>
  );
}
