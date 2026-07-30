import { SiOsano, SiSamsung } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const LowCodeBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="Outsystems">
        <SiOsano className="text-[#E34F26] " size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Brity RPA">
        <SiSamsung className="text-[#1428A0]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default LowCodeBadges;
