import { ReactNode } from "react";

interface IWrapper {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapper) => {
  return <div className="px-4 laptop:px-40 desktop:px-80">{children}</div>;
};

export default Wrapper;
