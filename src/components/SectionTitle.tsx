import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const SectionTitle = ({ children, className, onClick }: ISectionTitle) => {
  return (
    <h2
      className={`w-fit text-2xl lg:text-3xl font-semibold z-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
