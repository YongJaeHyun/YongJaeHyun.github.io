import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Wrapper from "../Wrapper";
import Slide from "../Slide";
import useTypingEffect from "../../hooks/useTypingEffect";
import { useContext, useRef } from "react";
import { SlidesContext } from "../../SlidesProvider";
import GuideArrow from "../Home/GuideArrow";
import Waves from "../Home/Waves";

const INTRODUCTION = "안녕하세요!\n 도전을 성과로 바꾸는 개발자, 현용재입니다.";

const Home = () => {
  const typingRef = useRef<HTMLDivElement>(null);
  const { slideIdx } = useContext(SlidesContext);

  useTypingEffect(typingRef, INTRODUCTION, 120, slideIdx);
  return (
    <Slide className="bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 pt-32 relative">
      <Wrapper>
        <div
          ref={typingRef}
          className="text-white text-4xl md:text-5xl !leading-loose after:content-['|'] after:animate-blink break-keep"
        ></div>
      </Wrapper>
      <GuideArrow />
      <Waves />
    </Slide>
  );
};

export default Home;
