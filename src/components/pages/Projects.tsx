import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import projects from "../../projects";
import Project from "./Project";
import { useCallback, useContext, useEffect, useRef } from "react";
import useAppearEffect from "../../hooks/useAppearEffect";
import { SlidesContext } from "../../SlidesProvider";

const Projects = () => {
  const projectsCardRef = useRef<HTMLTableSectionElement>(null);
  const { moveToOtherSlide } = useContext(SlidesContext);

  const moveToProjectSummarySlide = useCallback(() => {
    moveToOtherSlide(3);
  }, [moveToOtherSlide]);

  useAppearEffect(projectsCardRef);
  useEffect(() => {
    window.addEventListener("popstate", moveToProjectSummarySlide);
    return () => {
      window.removeEventListener("popstate", moveToProjectSummarySlide);
    };
  }, [moveToProjectSummarySlide]);

  return (
    <MainSection className="bg-indigo-300 pt-16 pb-24 md:pt-24 md:pb-0 !h-auto">
      <Wrapper>
        <SectionTitle
          className={`md:sticky md:top-24 cursor-pointer`}
          onClick={() => moveToOtherSlide(3)}
        >
          # Projects
        </SectionTitle>
        {projects.map((project) => (
          <Project key={project.id + project.title} project={project} />
        ))}
      </Wrapper>
    </MainSection>
  );
};

export default Projects;
