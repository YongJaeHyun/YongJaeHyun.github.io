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

const Skills = () => {
  const skillCardRef = useRef<HTMLDivElement>(null);
  useAppearEffect(skillCardRef, "animate-appear");

  const [category, setCategory] = useState("FrontEnd");
  const changeCategory = (e: MouseEvent) => {
    setCategory(e.currentTarget.textContent!);
  };

  return (
    <Slide className="bg-orange-300 pt-16 md:pt-24">
      <Wrapper>
        <SectionTitle className="mb-12 lg:mb-24"># Skills</SectionTitle>
        <div ref={skillCardRef}>
          <div className="flex bg-white rounded-t-2xl overflow-x-scroll border-b-2 border-dashed">
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              FrontEnd
            </SkillCategoryBtn>
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              BackEnd
            </SkillCategoryBtn>
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              Mobile
            </SkillCategoryBtn>
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              Testing
            </SkillCategoryBtn>
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              Deployment
            </SkillCategoryBtn>
            <SkillCategoryBtn category={category} changeCategory={changeCategory}>
              Communication
            </SkillCategoryBtn>
          </div>

          <div className="bg-white rounded-b-2xl">
            {category === "FrontEnd" ? (
              <FrontendBadges />
            ) : category === "BackEnd" ? (
              <BackendBadges />
            ) : category === "Mobile" ? (
              <MobileBadges />
            ) : category === "Testing" ? (
              <TestingBadges />
            ) : category === "Deployment" ? (
              <DeploymentBadges />
            ) : category === "Communication" ? (
              <CommunicationBadges />
            ) : null}
          </div>
        </div>
      </Wrapper>
    </Slide>
  );
};

export default Skills;
