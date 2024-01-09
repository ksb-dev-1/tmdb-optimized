"use client";

import { useState, useEffect, RefObject } from "react";

export const useHandleHeaderScroll = (
  headerRef: RefObject<HTMLDivElement>,
  headerInnerRef: RefObject<HTMLDivElement>
): void => {
  let [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollpos = window.scrollY;

      if (position > currentScrollpos) {
        headerRef.current!.style.transform = "translateY(0%)";
        setTimeout(() => {
          headerInnerRef.current!.style.transform = "translateY(0%)";
        }, 300);
      } else {
        headerInnerRef.current!.style.transform = "translateY(-150%)";
        headerRef.current!.style.transform = "translateY(-150%)";
      }
      setPosition(currentScrollpos);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [position, headerRef, headerInnerRef]);
};
