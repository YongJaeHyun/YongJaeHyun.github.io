import { RefObject, useCallback, useEffect, useRef } from "react";
import { MdEmail, MdHouse, MdSchool } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { SiGithub, SiTistory } from "react-icons/si";
import useAppearEffect from "../../hooks/useAppearEffect";

interface IAbout3DCard {
  constrain?: number;
  maxAreaRef: RefObject<HTMLElement>;
}

const About3DCard = ({ constrain = 1800, maxAreaRef }: IAbout3DCard) => {
  const aboutCardRef = useRef<HTMLDivElement>(null);
  const outerAboutCardRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

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
          aboutCardRef.current!.style.transform = calcTransforms(x, y, aboutCardRef.current!);
          animationFrameId.current = null;
        });
      }
    },
    [calcTransforms]
  );

  useAppearEffect(outerAboutCardRef);
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
        ref={aboutCardRef}
        className="flex items-center w-full md:w-[55rem] h-full md:h-[27rem] bg-white rounded-2xl py-7 md:p-10 mx-auto shadow-aboutCard"
      >
        <div className="flex flex-col w-full h-full gap-10 md:gap-14">
          <div className="text-lg md:text-3xl font-bold px-5 md:px-10 break-keep">
            처음뵙겠습니다 <p className="animate-hello inline-block">👋</p>, FE 개발자
            현용재입니다!
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
                <MdHouse className="mr-8" />
                <p>경기도 화성시</p>
              </div>
              <div className="flex items-center leading-10">
                <PiCertificateFill className="mr-8" />
                <p>정보처리기사</p>
              </div>
              <div className="flex items-center leading-10">
                <MdSchool className="mr-8" />
                <p>금오공과대학교 기계설계공학과</p>
              </div>
              <div className="flex items-center leading-10">
                <MdEmail className="mr-8" />
                <p>dltjrrbs2020@gmail.com</p>
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
    </div>
  );
};

export default About3DCard;
