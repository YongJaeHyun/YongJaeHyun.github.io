import { useRef } from "react";
import MainSection from "../MainSection";
import Wrapper from "../Wrapper";
import SectionTitle from "../SectionTitle";
import About3DCard from "../about/About3DCard";

const About = () => {
  const aboutSectionRef = useRef<HTMLTableSectionElement>(null);

  return (
    <MainSection ref={aboutSectionRef} className="bg-red-300 pt-14 md:pt-24">
      <Wrapper>
        <SectionTitle className="mb-12 lg:mb-32"># About me</SectionTitle>
        <About3DCard maxAreaRef={aboutSectionRef} constrain={1800} />
      </Wrapper>
    </MainSection>
  );
};

export default About;
