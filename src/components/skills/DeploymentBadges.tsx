import { SiDocker, SiGithubpages, SiNetlify, SiVercel } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";
import { FaAmazon } from "react-icons/fa6";
import { DiHeroku } from "react-icons/di";

const DeploymentBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="AWS">
        <FaAmazon className="text-[#FF9900]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Vercel">
        <SiVercel className="text-[#171717]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Netlify">
        <SiNetlify className="text-[#20c6b7]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Heroku">
        <DiHeroku className="text-[#430098]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Docker">
        <SiDocker className="text-[#2496ED]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Github Pages">
        <SiGithubpages className="text-[#222222]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default DeploymentBadges;
