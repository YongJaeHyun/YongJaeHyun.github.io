import { ReactNode } from "react";

interface IBadge {
  children: ReactNode;
  value: string;
}

const Badge = ({ children, value }: IBadge) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <p className="font-semibold text-xs lg:text-lg">{value}</p>
    </div>
  );
};

export default Badge;
