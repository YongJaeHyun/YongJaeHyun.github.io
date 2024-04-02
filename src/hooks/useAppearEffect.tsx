import { RefObject, useEffect, useRef } from "react";

const useAppearEffect = (ref: RefObject<HTMLElement>, animateClass: string) => {
  const isIntersecting = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;
    target.classList.add("opacity-0");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          target.classList.add(animateClass);
          isIntersecting.current = true;
        } else {
          if (target.classList.contains(animateClass)) {
            target.classList.remove(animateClass);
            isIntersecting.current = false;
          }
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(target);
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [ref, animateClass]);

  return { isIntersecting: isIntersecting.current };
};

export default useAppearEffect;
