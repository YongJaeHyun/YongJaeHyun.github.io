import { ReactNode } from "react";

interface IBadgeWrapper {
  children: ReactNode;
}

const BadgeWrapper = ({ children }: IBadgeWrapper) => {
  return <div className="flex flex-wrap gap-6 lg:gap-10 p-5 lg:p-10">{children}</div>;
};

export default BadgeWrapper;
