import { ReactNode } from "react";

interface IMobileNavBtn {
  children: ReactNode;
  color: string;
  idx: number;
  slideIdx: number;
  onClick: () => void;
}

const MobileNavBtn = ({ children, idx, slideIdx, color, onClick }: IMobileNavBtn) => {
  return (
    <button
      className={`flex justify-center items-center w-5 h-5 rounded-full text-white text-xs transition-all duration-500 ${color} ${
        slideIdx === idx && "w-7 h-7 font-semibold border-[3px]"
      } ${slideIdx > 0 && "border-black"}`}
      onClick={onClick}
    >
      {slideIdx === idx && children}
    </button>
  );
};

export default MobileNavBtn;
