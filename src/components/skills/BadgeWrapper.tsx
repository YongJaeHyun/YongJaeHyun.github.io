import { ReactNode } from "react";

interface IBadgeWrapper {
  children: ReactNode;
}

const BadgeWrapper = ({ children }: IBadgeWrapper) => {
  return <div className="flex flex-wrap gap-12 lg:gap-10 p-8 lg:p-10">{children}</div>;
};

export default BadgeWrapper;
