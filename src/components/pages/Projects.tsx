import { useState } from "react";
import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import projects from "../../projects";
import Project from "./Project";

interface IProjects {
  isMobile: boolean;
}

const Projects = ({ isMobile }: IProjects) => {
  return (
    <MainSection className="bg-indigo-300 pt-24 !h-auto">
      <Wrapper>
        <SectionTitle className={`sticky top-24`}># Projects</SectionTitle>
        {projects.map((project) => (
          <Project project={project} />
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
