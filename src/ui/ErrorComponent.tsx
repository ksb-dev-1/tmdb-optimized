export default function ErrorComponent({ error, reset }: ErrorMsg) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl font-semibold mb-2">{error.message}</p>
      <p className="font-semibold mb-2 text-slate-500">
        Check your internet connection.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded bg-[var(--c2)] text-white font-semibold"
      >
        Try Again
      </button>
    </div>
  );
}
