import { forwardRef } from "react";
import NavBtn from "./NavBtn";
import projects from "../projects";

interface IHeader {
  slideIdx: number;
  isMobile: boolean;
  moveToOtherSlide: (amount: number) => void;
}

const Header = forwardRef(
  (
    { slideIdx, isMobile, moveToOtherSlide }: IHeader,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const projectIdxs = Array(projects.length)
      .fill(0)
      .map((_, idx) => idx + 3);
    return (
      <header
        ref={ref}
        className={`w-full flex justify-between px-9 laptop:px-40 desktop:px-80 py-5 text-lg fixed top-0 z-50 transition-all duration-500 ${
          slideIdx === 0 ? "text-white" : "text-black"
        }`}
      >
        <h1
          className="font-semibold text-xl laptop:text-2xl cursor-pointer"
          onClick={() => moveToOtherSlide(0)}
        >
          YJ's Portfolio
        </h1>
        {!isMobile && (
          <nav className="flex gap-12">
            <NavBtn slideIdx={slideIdx} idx={1} onClick={() => moveToOtherSlide(1)}>
              About me
            </NavBtn>
            <NavBtn slideIdx={slideIdx} idx={2} onClick={() => moveToOtherSlide(2)}>
              Skills
            </NavBtn>
            <NavBtn slideIdx={slideIdx} idx={projectIdxs} onClick={() => moveToOtherSlide(3)}>
              Projects
            </NavBtn>
            <NavBtn
              slideIdx={slideIdx}
              idx={3 + projects.length}
              onClick={() => moveToOtherSlide(3 + projects.length)}
            >
              My Archives
            </NavBtn>
          </nav>
        )}
      </header>
    );
  }
);

export default Header;
