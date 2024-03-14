import { RefObject, useCallback, useEffect, useRef } from "react";
import { MdEmail, MdHouse, MdSchool } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { SiGithub, SiTistory } from "react-icons/si";
import useAppearEffect from "../../hooks/useAppearEffect";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

interface IAbout3DCard {
  constrain?: number;
  maxAreaRef: RefObject<HTMLTableSectionElement>;
}

const About3DCard = ({ constrain = 1800, maxAreaRef }: IAbout3DCard) => {
  const { isMobile } = useCheckIsMobile();
  const animationFrameId = useRef<number | null>(null);

  const innerAboutCardRef = useRef<HTMLDivElement>(null);
  const outerAboutCardRef = useRef<HTMLDivElement>(null);
  useAppearEffect(outerAboutCardRef);

  const calcTransforms = useCallback(
    (x: number, y: number, el: HTMLDivElement) => {
      const box = el.getBoundingClientRect();
      const calcX = -(y - box.y - box.height / 2) / constrain;
      const calcY = (x - box.x - box.width / 2) / constrain;

      return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    },
    [constrain]
  );

  const rotateCard = useCallback(
    (e: MouseEvent) => {
      const [x, y] = [e.clientX, e.clientY];

      if (animationFrameId.current === null) {
        animationFrameId.current = window.requestAnimationFrame(() => {
          innerAboutCardRef.current!.style.transform = calcTransforms(
            x,
            y,
            innerAboutCardRef.current!
          );
          animationFrameId.current = null;
        });
      }
    },
    [calcTransforms]
  );

  useEffect(() => {
    const maxArea = maxAreaRef.current!;

    maxArea.addEventListener("mousemove", rotateCard);
    return () => {
      maxArea.removeEventListener("mousemove", rotateCard);
    };
  }, [rotateCard, maxAreaRef]);

  return (
    <div ref={outerAboutCardRef}>
      <div
        ref={innerAboutCardRef}
        className="flex items-center w-full md:w-[55rem] h-full md:min-h-[28rem] bg-white rounded-2xl py-8 md:px-10 md:pt-6 mx-auto shadow-aboutCard relative"
      >
        <div className="flex flex-col md:flex-row justify-evenly w-full h-full gap-8 md:gap-4">
          <div className="flex flex-col items-center gap-8 md:gap-4">
            <div className="flex flex-col items-center md:items-start text-xl md:text-2xl font-bold md:px-10">
              <p className="mb-1">
                처음뵙겠습니다 <span className="animate-hello inline-block">👋</span>
              </p>
              <p className="mb-0 laptop:mb-5">FE 개발자 현용재입니다!</p>
            </div>
            <div className="overflow-hidden w-40 h-40 md:w-56 md:h-56 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/96125546?s…00&u=40be63bde5de958dc78b000f88c5c9d953acd08a&v=4"
                alt="프로필 이미지"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-0 md:gap-2 px-10 text-md md:text-2xl font-semibold">
            <div className="flex items-center leading-10">
              <MdHouse size={isMobile ? 20 : 30} className="mr-8" />
              <p>경기도 화성시</p>
            </div>
            <div className="flex items-center leading-10">
              <PiCertificateFill size={isMobile ? 20 : 30} className="mr-8" />
              <p>정보처리기사</p>
            </div>
            <div className="flex items-center leading-10">
              <MdSchool size={isMobile ? 20 : 30} className="mr-8" />
              <p>금오공과대학교 기계설계공학과</p>
            </div>
            <div className="flex items-center leading-10">
              <MdEmail size={isMobile ? 20 : 30} className="mr-8" />
              <p>dltjrrbs2020@gmail.com</p>
            </div>
            <div className="text-2xl font-semibold flex items-center mt-10">
              <a
                href="https://github.com/YongJaeHyun"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-8"
              >
                <SiGithub size={isMobile ? 25 : 35} />
              </a>
              <a href="https://lazyong.tistory.com" target="_blank" rel="noopener noreferrer">
                <SiTistory size={isMobile ? 20 : 30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3DCard;
