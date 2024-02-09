import { forwardRef } from "react";

interface IHeader {
  slideIdx: number;
  moveToOtherSlide: (amount: number) => void;
}

const Header = forwardRef(
  ({ slideIdx, moveToOtherSlide }: IHeader, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <header
        ref={ref}
        className={`w-full flex justify-between px-60 py-5 text-lg fixed top-0 transition-all duration-500 ${
          slideIdx === 0 ? "text-white" : "text-black"
        }`}
      >
        <h2
          className="font-semibold text-xl cursor-pointer"
          onClick={() => moveToOtherSlide(0)}
        >
          YJ's Portfolio
        </h2>
        <nav className="flex gap-12">
          <button type="button" onClick={() => moveToOtherSlide(1)}>
            About me
          </button>
          <button type="button" onClick={() => moveToOtherSlide(2)}>
            Skills
          </button>
          <button type="button" onClick={() => moveToOtherSlide(3)}>
            Projects
          </button>
          <button type="button" onClick={() => moveToOtherSlide(4)}>
            Careers
          </button>
          <button type="button" onClick={() => moveToOtherSlide(5)}>
            My Archives
          </button>
        </nav>
      </header>
    );
  }
);

export default Header;
