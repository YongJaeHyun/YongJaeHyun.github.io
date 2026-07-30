import { useContext } from "react";
import { SlidesContext } from "../../SlidesProvider";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const GuideArrow = () => {
  const { moveToNextSlide } = useContext(SlidesContext);

  return (
    <div className="flex flex-col justify-between items-center absolute z-40 bottom-10 w-80 h-24 left-[calc(50%-10rem)] text-white rounded-lg">
      <p className="text-lg text-black">아래로 스크롤 하세요!</p>
      <div
        className="flex justify-center items-center w-12 h-12 rounded-full bg-black animate-bounce cursor-pointer"
        onClick={moveToNextSlide}
      >
        <MdKeyboardDoubleArrowDown className="text-2xl" />
      </div>
    </div>
  );
};

export default GuideArrow;
