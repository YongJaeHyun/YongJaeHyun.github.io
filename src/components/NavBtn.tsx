import { ReactNode } from "react";

interface INavBtn {
  children: ReactNode;
  idx: number;
  slideIdx: number;
  onClick: () => void;
}

const NavBtn = ({ children, idx, slideIdx, onClick }: INavBtn) => {
  return (
    <button
      type="button"
      className={`relative text-xl w-fit block ${
        idx === slideIdx
          ? "border-b-2 pb-1 border-black"
          : "after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavBtn;
