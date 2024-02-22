import MobileNavBtn from "./MobileNavBtn";

interface IMobileSlideBar {
  slideIdx: number;
  moveToOtherSlide: (amount: number) => void;
}

const MobileSideBar = ({ slideIdx, moveToOtherSlide }: IMobileSlideBar) => {
  return (
    <aside className="flex flex-col items-center justify-around fixed h-[70dvh] right-1 top-1/2 -translate-y-1/2 z-40">
      <MobileNavBtn
        idx={0}
        slideIdx={slideIdx}
        color="bg-[#0d47a1]"
        onClick={() => moveToOtherSlide(0)}
      >
        Ho
      </MobileNavBtn>
      <MobileNavBtn
        idx={1}
        slideIdx={slideIdx}
        color="bg-red-300"
        onClick={() => moveToOtherSlide(1)}
      >
        Ab
      </MobileNavBtn>
      <MobileNavBtn
        idx={2}
        slideIdx={slideIdx}
        color="bg-orange-300"
        onClick={() => moveToOtherSlide(2)}
      >
        Sk
      </MobileNavBtn>
      <MobileNavBtn
        idx={3}
        slideIdx={slideIdx}
        color="bg-indigo-300"
        onClick={() => moveToOtherSlide(3)}
      >
        Pr
      </MobileNavBtn>
      <MobileNavBtn
        idx={4}
        slideIdx={slideIdx}
        color="bg-purple-300"
        onClick={() => moveToOtherSlide(4)}
      >
        Ar
      </MobileNavBtn>
      <div
        className={`absolute right-3 h-[55dvh] w-1 -z-10 transition-all duration-500 ${
          slideIdx > 0 ? "bg-black" : "bg-white"
        }`}
      ></div>
    </aside>
  );
};

export default MobileSideBar;
