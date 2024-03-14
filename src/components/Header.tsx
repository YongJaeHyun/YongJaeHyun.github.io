import { useContext } from "react";
import NavBtn from "./NavBtn";
import projects from "../projects";
import { MdArrowForward, MdMenu } from "react-icons/md";
import useDropdown from "../hooks/useDropdown";
import MNavBtn from "./MNavBtn";
import { SlidesContext } from "../SlidesProvider";
import useCheckIsHome from "../hooks/useCheckIsHome";

const Header = () => {
  const { isClicked, toggleIsClicked } = useDropdown(false);
  const { isHome } = useCheckIsHome();
  const { moveToOtherSlide } = useContext(SlidesContext);

  const archiveSlideIdx = 3 + projects.length;
  const projectIdxs = Array(projects.length)
    .fill(0)
    .map((_, idx) => idx + 3);

  const moveToOtherSlideAtMobile = (slideIdx: number) => {
    if (!moveToOtherSlide) return;

    toggleIsClicked();
    moveToOtherSlide(slideIdx);
  };

  return (
    <header
      className={`w-full flex justify-between px-4 laptop:px-40 desktop:px-80 py-5 text-lg fixed top-0 z-50 transition-all duration-500 ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <h1
        className="font-semibold text-xl laptop:text-2xl cursor-pointer"
        onClick={() => moveToOtherSlide(0)}
      >
        YJ's Portfolio
      </h1>
      <>
        {/** 데스크탑 */}
        <nav className="gap-12 hidden md:flex">
          <NavBtn idx={1} onClick={() => moveToOtherSlide(1)}>
            About me
          </NavBtn>
          <NavBtn idx={2} onClick={() => moveToOtherSlide(2)}>
            Skills
          </NavBtn>
          <NavBtn idx={projectIdxs} onClick={() => moveToOtherSlide(3)}>
            Projects
          </NavBtn>
          <NavBtn idx={archiveSlideIdx} onClick={() => moveToOtherSlide(archiveSlideIdx)}>
            My Archives
          </NavBtn>
        </nav>
        {/** 모바일 */}
        <div className="md:hidden">
          <MdMenu size={30} onClick={toggleIsClicked} />
          {isClicked && (
            <div className="flex flex-col items-end absolute top-0 left-0 w-full h-screen bg-[rgba(255,255,255,0.4)] backdrop-blur-md text-black animate-asideAppear">
              <MdArrowForward size={30} onClick={toggleIsClicked} className="mx-4 my-5" />
              <nav className="flex flex-col items-center w-full font-semibold">
                <MNavBtn onClick={() => moveToOtherSlideAtMobile(0)}>Home</MNavBtn>
                <MNavBtn onClick={() => moveToOtherSlideAtMobile(1)}>About me</MNavBtn>
                <MNavBtn onClick={() => moveToOtherSlideAtMobile(2)}>Skills</MNavBtn>
                <MNavBtn onClick={() => moveToOtherSlideAtMobile(3)}>Projects</MNavBtn>
                <MNavBtn onClick={() => moveToOtherSlideAtMobile(archiveSlideIdx)}>
                  My Archives
                </MNavBtn>
              </nav>
            </div>
          )}
        </div>
      </>
    </header>
  );
};

export default Header;
