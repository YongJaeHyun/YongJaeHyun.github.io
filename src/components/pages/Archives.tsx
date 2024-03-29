import { SiGithub, SiTistory } from "react-icons/si";
import Slide from "../Slide";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import { useRef } from "react";
import useAppearEffect from "../../hooks/useAppearEffect";

const Archives = () => {
  const archiveCardRef = useRef<HTMLDivElement>(null);
  useAppearEffect(archiveCardRef);

  return (
    <Slide className="bg-purple-300 pt-16 md:pt-24">
      <Wrapper>
        <SectionTitle className="mb-20 lg:mb-36"># My Archives</SectionTitle>
        <div ref={archiveCardRef} className="flex flex-col lg:flex-row h-80 gap-10 lg:gap-5">
          <a
            href="https://github.com/YongJaeHyun"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <div className="w-full h-52 lg:h-full bg-white border-t-[1rem] border-black rounded-lg px-6 py-3 shadow-lg relative">
              <h4 className="text-2xl lg:text-3xl font-semibold">Github</h4>
              <p className="text-blue-500">https://github.com/YongJaeHyun</p>
              <p className="mt-5 break-keep">
                <b>지금까지 해온 프로젝트들을 관리하고 있는 저장소입니다.</b>
              </p>
              <SiGithub className="absolute right-3 bottom-3 opacity-10 text-[10rem] md:text-[15rem]" />
            </div>
          </a>
          <a
            href="https://lazyong.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full"
          >
            <div className="w-full h-52 lg:h-full bg-white border-t-[1rem] border-black rounded-lg px-6 py-3 shadow-lg relative">
              <h4 className="text-2xl lg:text-3xl font-semibold">Tech Blog</h4>
              <p className="text-blue-500">https://lazyong.tistory.com/</p>
              <p className="mt-5 break-keep">
                <b>제가 공부하고 배운 것들을 하나하나 정리해 공유하는 지식 저장소입니다.</b>
              </p>
              <SiTistory className="absolute right-3 bottom-3 opacity-10 text-[10rem] md:text-[15rem]" />
            </div>
          </a>
        </div>
      </Wrapper>
    </Slide>
  );
};

export default Archives;
