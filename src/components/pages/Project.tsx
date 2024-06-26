import { RefObject, useEffect, useRef, useState } from "react";
import Slide from "../Slide";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdCheck,
  MdLightbulb,
  MdOutlineShortcut,
} from "react-icons/md";
import FeatureBox from "../projects/FeatureBox";
import useAppearEffect from "../../hooks/useAppearEffect";
import { PiInfoLight } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

interface IProjectInfo {
  id: number;
  title: string;
  numOfPeople: number;
  role?: string;
  roleInfo?: string;
  imgLength: number;
  githubURL: string;
  deployURL?: string;
  content: string;
  significance: string;
  skills: string[];
  contribution?: string;
  startDate: string;
  endDate: string;
  hasVideo: boolean;
}

interface IProject {
  project: IProjectInfo;
}

const Project = ({ project }: IProject) => {
  const [imgIdx, setImgIdx] = useState(project.hasVideo ? 0 : 1);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const significanceRef = useRef<HTMLDivElement>(null);
  const projectCardRef = useRef<HTMLDivElement>(null);

  const { isIntersecting } = useAppearEffect(projectCardRef, "animate-appear");

  const viewPrevImg = () => {
    setImgIdx((prev) => prev - 1);
  };
  const viewNextImg = () => {
    setImgIdx((prev) => prev + 1);
  };

  const showMediaFullScreen = () => {
    if (!document.fullscreenElement) {
      mediaRef.current?.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // Init Project Content and Significance
  useEffect(() => {
    if (!contentRef.current) return;
    if (!significanceRef.current) return;

    contentRef.current.innerHTML = project.content;
    significanceRef.current.innerHTML = project.significance;
  }, [project.content, project.significance]);

  // Always Video Starts 0
  useEffect(() => {
    const media = mediaRef.current as HTMLVideoElement;
    if (isIntersecting && media?.tagName === "VIDEO") {
      media.currentTime = 0;
    }
  }, [isIntersecting]);

  return (
    <Slide className="bg-indigo-300 pt-40 first-of-type:pt-8 first-of-type:!min-h-[calc(100dvh-8.3rem)]">
      <div
        ref={projectCardRef}
        className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl px-8 py-7 md:px-10 md:py-14"
      >
        <div className="flex flex-col items-center w-full gap-3">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl lg:text-3xl font-bold mb-3 break-keep text-center">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-6">
              {project.numOfPeople}인 프로젝트
              {project.numOfPeople > 1 && ` (${project.roleInfo}) - ${project.role} 담당`}
            </p>
            <p className="text-gray-600 leading-6">
              <span>{project.startDate}</span> - <span>{project.endDate}</span>
            </p>
            {project.contribution && (
              <p>
                기여도 : <span className="font-semibold">{project.contribution}</span>
              </p>
            )}
          </div>
          <div className="flex justify-evenly items-center gap-3">
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center rounded-3xl p-2 border-2 border-black hover:bg-[rgba(0,0,0,0.05)]"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={project.deployURL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex justify-center items-center rounded-3xl p-2 border-2 text-white ${
                project.deployURL
                  ? "bg-blue-500 border-blue-400 hover:opacity-90"
                  : "bg-gray-400 cursor-pointer"
              }`}
            >
              <MdOutlineShortcut size={20} />
            </a>
          </div>
          <div className="flex justify-center w-full mt-5">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center max-h-80 md:h-64 rounded-xl border-2 shadow-xl overflow-hidden">
                {imgIdx === 0 ? (
                  <video
                    ref={mediaRef as RefObject<HTMLVideoElement>}
                    src={`/images/${project.id}/0.mp4`}
                    className="h-full cursor-pointer"
                    onClick={showMediaFullScreen}
                    autoPlay
                    muted
                  />
                ) : (
                  <img
                    ref={mediaRef as RefObject<HTMLImageElement>}
                    src={`/images/${project.id}/${imgIdx}.png`}
                    alt="프로젝트 이미지"
                    className="h-full cursor-pointer"
                    onClick={showMediaFullScreen}
                  />
                )}
              </div>
              <div className="flex justify-between items-center mt-5 relative">
                {imgIdx > (project.hasVideo ? 0 : 1) && (
                  <MdArrowBackIos
                    size={13}
                    className="absolute -left-5 cursor-pointer"
                    onClick={viewPrevImg}
                  />
                )}
                <p>
                  <span>{project.hasVideo ? imgIdx + 1 : imgIdx}</span> /{" "}
                  <span>{project.imgLength}</span>
                </p>
                {imgIdx < project.imgLength && (
                  <MdArrowForwardIos
                    size={13}
                    className="absolute -right-6 cursor-pointer"
                    onClick={viewNextImg}
                  />
                )}
              </div>
              <p className="text-sm text-gray-400 mt-2 flex items-center">
                <PiInfoLight className="inline mr-1" size={18} />
                이미지를 클릭하여 전체화면으로 볼 수 있습니다!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-10 laptop:gap-6 w-full">
            <div className="w-full relative overflow-scroll">
              <p className="flex items-center text-xl font-bold mb-4">
                <MdLightbulb className="mr-2 text-yellow-500" />
                개요
              </p>
              <div ref={contentRef} className="break-keep"></div>
            </div>
            <div>
              <p className="flex items-center text-xl font-bold mb-3">
                <MdCheck className="mr-2" size={25} />
                의의
              </p>
              <div ref={significanceRef} className="break-keep"></div>
            </div>
            <div>
              <p className="flex items-center text-xl font-bold mb-3">
                <MdCheck className="mr-2" size={25} />
                기술 스택
              </p>
              <div className="flex flex-wrap items-center gap-[0.6rem] mb-2 lg:mb-0">
                {project.skills.map((feature) => (
                  <FeatureBox key={feature}>{feature}</FeatureBox>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Project;
