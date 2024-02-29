import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import projects from "../../projects";
import Project from "./Project";
import ProjectSummaryCard from "../projects/ProjectSummaryCard";
import { useCallback, useEffect } from "react";

interface IProjects {
  isMobile: boolean;
  moveToOtherSlide: (amount: number) => void;
}

const Projects = ({ isMobile, moveToOtherSlide }: IProjects) => {
  const moveToTargetSlide = (targetId: number) => {
    history.pushState(null, "");
    moveToOtherSlide(targetId + 4);
  };

  const moveToProjectSummarySlide = useCallback(() => {
    moveToOtherSlide(3);
  }, [moveToOtherSlide]);

  useEffect(() => {
    window.addEventListener("popstate", moveToProjectSummarySlide);
    return () => {
      window.removeEventListener("popstate", moveToProjectSummarySlide);
    };
  }, [moveToProjectSummarySlide]);

  return (
    <MainSection className="bg-indigo-300 pt-24 !h-auto">
      <Wrapper>
        <SectionTitle
          className={`md:sticky md:top-24 cursor-pointer`}
          onClick={() => moveToOtherSlide(3)}
        >
          # Projects
        </SectionTitle>
        <MainSection className="grid w-full grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5">
          {projects.map((project) => (
            <ProjectSummaryCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              moveToTargetSlide={() => moveToTargetSlide(project.id)}
            />
          ))}
        </MainSection>
        {projects.map((project) => (
          <Project key={project.id + project.title} project={project} />
        ))}
      </Wrapper>
    </MainSection>
  );
};

/**
 * <div className="flex w-full gap-10 overflow-x-scroll">
          {projects.map((project) => (
            <ProjectSummaryCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              setOverlayId={setOverlayId}
            />
          ))}
        </div>
        {overlayId !== null && (
          <ProjectOverlayCard
            project={projects[overlayId]}
            isMobile={isMobile}
            setOverlayId={setOverlayId}
          />
        )}
 */
export default Projects;
