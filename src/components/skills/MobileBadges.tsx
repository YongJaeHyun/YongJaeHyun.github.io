import { SiFlutter, SiReact } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import { IBadges } from "../../interfaces";

const MobileBadges = ({ isMobile }: IBadges) => {
  return (
    <BadgeWrapper>
      <Badge value="Flutter">
        <SiFlutter className="text-[#02569B]" size={isMobile ? 60 : 100} />
      </Badge>
      <Badge value="React Native">
        <SiReact className="text-[#61DAFB]" size={isMobile ? 60 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default MobileBadges;
