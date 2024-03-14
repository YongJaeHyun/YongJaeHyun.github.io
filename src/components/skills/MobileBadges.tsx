import { SiFlutter, SiReact } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const MobileBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="Flutter">
        <SiFlutter className="text-[#02569B]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="React Native">
        <SiReact className="text-[#61DAFB]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default MobileBadges;
