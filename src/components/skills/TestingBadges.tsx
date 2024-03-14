import { SiJest, SiSelenium } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const TestingBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="Jest">
        <SiJest className="text-[#C21325]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Selenium">
        <SiSelenium className="text-[#43B02A]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default TestingBadges;
