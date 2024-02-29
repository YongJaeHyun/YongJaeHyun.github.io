import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Archives from "./components/pages/Archives";
import { MdConstruction } from "react-icons/md";
import MobileSideBar from "./components/MobileSideBar";
import projects from "./projects";
import Footer from "./components/Footer";

function App() {
  const slideTimer = useRef<NodeJS.Timeout>();
  const [isMobile, setIsMobile] = useState(false);
  const [slideIdx, setSlideIdx] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

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

  const slideToOtherSection = useCallback(
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
    const checkIsMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (checkIsMobile) {
      setIsMobile(true); // mobile
    }
  }, []);

  useEffect(() => {
    window?.addEventListener("wheel", slideToOtherSection, { passive: false });
    return () => {
      window?.removeEventListener("wheel", slideToOtherSection);
    };
  }, [slideToOtherSection]);

  return (
    <div className="relative">
      {!isLoading ? (
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-pink-400 rounded-full animate-bounce"></div>
        </div>
      ) : isMobile ? (
        <>
          <div className="blur-sm">
            <Header
              slideIdx={slideIdx}
              isMobile={isMobile}
              moveToOtherSlide={moveToOtherSlide}
            />
            <MobileSideBar slideIdx={slideIdx} moveToOtherSlide={moveToOtherSlide} />
            <Home slideIdx={slideIdx} moveToNextSlide={moveToNextSlide} />
            <About />
            <Skills isMobile={isMobile} />
            <Projects isMobile={isMobile} moveToOtherSlide={moveToOtherSlide} />
            <Archives isMobile={isMobile} />
            <Footer />
          </div>
          <div className="flex justify-center items-center w-screen h-dvh fixed left-0 top-0">
            <div className="flex justify-center items-center w-4/5 h-48 relative bg-white rounded-xl">
              <div className="flex flex-col justify-center items-center w-[97%] h-[95%] rounded-lg bg-white border-4 border-gray-400 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <MdConstruction size={60} className="text-gray-500" />
                <p className="text-xl text-gray-500 mt-5">모바일 개발 중입니다!</p>
                <p className="text-sm text-gray-500">
                  포트폴리오가 궁금하신가요? PC로 접속해주세요!
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header
            slideIdx={slideIdx}
            isMobile={isMobile}
            moveToOtherSlide={moveToOtherSlide}
          />
          <Home slideIdx={slideIdx} moveToNextSlide={moveToNextSlide} />
          <About />
          <Skills isMobile={isMobile} />
          <Projects isMobile={isMobile} moveToOtherSlide={moveToOtherSlide} />
          <Archives isMobile={isMobile} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
