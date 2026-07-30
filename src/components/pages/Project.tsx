import { useRef } from "react";
import Slide from "../Slide";
import { MdAssignment, MdHub, MdLightbulb, MdOutlineShortcut } from "react-icons/md";
import FeatureBox from "../projects/FeatureBox";
import useAppearEffect from "../../hooks/useAppearEffect";
import { SiGithub } from "react-icons/si";
import ProjectMedia from "../projects/ProjectMedia";

interface IProject {
  project: IProjectInfo;
}

const Project = ({ project }: IProject) => {
  const projectCardRef = useRef<HTMLDivElement>(null);

  const { isIntersecting } = useAppearEffect(projectCardRef, "animate-appear");
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
            <p className="text-gray-600 leading-6">{project.numOfPeople}인 프로젝트</p>
            <p className="text-gray-600 leading-6">
              <span>{project.startDate}</span> - <span>{project.endDate}</span>
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-3">
            {project.githubURL && (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center rounded-3xl p-2 border-2 border-black hover:bg-[rgba(0,0,0,0.05)]"
              >
                <SiGithub size={20} />
              </a>
            )}
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
            <ProjectMedia project={project} isIntersecting={isIntersecting} />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-10 laptop:gap-8 w-full">
            <div className="w-full">
              <p className="hidden lg:block text-2xl font-bold mb-4">
                「 {project.summary} 」
              </p>
              <p className="flex items-center text-xl font-bold mb-4">
                <MdLightbulb className="mr-2 text-yellow-500" size={25} />
                주요 역할 및 담당
              </p>
              <div className="ml-8 break-keep flex flex-col gap-2">
                {project.tasks.map((task, index) => (
                  <div key={`project-${index}-${task}`} className="flex gap-4 items-center">
                    <div className="rounded-full w-2 h-2 bg-purple-300" />
                    <p>{task}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="flex items-center text-xl font-bold mb-3">
                <MdAssignment className="mr-2 text-green-500" size={25} />
                성과
              </p>
              <div className="break-keep font-bold border border-neutral-300 px-5 py-4 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 text-center">
                <span>{project.result}</span>
                {project.resultDetail && (
                  <span className="text-sm text-gray-500">({project.resultDetail})</span>
                )}
              </div>
            </div>
            <div>
              <p className="flex items-center text-xl font-bold mb-3">
                <MdHub className="mr-2 text-blue-500" size={25} />
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
