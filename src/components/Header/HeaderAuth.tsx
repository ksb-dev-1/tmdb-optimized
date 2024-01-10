"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";
import * as actions from "@/actions";
import Image from "next/image";

export default function HeaderAuth() {
  const session = useSession();
  const profileModalRef = useRef<HTMLDivElement>(null);

  let authContent: React.ReactNode;

  const showProfileModal = () => {
    profileModalRef.current!.style.transform = "scale(1)";
  };

  const hideProfileModal = () => {
    profileModalRef.current!.style.transform = "scale(0)";
  };

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <div className="flex items-center">
        <Link
          href="/pages/watchlist"
          aria-label="Watchlist"
          className="font-medium mr-8"
        >
          Watchlist
        </Link>
        <div
          className="relative font-medium mr-8 rounded cursor-pointer"
          onMouseOver={showProfileModal}
          onMouseLeave={hideProfileModal}
        >
          <Image
            src={session.data.user.image || ""}
            blurDataURL={session.data.user.image || ""}
            alt="profile"
            height={30}
            width={30}
            className="rounded-[50%] py-[0.5rem]"
          />
          <div
            ref={profileModalRef}
            className="scale-0 transition absolute w-max right-0 bg-white text-black rounded px-4 py-2 shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          >
            <form action={actions.signOut} onClick={hideProfileModal}>
              <button type="submit" className="font-[500]">
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    authContent = (
      <Link href="/pages/login" aria-label="Login" className="font-medium mr-8">
        Login
      </Link>
    );
  }

  return authContent;
}
