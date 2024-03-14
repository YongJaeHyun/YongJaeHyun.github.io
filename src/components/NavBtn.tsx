import { ReactNode, useContext } from "react";
import { SlidesContext } from "../SlidesProvider";
import useCheckIsHome from "../hooks/useCheckIsHome";

interface INavBtn {
  children: ReactNode;
  idx: number | number[];
  onClick: () => void;
}

const NavBtn = ({ children, idx, onClick }: INavBtn) => {
  const { slideIdx } = useContext(SlidesContext);
  const { isHome } = useCheckIsHome();

  return (
    <button
      type="button"
      className={`relative text-md w-fit laptop:text-xl 
        ${
          idx === slideIdx || (Array.isArray(idx) && idx.includes(slideIdx))
            ? "border-b-2 pb-1  border-black"
            : `after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:duration-300 after:origin-left ${
                isHome ? "after:bg-white" : "after:bg-black"
              }`
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavBtn;
