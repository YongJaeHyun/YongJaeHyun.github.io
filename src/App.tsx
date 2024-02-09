import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

function App() {
  const slideTimer = useRef<NodeJS.Timeout>();
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const [init, setInit] = useState(false);

  const initParticles = async () => {
    await initParticlesEngine(async (engine) => await loadAll(engine));
    setInit(true);
  };

  useEffect(() => {
    initParticles();
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,

          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const moveToPrevSlide = useCallback(() => {
    if (slideIdx === 0) return;

    const targetHeight = window.innerHeight * (slideIdx - 1);
    setSlideIdx((prev) => prev - 1);
    scrollTo({ top: targetHeight, behavior: "smooth" });
  }, [slideIdx]);

  const moveToNextSlide = useCallback(() => {
    if (slideIdx === 5) return;

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
    window?.addEventListener("wheel", slideToOtherSection, { passive: false });
    return () => {
      window?.removeEventListener("wheel", slideToOtherSection);
    };
  }, [slideToOtherSection]);

  return (
    <div>
      <Header slideIdx={slideIdx} moveToOtherSlide={moveToOtherSlide} />
      {init && <Particles id="tsparticles" options={options} className="h-screen" />}
      <MainSection className="bg-purple-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># About me</h3>
      </MainSection>
      <MainSection className="bg-red-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Skills</h3>
      </MainSection>
      <MainSection className="bg-orange-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Projects</h3>
      </MainSection>
      <MainSection className="bg-green-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># Careers</h3>
      </MainSection>
      <MainSection className="bg-blue-300 pt-24">
        <h3 className="text-3xl font-semibold px-60"># My Archives</h3>
      </MainSection>
    </div>
  );
}

export default App;
