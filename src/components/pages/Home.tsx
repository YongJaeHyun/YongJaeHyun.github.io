import { ISourceOptions } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useMemo } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface IHome {
  moveToNextSlide: () => void;
}

const Home = ({ moveToNextSlide }: IHome) => {
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
          opacity: 0.6,
          width: 1,
        },
        move: {
          enable: true,
          random: true,
          speed: 7,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div className="h-screen relative">
      <Particles id="tsparticles" options={options} className="w-full h-full" />
      <div className="flex flex-col justify-between items-center absolute bottom-10 w-80 h-24 left-[calc(50%-10rem)] text-white rounded-lg">
        <p className="text-lg">아래로 스크롤 하세요!</p>
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-bounce cursor-pointer"
          onClick={moveToNextSlide}
        >
          <MdKeyboardDoubleArrowDown className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
