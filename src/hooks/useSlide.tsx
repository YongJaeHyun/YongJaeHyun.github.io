import { useCallback, useEffect, useRef, useState } from "react";
import projects from "../projects";

const useSlide = () => {
  const slideTimer = useRef<NodeJS.Timeout>();
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const moveToPrevSlide = useCallback(() => {
    if (slideIdx === 0) return;

    const targetHeight = window.innerHeight * (slideIdx - 1);
    setSlideIdx((prev) => prev - 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToNextSlide = useCallback(() => {
    if (slideIdx === 4 + projects.length) return;

    setSlideIdx((prev) => prev + 1);
    const targetHeight = window.innerHeight * (slideIdx + 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToOtherSlide = (amount: number) => {
    const targetHeight = window.innerHeight * amount;
    setSlideIdx(amount);
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

  return {
    slideIdx,
    moveToPrevSlide,
    moveToNextSlide,
    moveToOtherSlide,
  };
};

export default useSlide;
