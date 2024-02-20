import { SiFigma, SiGit, SiNotion, SiSlack } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";

const CommunicationBadges = () => {
  return (
    <BadgeWrapper>
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
    </BadgeWrapper>
  );
};

export default CommunicationBadges;
