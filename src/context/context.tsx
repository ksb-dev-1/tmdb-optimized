"use client";
import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import { fetchWatchlist } from "@/lib/fetchWatchlist";
import { fetchMoviesWatchlist } from "@/lib/fetchMoviesWatchlist";
import { fetchTvWatchlist } from "@/lib/fetchTvWatchlist";

interface Props {
  watchlist: Watchlist[];
}

export const TmdbContext = createContext<any>([]);

const TmdbProvider = ({ children }: { children: React.ReactNode }) => {
  const session = useSession();
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);
  const [refetch, setRefetch] = useState<boolean>(false);

  const [moviesWatchlist, setMoviesWatchlist] = useState<Watchlist[]>([]);
  const [tvWatchlist, setTvWatchlist] = useState<Watchlist[]>([]);

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
  }, [session.data?.user]);

  const getMoviesWatchlist = async () => {
    const res = await fetchMoviesWatchlist();

    if (res) {
      setMoviesWatchlist(res);
    }
  };

  const getTvWatchlist = async () => {
    const res = await fetchTvWatchlist();

    if (res) {
      setTvWatchlist(res);
    }
  };

  useEffect(() => {
    if (session.data?.user) {
      getMoviesWatchlist();
      getTvWatchlist();
    }
  }, [session.data?.user]);

  return (
    <TmdbContext.Provider
      value={{ watchlist, getWatchlist, moviesWatchlist, tvWatchlist }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export default TmdbProvider;
