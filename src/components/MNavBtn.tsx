import { ReactNode } from "react";

interface IMNavBtn {
  children: ReactNode;
  onClick: () => void;
}

const MNavBtn = ({ children, onClick }: IMNavBtn) => {
  return (
    <button type="button" className="w-full py-5 px-4 text-right" onClick={onClick}>
      {children}
    </button>
  );
};

export default MNavBtn;
