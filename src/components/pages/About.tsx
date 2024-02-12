import { useCallback, useEffect, useRef } from "react";
import MainSection from "../MainSection";
import Wrapper from "../Wrapper";
import { MdCake, MdEmail, MdHouse, MdSchool } from "react-icons/md";
import { SiGithub, SiTistory } from "react-icons/si";
import SectionTitle from "../SectionTitle";

const About = () => {
  const CONSTRAIN = 2000;
  const aboutSectionRef = useRef<HTMLTableSectionElement>(null);
  const aboutCardRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

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
        <SectionTitle># About me</SectionTitle>
        <div
          ref={aboutCardRef}
          className="flex justify-center items-center h-[30rem] bg-white rounded-2xl p-5 shadow-lg"
        >
          <div className="w-80 m-10">
            <div className="overflow-hidden w-80 h-80 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/96125546?s…00&u=40be63bde5de958dc78b000f88c5c9d953acd08a&v=4"
                alt="프로필 이미지"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between m-10">
            <p className="text-3xl font-bold mb-5">
              안녕하세요! 호기심 많은 FE개발자🌱, 현용재입니다.
            </p>
            <div className="text-2xl font-semibold flex items-center leading-10">
              <MdCake className="mr-8" />
              <p>1999.11.20</p>
            </div>
            <div className="text-2xl font-semibold flex items-center leading-10">
              <MdHouse className="mr-8" />
              <p>경기도 화성시</p>
            </div>
            <div className="text-2xl font-semibold flex items-center leading-10">
              <MdEmail className="mr-8" />
              <p>dltjrrbs2020@gmail.com</p>
            </div>
            <div className="text-2xl font-semibold flex items-center leading-10">
              <MdSchool className="mr-8" />
              <p>금오공과대학교 기계설계공학과</p>
            </div>
            <div className="text-2xl font-semibold flex items-center mt-10">
              <a href="https://github.com/YongJaeHyun" target="_blank">
                <SiGithub className="mr-8" size={30} />
              </a>
              <a href="https://lazyong.tistory.com" target="_blank">
                <SiTistory />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default About;
