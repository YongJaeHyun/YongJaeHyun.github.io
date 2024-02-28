import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Wrapper from "../Wrapper";
import MainSection from "../MainSection";
import useTypingEffect from "../../hooks/useTypingEffect";
import { useRef } from "react";

interface IHome {
  slideIdx: number;
  moveToNextSlide: () => void;
}

const INTRODUCTION = "안녕하세요!\n 호기심 많은 Front-End 개발자, 현용재입니다.";

const Home = ({ slideIdx, moveToNextSlide }: IHome) => {
  const typingRef = useRef<HTMLDivElement>(null);

  useTypingEffect(typingRef, INTRODUCTION, 120, slideIdx);
  return (
    <MainSection className="bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 pt-32 relative">
      <Wrapper>
        <div
          ref={typingRef}
          className="text-white text-4xl md:text-5xl !leading-loose after:content-['|'] after:animate-blink break-keep"
        ></div>
      </Wrapper>

      <div className="flex flex-col justify-between items-center absolute z-50 bottom-10 w-80 h-24 left-[calc(50%-10rem)] text-white rounded-lg">
        <p className="text-lg text-black">아래로 스크롤 하세요!</p>
        <div
          className="flex justify-center items-center w-12 h-12 rounded-full bg-black animate-bounce cursor-pointer"
          onClick={moveToNextSlide}
        >
          <MdKeyboardDoubleArrowDown className="text-2xl" />
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <svg
          className="relative w-full h-32 md:h-[30dvh] min-h-32 md:min-h-80 max-h-40"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            <use
              className="animate-[wave_7s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-2s]"
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              className="animate-[wave_10s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-3s]"
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              className="animate-[wave_13s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_-4s]"
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use
              className="animate-[wave_20s_cubic-bezier(0.55,0.5,0.45,0.5)_infinite_5s]"
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </MainSection>
  );
};

export default Home;
