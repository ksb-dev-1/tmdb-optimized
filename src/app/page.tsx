import { Suspense } from "react";

// components
import Welcome from "../components/Welcome/Welcome";
import Trending from "../components/Trending/Trending";
import { WelcomeSkeleton, MovieOrTvCardSkeleton } from "../ui/skeletons";

export default function Home() {
  return (
    <div className="max-w-[1280px] w-[100%] mx-auto">
      <Suspense fallback={<WelcomeSkeleton />}>
        <Welcome />
      </Suspense>
      <Suspense fallback={<MovieOrTvCardSkeleton />}>
        <Trending />
      </Suspense>
    </div>
  );
}
