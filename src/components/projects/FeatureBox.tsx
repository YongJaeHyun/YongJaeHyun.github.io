import { ReactNode } from "react";

interface IFeatureBox {
  children: ReactNode;
}

const FeatureBox = ({ children }: IFeatureBox) => {
  return (
    <div className="border-2 border-blue-500 text-blue-500 rounded-3xl px-4 py-1 font-semibold">
      {children}
    </div>
  );
};

export default FeatureBox;
