import { SiFlutter, SiReact } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";

const MobileBadges = () => {
  return (
    <BadgeWrapper>
      <Badge value="Flutter">
        <SiFlutter className="text-[#02569B]" size={100} />
      </Badge>
      <Badge value="React Native">
        <SiReact className="text-[#61DAFB]" size={100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default MobileBadges;
