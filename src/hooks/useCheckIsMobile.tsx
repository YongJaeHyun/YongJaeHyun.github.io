import { useEffect, useRef, useState } from "react";

const useCheckIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const isWaiting = useRef(false);

  const handleResize = () => {
    if (isWaiting.current) return;
    isWaiting.current = true;
    setTimeout(() => {
      const checkIsMobile = window.innerWidth <= 768;
      setIsMobile(checkIsMobile);
      isWaiting.current = false;
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};

export default useCheckIsMobile;
