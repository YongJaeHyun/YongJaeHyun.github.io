import { MouseEvent, useState } from "react";
import MainSection from "../MainSection";
import SectionTitle from "../SectionTitle";
import Wrapper from "../Wrapper";
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiFlask,
  SiFlutter,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiReact,
  SiRecoil,
  SiRedux,
  SiSelenium,
  SiSlack,
  SiSpring,
  SiSpringboot,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Badge from "../Badge";

const Skills = () => {
  const [category, setCategory] = useState("FrontEnd");
  const changeCategory = (e: MouseEvent) => {
    setCategory(e.currentTarget.textContent!);
  };

  return (
    <MainSection className="bg-orange-300 pt-24">
      <Wrapper>
        <SectionTitle className="mb-24"># Skills</SectionTitle>
        <div className="flex bg-white rounded-t-2xl overflow-hidden border-b-2 border-dashed">
          <button
            type="button"
            onClick={changeCategory}
            className={`px-12 py-5 ${
              category === "FrontEnd" && " underline decoration-2 underline-offset-8"
            }`}
          >
            FrontEnd
          </button>
          <button
            type="button"
            onClick={changeCategory}
            className={`pr-12 py-5 ${
              category === "BackEnd" && " underline decoration-2 underline-offset-8"
            }`}
          >
            BackEnd
          </button>
          <button
            type="button"
            onClick={changeCategory}
            className={`pr-12 py-5 ${
              category === "Mobile" && " underline decoration-2 underline-offset-8"
            }`}
          >
            Mobile
          </button>
          <button
            type="button"
            onClick={changeCategory}
            className={`pr-12 py-5 ${
              category === "Testing" && " underline decoration-2 underline-offset-8"
            }`}
          >
            Testing
          </button>
          <button
            type="button"
            onClick={changeCategory}
            className={`pr-12 py-5 ${
              category === "Deployment" && " underline decoration-2 underline-offset-8"
            }`}
          >
            Deployment
          </button>
          <button
            type="button"
            onClick={changeCategory}
            className={`pr-12 py-5 ${
              category === "Communication" && " underline decoration-2 underline-offset-8"
            }`}
          >
            Communication
          </button>
        </div>

        <div className="bg-white rounded-b-2xl">
          {category === "FrontEnd" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="HTML5">
                <SiHtml5 className="text-[#E34F26]" size={100} />
              </Badge>
              <Badge value="CSS3">
                <SiCss3 className="text-[#1572B6]" size={100} />
              </Badge>
              <Badge value="JS">
                <SiJavascript className="text-[#F7DF1E]" size={100} />
              </Badge>
              <Badge value="TS">
                <SiTypescript className="text-[#3178C6]" size={100} />
              </Badge>
              <Badge value="React">
                <SiReact className="text-[#61DAFB]" size={100} />
              </Badge>
              <Badge value="Next.js">
                <SiNextdotjs className="text-[#000000]" size={100} />
              </Badge>
              <Badge value="Redux">
                <SiRedux className="text-[#764ABC]" size={100} />
              </Badge>
              <Badge value="Recoil">
                <SiRecoil className="text-[#3578E5]" size={100} />
              </Badge>
              <Badge value="Jquery">
                <SiJquery className="text-[#0769AD]" size={100} />
              </Badge>
              <Badge value="TailwindCSS">
                <SiTailwindcss className="text-[#06B6D4]" size={100} />
              </Badge>
              <Badge value="Styled-Components">
                <SiStyledcomponents className="text-[#DB7093]" size={100} />
              </Badge>
            </div>
          ) : category === "BackEnd" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="Spring">
                <SiSpring className="text-[#6DB33F]" size={100} />
              </Badge>
              <Badge value="Spring boot">
                <SiSpringboot className="text-[#6DB33F]" size={100} />
              </Badge>
              <Badge value="Node.js">
                <SiNodedotjs className="text-[#339933]" size={100} />
              </Badge>
              <Badge value="FastAPI">
                <SiFastapi className="text-[#009688]" size={100} />
              </Badge>
              <Badge value="Flask">
                <SiFlask className="text-[#000000]" size={100} />
              </Badge>
              <Badge value="MySQL">
                <SiMysql className="text-[#4479A1]" size={100} />
              </Badge>
              <Badge value="MariaDB">
                <SiMariadb className="text-[#003545]" size={100} />
              </Badge>
              <Badge value="MongoDB">
                <SiMongodb className="text-[#47A248]" size={100} />
              </Badge>
            </div>
          ) : category === "Mobile" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="Flutter">
                <SiFlutter className="text-[#02569B]" size={100} />
              </Badge>
              <Badge value="React Native">
                <SiReact className="text-[#61DAFB]" size={100} />
              </Badge>
            </div>
          ) : category === "Testing" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="Jest">
                <SiJest className="text-[#C21325]" size={100} />
              </Badge>
              <Badge value="Selenium">
                <SiSelenium className="text-[#43B02A]" size={100} />
              </Badge>
            </div>
          ) : category === "Deployment" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="AWS">
                <SiAmazonaws className="text-[#232F3E]" size={100} />
              </Badge>
              <Badge value="Heroku">
                <SiHeroku className="text-[#430098]" size={100} />
              </Badge>
              <Badge value="Docker">
                <SiDocker className="text-[#2496ED]" size={100} />
              </Badge>
            </div>
          ) : category === "Communication" ? (
            <div className="flex flex-wrap gap-10 p-10">
              <Badge value="Git">
                <SiGit className="text-[#F05032]" size={100} />
              </Badge>
              <Badge value="Figma">
                <SiFigma className="text-[#F24E1E]" size={100} />
              </Badge>
              <Badge value="Notion">
                <SiNotion className="text-[#000000]" size={100} />
              </Badge>
              <Badge value="Slack">
                <SiSlack className="text-[#4A154B]" size={100} />
              </Badge>
            </div>
          ) : null}
        </div>
      </Wrapper>
    </MainSection>
  );
};

export default Skills;
