import { ReactNode } from "react";

interface IBadgeWrapper {
  children: ReactNode;
}

const BadgeWrapper = ({ children }: IBadgeWrapper) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 laptop:grid-cols-7 gap-6 lg:gap-10 p-6 lg:p-10">
      {children}
    </div>
  );
};

export default BadgeWrapper;
