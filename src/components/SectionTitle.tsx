import { ReactNode } from "react";

interface ISectionTitle {
  children: ReactNode;
}

const SectionTitle = ({ children }: ISectionTitle) => {
  return <h3 className="text-3xl font-semibold mb-24">{children}</h3>;
};

export default SectionTitle;
