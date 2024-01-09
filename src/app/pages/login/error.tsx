"use client"; // Error components must be Client components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <div>Not Found</div>;
}
