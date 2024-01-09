"use client";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function LoginButtons() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      redirect("/");
    }
  }, [session]);

  return (
    <div className="text-white mt-[2rem] flex flex-col">
      <form action={actions.githubSignIn}>
        <button
          type="submit"
          className="relative font-[500] flex items-center justify-center w-[280px] sm:w-[300px] bg-black rounded mb-[0.5rem] hover:bg-[#333] transition py-2 pl-2"
        >
          <span className="absolute left-[3.5px] text-black bg-white p-1 text-3xl rounded mr-[1rem]">
            <BsGithub />
          </span>
          <span className="text-lg">Login with GitHub</span>
        </button>
      </form>
      <form action={actions.googleSignIn}>
        <button
          type="submit"
          className="relative font-[500] flex items-center justify-center w-[280px] sm:w-[300px] bg-[#4285F4] p-1 pr-[1rem] rounded hover:bg-[#5c9bff] transition py-2 pl-2"
        >
          <span className="absolute left-[3.5px] bg-white p-1 text-3xl rounded mr-[1rem]">
            <FcGoogle />
          </span>
          <span className="text-lg">Login with Google</span>
        </button>
      </form>
    </div>
  );
}
