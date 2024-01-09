"use client";
import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { fetchWatchlist } from "@/lib/fetchWatchlist";

interface Props {
  watchlist: Watchlist[];
}

export const TmdbContext = createContext<any>([]);

const TmdbProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [refetch, setRefetch] = useState<boolean>(false);

  // const memoizeWatchlist = useMemo(
  //   () => async () => {
  //     if (session.data?.user) {
  //       const res = await fetchWatchlist();

  //       if (res) {
  //         setWatchlist(res);
  //         return { msg: "success" };
  //       }
  //     }
  //   },
  //   [session.data?.user]
  // );

  // useEffect(() => {
  //   memoizeWatchlist();
  // }, [memoizeWatchlist]);

  const getWatchlist = async () => {
    const res = await fetchWatchlist();

    if (res) {
      setWatchlist(res);
      return { msg: "success" };
    }
  };

  useEffect(() => {
    session.data?.user && getWatchlist();
  }, [session.data?.user, refetch]);

  return (
    <TmdbContext.Provider
      value={{ watchlist, refetch, setRefetch, getWatchlist }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbProvider;
