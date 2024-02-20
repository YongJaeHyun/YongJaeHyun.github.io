import { SiJest, SiSelenium } from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";

const TestingBadges = () => {
  return (
    <BadgeWrapper>
      <Badge value="Jest">
        <SiJest className="text-[#C21325]" size={100} />
      </Badge>
      <Badge value="Selenium">
        <SiSelenium className="text-[#43B02A]" size={100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default TestingBadges;
