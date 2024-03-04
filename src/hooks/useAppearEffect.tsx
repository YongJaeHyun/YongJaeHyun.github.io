import { RefObject, useEffect, useRef } from "react";

const useAppearEffect = (ref: RefObject<HTMLElement>) => {
  const isIntersecting = useRef(false);

  useEffect(() => {
    const target = ref.current!;
    target.classList.add("opacity-0");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          target.classList.add("animate-appear");
          isIntersecting.current = true;
        } else {
          if (target.classList.contains("animate-appear")) {
            target.classList.remove("animate-appear");
            isIntersecting.current = false;
          }
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

  return { isIntersecting: isIntersecting.current };
};

export default useAppearEffect;
