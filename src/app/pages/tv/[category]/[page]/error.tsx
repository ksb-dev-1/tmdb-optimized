"use client"; // Error components must be Client components

import ErrorComponent from "@/ui/ErrorComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-(188px+64px))] md:h-[calc(100vh-(124px+64px))] px-4">
      <ErrorComponent error={error} reset={reset} />
    </div>
  );
}
