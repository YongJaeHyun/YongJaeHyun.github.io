import { useState } from "react";
import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import ProjectSummaryCard from "../projects/ProjectSummaryCard";
import projects from "../../projects";
import ProjectOverlayCard from "../projects/ProjectOverlayCard";

interface IProjects {
  isMobile: boolean;
}

const Projects = ({ isMobile }: IProjects) => {
  const [overlayId, setOverlayId] = useState<number | null>(null);

  return (
    <MainSection className="bg-indigo-300 pt-24 relative">
      <Wrapper>
        <SectionTitle className="mb-40 lg:mb-24"># Projects</SectionTitle>
        <div className="flex w-full gap-10 overflow-x-scroll">
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
      </Wrapper>
    </MainSection>
  );
};

export default Projects;
