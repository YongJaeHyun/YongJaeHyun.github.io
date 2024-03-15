import Slide from "../Slide";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import projects from "../../projects";
import Project from "./Project";
import { useContext } from "react";
import { SlidesContext } from "../../SlidesProvider";

const Projects = () => {
  const { moveToOtherSlide } = useContext(SlidesContext);

  return (
    <section className="w-full bg-indigo-300 pt-16 pb-24 md:pt-24 md:pb-0">
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
    </section>
  );
};

export default Projects;
