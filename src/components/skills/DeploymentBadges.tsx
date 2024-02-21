import { SiAmazonaws, SiDocker, SiGithubpages, SiHeroku } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";

const DeploymentBadges = () => {
  return (
    <BadgeWrapper>
      <Badge value="AWS">
        <SiAmazonaws className="text-[#232F3E]" size={100} />
      </Badge>
      <Badge value="Heroku">
        <SiHeroku className="text-[#430098]" size={100} />
      </Badge>
      <Badge value="Docker">
        <SiDocker className="text-[#2496ED]" size={100} />
      </Badge>
      <Badge value="Github Pages">
        <SiGithubpages className="text-[#222222]" size={100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default DeploymentBadges;
