import style from "./skeletons.module.css";
import { ImImage } from "react-icons/im";

export function WelcomeSkeleton() {
  return (
    <div className="skeleton relative h-[188px] sm:h-[250px] md:h-[400px]"></div>
  );
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export function MovieOrTvCardSkeleton() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 xl:px-0">
      <div className="mt-8 sm:mt-12 flex items-center mb-2 sm:mb-4">
        <p className="text-lg sm:text-xl font-bold">Trending</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] items-stretch gap-[2rem_1rem] lg:gap-[4rem_2rem]">
        {arr.map((item) => (
          <div
            key={item}
            className="skeleton relative h-[325px] md:h-[360px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]"
          >
            <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
              <div className="relative flex items-center justify-center h-[225px] md:h-[250px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
                <div className={style.color + " text-white"}>
                  <ImImage />
                </div>
              </div>

              <div className="relative flex flex-col pt-6 pb-2 md:pb-4 px-2 md:px-4">
                <div
                  className={
                    style.bgColor +
                    " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                  }
                >
                  <span
                    className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                  >
                    NR
                  </span>
                </div>

                <span
                  className={
                    style.bgColor +
                    " font-semibold md:font-bold text-[0.85rem] md:text-[1rem] mb-1 rounded min-h-[20px]"
                  }
                ></span>

                <span
                  className={
                    style.bgColor +
                    " text-[0.75rem] md:text-[0.85rem] text-[#555] md:font-medium rounded min-h-[20px]"
                  }
                ></span>
              </div>
            </div>

            <div
              className={
                style.bgColor +
                " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
              }
            >
              <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
                ...
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
