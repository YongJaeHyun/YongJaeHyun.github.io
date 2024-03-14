import { ReactNode } from "react";

interface IBadge {
  children: ReactNode;
  value: string;
}

const Badge = ({ children, value }: IBadge) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:rotate-3 hover:scale-105 transition-transform">
      {children}
      <p className="font-medium text-sm lg:text-lg text-center">{value}</p>
    </div>
  );
};

export default Badge;
