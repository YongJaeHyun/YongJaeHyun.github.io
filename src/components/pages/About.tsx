import { useCallback, useEffect, useRef } from "react";
import MainSection from "../MainSection";
import Wrapper from "../Wrapper";
import { MdCake, MdEmail, MdHouse, MdSchool } from "react-icons/md";
import { SiGithub, SiTistory } from "react-icons/si";
import SectionTitle from "../SectionTitle";
import useAppearEffect from "../../hooks/useAppearEffect";

const About = () => {
  const CONSTRAIN = 1800;
  const aboutSectionRef = useRef<HTMLTableSectionElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);

  const calcTransforms = (x: number, y: number, el: HTMLDivElement) => {
    const box = el.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / CONSTRAIN;
    const calcY = (x - box.x - box.width / 2) / CONSTRAIN;

    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  };

  const rotateCard = useCallback((e: MouseEvent) => {
    const [x, y] = [e.clientX, e.clientY];

    if (animationFrameId.current === null) {
      animationFrameId.current = window.requestAnimationFrame(() => {
        aboutCardRef.current!.style.transform = calcTransforms(x, y, aboutCardRef.current!);
        animationFrameId.current = null;
      });
    }
  }, []);

  useAppearEffect(aboutCardRef);
  useEffect(() => {
    if (!aboutSectionRef.current) return;
    const copiedAboutSectionRef = aboutSectionRef.current;
    copiedAboutSectionRef.addEventListener("mousemove", rotateCard);

    return () => {
      copiedAboutSectionRef.removeEventListener("mousemove", rotateCard);
    };
  }, [rotateCard]);

  return (
    <MainSection ref={aboutSectionRef} className="bg-red-300 pt-24">
      <Wrapper>
        <SectionTitle className="mb-12 lg:mb-32"># About me</SectionTitle>
        <div
          ref={aboutCardRef}
          className="flex items-center w-full md:w-[55rem] h-full md:h-[27rem] bg-white rounded-2xl py-7 md:p-10 mx-auto shadow-aboutCard"
        >
          <div className="flex flex-col w-full h-full gap-10 md:gap-14">
            <div className="text-lg md:text-3xl font-bold px-5 md:px-10 break-keep">
              처음뵙겠습니다 <p className="animate-hello inline-block">👋</p>, 저는 이런
              사람이에요!
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
              <div className="px-2 md:px-10">
                <div className="overflow-hidden w-32 h-32 md:w-56 md:h-56 rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/96125546?s…00&u=40be63bde5de958dc78b000f88c5c9d953acd08a&v=4"
                    alt="프로필 이미지"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between px-10 text-md md:text-2xl font-semibold">
                <div className="flex items-center leading-10">
                  <MdCake className="mr-8" />
                  <p>1999.11.20</p>
                </div>
                <div className="flex items-center leading-10">
                  <MdHouse className="mr-8" />
                  <p>경기도 화성시</p>
                </div>
                <div className="flex items-center leading-10">
                  <MdEmail className="mr-8" />
                  <p>dltjrrbs2020@gmail.com</p>
                </div>
                <div className="flex items-center leading-10">
                  <MdSchool className="mr-8" />
                  <p>금오공과대학교 기계설계공학과</p>
                </div>
                <div className="text-2xl font-semibold flex items-center mt-5 md:mt-8">
                  <a
                    href="https://github.com/YongJaeHyun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="mr-8" size={30} />
                  </a>
                  <a
                    href="https://lazyong.tistory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiTistory />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default About;
