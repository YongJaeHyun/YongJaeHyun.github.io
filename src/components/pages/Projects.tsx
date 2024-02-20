import { useState } from "react";
import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import ProjectSummaryCard from "../ProjectSummaryCard";
import projects from "../../projects";

const Projects = () => {
  const [overlayId, setOverlayId] = useState<number | null>(null);

  return (
    <MainSection className="bg-indigo-300 pt-24 relative">
      <Wrapper>
        <SectionTitle className="mb-24"># Projects</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10">
          {projects.map((project) => (
            <ProjectSummaryCard
              project={project}
              overlayId={overlayId}
              setOverlayId={setOverlayId}
            />
          ))}
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default Projects;
