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
      className={`relative text-md w-fit laptop:text-xl ${
        idx === slideIdx
          ? "border-b-2 pb-1  border-black"
          : `after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left ${
              slideIdx === 0 ? "after:bg-white" : "after:bg-black"
            }`
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavBtn;
