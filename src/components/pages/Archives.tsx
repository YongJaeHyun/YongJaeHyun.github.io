import { SiGithub, SiTistory } from "react-icons/si";
import Slide from "../Slide";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import { useRef } from "react";
import useAppearEffect from "../../hooks/useAppearEffect";

const Archives = () => {
  const githubCardRef = useRef<HTMLAnchorElement>(null);
  const blogCardRef = useRef<HTMLAnchorElement>(null);

  useAppearEffect(githubCardRef, "animate-flipX");
  useAppearEffect(blogCardRef, "animate-flipX");
  return (
    <Slide className="bg-purple-300 pt-16 md:pt-24">
      <Wrapper>
        <SectionTitle className="mb-20 lg:mb-36"># My Archives</SectionTitle>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <a
            ref={githubCardRef}
            href="https://github.com/YongJaeHyun"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col w-full h-full animation-delay-0"
          >
            <div className="flex items-center gap-3 h-8 bg-black rounded-t-lg relative px-6 lg:px-10">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="w-full h-[14rem] lg:h-[20rem] bg-white rounded-b-lg px-6 lg:px-10 py-6 shadow-lg">
              <h4 className="text-2xl lg:text-3xl font-semibold">Github</h4>
              <p className="text-blue-500">https://github.com/YongJaeHyun</p>
              <p className="mt-5 break-keep">
                <b>지금까지 해온 프로젝트들을 관리하고 있는 저장소입니다.</b>
              </p>
              <SiGithub className="absolute right-3 bottom-3 opacity-10 text-[10rem] md:text-[15rem]" />
            </div>
          </a>
          <a
            ref={blogCardRef}
            href="https://lazyong.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col w-full h-full animation-delay-300"
          >
            <div className="flex items-center gap-3 h-8 bg-black rounded-t-lg relative px-6 lg:px-10">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
            <div className="w-full h-[14rem] lg:h-[20rem] bg-white rounded-b-lg px-6 lg:px-10 py-6 shadow-lg">
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
