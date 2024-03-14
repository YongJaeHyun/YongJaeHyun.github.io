import { createContext, ReactNode, useRef, useCallback, useState, useEffect } from "react";
import projects from "./projects";

interface SlidesConfig {
  slideIdx: number;
  moveToPrevSlide: () => void;
  moveToNextSlide: () => void;
  moveToOtherSlide: (targetIdx: number) => void;
}

export const SlidesContext = createContext<SlidesConfig>({
  slideIdx: 0,
  moveToPrevSlide: () => {},
  moveToNextSlide: () => {},
  moveToOtherSlide: () => {},
});

const SlidesProvider = ({ children }: { children: ReactNode }) => {
  const slideTimer = useRef<NodeJS.Timeout>();
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const moveToPrevSlide = useCallback(() => {
    if (slideIdx === 0) return;
    const targetHeight = window.innerHeight * (slideIdx - 1);

    setSlideIdx((prev) => prev - 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToNextSlide = useCallback(() => {
    if (slideIdx === 3 + projects.length) return;
    const targetHeight = window.innerHeight * (slideIdx + 1);

    setSlideIdx((prev) => prev + 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToOtherSlide = (targetIdx: number) => {
    const targetHeight = window.innerHeight * targetIdx;

    setSlideIdx(targetIdx);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  };

  const moveToOtherSlideByWheelEvent = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();

      clearTimeout(slideTimer.current);
      if (e.deltaY > 0) {
        slideTimer.current = setTimeout(() => {
          moveToNextSlide();
        }, 300);
      } else {
        slideTimer.current = setTimeout(() => {
          moveToPrevSlide();
        }, 300);
      }
    },
    [moveToNextSlide, moveToPrevSlide]
  );

  useEffect(() => {
    window?.addEventListener("wheel", moveToOtherSlideByWheelEvent, { passive: false });
    return () => {
      window?.removeEventListener("wheel", moveToOtherSlideByWheelEvent);
    };
  }, [moveToOtherSlideByWheelEvent]);

  const value = {
    slideIdx,
    moveToNextSlide,
    moveToPrevSlide,
    moveToOtherSlide,
  };

  return <SlidesContext.Provider value={value}>{children}</SlidesContext.Provider>;
};

export default SlidesProvider;
