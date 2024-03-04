import { useRef } from "react";
import MainSection from "../MainSection";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import About3DCard from "../about/About3DCard";

const About = () => {
  const aboutSectionRef = useRef<HTMLTableSectionElement>(null);

  return (
    <MainSection ref={aboutSectionRef} className="bg-red-300 pt-24">
      <Wrapper>
        <SectionTitle className="mb-12 lg:mb-32"># About me</SectionTitle>
        <About3DCard constrain={1800} maxAreaRef={aboutSectionRef} />
      </Wrapper>
    </MainSection>
  );
};

export default About;
