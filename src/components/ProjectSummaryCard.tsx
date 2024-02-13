import { useEffect, useRef, useState } from "react";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdCheck,
  MdLightbulb,
  MdOutlineKeyboardBackspace,
} from "react-icons/md";
import { SiGithub } from "react-icons/si";
import FeatureBox from "./FeatureBox";

interface IProject {
  id: number;
  title: string;
  numOfPeople: number;
  imgLength: number;
  githubURL: string;
  deployURL?: string;
  introHTML: string;
  mainFeatures: string[];
  skills: string[];
  startDate: string;
  endDate: string;
}

interface IProjectSummaryCard {
  project: IProject;
  overlayId: number | null;
  setOverlayId: (overlayId: number | null) => void;
}

const ProjectSummaryCard = ({ project, overlayId, setOverlayId }: IProjectSummaryCard) => {
  const [imgIdx, setImgIdx] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const viewPrevImg = () => {
    setImgIdx((prev) => prev - 1);
  };
  const viewNextImg = () => {
    setImgIdx((prev) => prev + 1);
  };

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.innerHTML = project.introHTML;
  }, [overlayId, project.introHTML]);

  return (
    <>
      <div
        className="flex flex-col w-72 h-52 cursor-pointer"
        onClick={() => setOverlayId(project.id)}
      >
        <div className="w-full h-full rounded-xl overflow-hidden mb-3">
          <img
            src={`/images/${project.id}/0.png`}
            alt="프로젝트 대표 이미지"
            className="h-full object-cover"
            loading="lazy"
          />
        </div>
        <p className="flex justify-center items-center h-1/5 px-2">
          <h4 className="text-lg font-semibold truncate">{project.title}</h4>
        </p>
      </div>
      {project.id === overlayId && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50"
            onClick={() => setOverlayId(null)}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-2/3 h-5/6 bg-white rounded-2xl p-7 z-50">
            <MdOutlineKeyboardBackspace
              className="absolute top-7 left-10 z-50 cursor-pointer"
              size={40}
              onClick={() => setOverlayId(null)}
            />
            <div className="flex flex-col justify-center items-center mb-5">
              <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 leading-5">{project.numOfPeople}인 프로젝트</p>
              <p className="text-gray-400 leading-5">
                <span>{project.startDate}</span> - <span>{project.endDate}</span>
              </p>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex flex-col items-center w-1/2">
                <img
                  src={`/images/${project.id}/${imgIdx}.png`}
                  alt="프로젝트 이미지"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-5 relative">
                  {imgIdx > 0 && (
                    <MdArrowBackIos
                      size={15}
                      className="absolute -left-5 cursor-pointer"
                      onClick={viewPrevImg}
                    />
                  )}
                  <p>
                    <span>{imgIdx + 1}</span> / <span>{project.imgLength + 1}</span>
                  </p>
                  {imgIdx < project.imgLength && (
                    <MdArrowForwardIos
                      size={15}
                      className="absolute -right-7 cursor-pointer"
                      onClick={viewNextImg}
                    />
                  )}
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="w-full h-full">
              <div className="flex gap-10">
                <div className="w-full relative">
                  <p className="flex items-center text-xl font-bold mb-4">
                    <MdLightbulb className="mr-2 text-yellow-500" />
                    개요
                  </p>
                  <p ref={contentRef}></p>
                  <div className="flex justify-evenly items-center w-full absolute left-0 bottom-0">
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center rounded-3xl w-32 h-12 border-2 border-black"
                    >
                      <p className="flex items-center gap-2">
                        <SiGithub />
                        Github
                      </p>
                    </a>
                    <a
                      href={project.deployURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex justify-center items-center rounded-3xl w-32 h-12 text-white ${
                        project.deployURL ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    >
                      {project.deployURL ? "사이트 가기" : "사이트 준비 중"}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-10 w-full">
                  <div>
                    <p className="flex items-center text-xl font-bold mb-4">
                      <MdCheck className="mr-2" size={25} />
                      주요 기능
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.mainFeatures.map((feature) => (
                        <FeatureBox>{feature}</FeatureBox>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center text-xl font-bold mb-4">
                      <MdCheck className="mr-2" size={25} />
                      기술 스택
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {project.skills.map((feature) => (
                        <FeatureBox>{feature}</FeatureBox>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectSummaryCard;
