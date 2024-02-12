import { ReactNode } from "react";

interface INavBtn {
  children: ReactNode;
  onClick: () => void;
}

const NavBtn = ({ children, onClick }: INavBtn) => {
  return (
    <button
      type="button"
      className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavBtn;
