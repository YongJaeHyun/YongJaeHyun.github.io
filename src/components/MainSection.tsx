import { ReactNode, forwardRef } from "react";

interface IMainSection {
  children: ReactNode;
  className?: string;
}

const MainSection = forwardRef(
  (
    { children, className }: IMainSection,
    ref: React.ForwardedRef<HTMLTableSectionElement>
  ) => (
    <section ref={ref} className={`w-full min-h-screen ${className}`}>
      {children}
    </section>
  )
);

export default MainSection;
