export default function Card({ data }: { data: Watchlist }) {
  return (
    <div className="bg-slate-100 flex flex-col w-[100%] mb-4 rounded p-4">
      {data.title}
    </div>
  );
}
