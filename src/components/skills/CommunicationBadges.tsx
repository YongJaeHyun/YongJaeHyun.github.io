import { SiFigma, SiGit, SiNotion, SiSlack } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const CommunicationBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="Git">
        <SiGit className="text-[#F05032]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Figma">
        <SiFigma className="text-[#F24E1E]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Notion">
        <SiNotion className="text-[#000000]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Slack">
        <SiSlack className="text-[#4A154B]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default CommunicationBadges;
