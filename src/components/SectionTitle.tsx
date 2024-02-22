import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: ISectionTitle) => {
  return <h2 className={`text-2xl lg:text-3xl font-semibold ${className}`}>{children}</h2>;
};

export default SectionTitle;
