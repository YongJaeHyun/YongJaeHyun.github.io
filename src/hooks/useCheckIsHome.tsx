import { useEffect, useRef, useState } from "react";

const useCheckIsHome = () => {
  const [isHome, setIsHome] = useState(window.scrollY < window.innerHeight);
  const timer = useRef<NodeJS.Timeout>();

  const handleScroll = () => {
    if (timer.current) return;

    timer.current = setTimeout(() => {
      const checkIsHome = window.scrollY < window.innerHeight / 2;
      setIsHome(checkIsHome);
      console.log(1);
      timer.current = undefined;
    }, 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isHome };
};

export default useCheckIsHome;
