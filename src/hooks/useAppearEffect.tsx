import { RefObject, useEffect } from "react";

const useAppearEffect = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const target = ref.current!;
    target.classList.add("opacity-0");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          target.classList.add("animate-appear");
        } else {
          target.classList.contains("animate-appear") &&
            target.classList.remove("animate-appear");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(target);
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [ref]);
};

export default useAppearEffect;
