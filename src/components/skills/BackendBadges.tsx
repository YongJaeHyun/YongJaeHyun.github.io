import {
  SiFastapi,
  SiFlask,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import Badge from "./Badge";
import BadgeWrapper from "./BadgeWrapper";
import useCheckIsMobile from "../../hooks/useCheckIsMobile";

const BackendBadges = () => {
  const { isMobile } = useCheckIsMobile();

  return (
    <BadgeWrapper>
      <Badge value="Spring">
        <SiSpring className="text-[#6DB33F]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Spring boot">
        <SiSpringboot className="text-[#6DB33F]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Node.js">
        <SiNodedotjs className="text-[#339933]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="FastAPI">
        <SiFastapi className="text-[#009688]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="Flask">
        <SiFlask className="text-[#000000]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="MySQL">
        <SiMysql className="text-[#4479A1]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="MariaDB">
        <SiMariadb className="text-[#003545]" size={isMobile ? 65 : 100} />
      </Badge>
      <Badge value="MongoDB">
        <SiMongodb className="text-[#47A248]" size={isMobile ? 65 : 100} />
      </Badge>
    </BadgeWrapper>
  );
};

export default BackendBadges;
