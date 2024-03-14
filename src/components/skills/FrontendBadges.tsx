import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiReact,
  SiRecoil,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const FrontendBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="HTML5">
        <SiHtml5 className="text-[#E34F26] " size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="CSS3">
        <SiCss3 className="text-[#1572B6]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="JS">
        <SiJavascript className="text-[#F7DF1E]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="TS">
        <SiTypescript className="text-[#3178C6]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="React">
        <SiReact className="text-[#61DAFB]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Next.js">
        <SiNextdotjs className="text-[#000000]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Redux">
        <SiRedux className="text-[#764ABC]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Recoil">
        <SiRecoil className="text-[#3578E5]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="jQuery">
        <SiJquery className="text-[#0769AD]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="TailwindCSS">
        <SiTailwindcss className="text-[#06B6D4]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Styled Components">
        <SiStyledcomponents className="text-[#DB7093]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default FrontendBadges;
