import { MouseEvent, useRef, useState } from "react";
import Slide from "../Slide";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import SkillCategoryBtn from "../skills/SkillCategoryBtn";
import FrontendBadges from "../skills/FrontendBadges";
import BackendBadges from "../skills/BackendBadges";
import MobileBadges from "../skills/MobileBadges";
import TestingBadges from "../skills/TestingBadges";
import DeploymentBadges from "../skills/DeploymentBadges";
import CommunicationBadges from "../skills/CommunicationBadges";
import useAppearEffect from "../../hooks/useAppearEffect";
import LowCodeBadges from "../skills/LowCodeBadges";
import { SKILLS } from "../../const/skills";

const Skills = () => {
  const skillCardRef = useRef<HTMLDivElement>(null);
  useAppearEffect(skillCardRef, "animate-appear");

  const [skillCategory, setSkillCategory] = useState<(typeof SKILLS)[keyof typeof SKILLS]>(
    SKILLS.frontend,
  );
  const changeSkillCategory = (skill: (typeof SKILLS)[keyof typeof SKILLS]) => {
    setSkillCategory(skill);
  };

  return (
    <Slide className="bg-orange-300 pt-16 md:pt-24">
      <Wrapper>
        <SectionTitle className="mb-12 lg:mb-24"># Skills</SectionTitle>
        <div ref={skillCardRef}>
          <div className="flex bg-white rounded-t-2xl overflow-x-scroll border-b-2 border-dashed">
            {Object.values(SKILLS).map((skill) => (
              <SkillCategoryBtn
                key={skill}
                category={skillCategory}
                changeSkillCategory={() => changeSkillCategory(skill)}
              >
                {skill}
              </SkillCategoryBtn>
            ))}
          </div>
          <div className="bg-white rounded-b-2xl">
            {skillCategory === SKILLS.frontend ? (
              <FrontendBadges />
            ) : skillCategory === SKILLS.backend ? (
              <BackendBadges />
            ) : skillCategory === SKILLS.mobile ? (
              <MobileBadges />
            ) : skillCategory === SKILLS.testing ? (
              <TestingBadges />
            ) : skillCategory === SKILLS.deployment ? (
              <DeploymentBadges />
            ) : skillCategory === SKILLS.communication ? (
              <CommunicationBadges />
            ) : skillCategory === SKILLS.lowCode ? (
              <LowCodeBadges />
            ) : null}
          </div>
        </div>
      </Wrapper>
    </Slide>
  );
};

export default Skills;
