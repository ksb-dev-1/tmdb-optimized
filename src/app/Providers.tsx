"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import TmdbProvider from "@/context/context";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <TmdbProvider>{children}</TmdbProvider>
    </SessionProvider>
  );
}
