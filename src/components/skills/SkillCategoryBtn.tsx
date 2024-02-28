import { MouseEvent, ReactNode } from "react";

interface ISkillCategoryBtn {
  category: string;
  changeCategory: (e: MouseEvent) => void;
  children: ReactNode;
}

const SkillCategoryBtn = ({ category, changeCategory, children }: ISkillCategoryBtn) => {
  return (
    <button
      type="button"
      onClick={changeCategory}
      className={`first:pl-8 first:pr-10 pr-10 md:first:px-12 md:pr-12 py-6 lg:py-5 ${
        category === children && " underline decoration-2 underline-offset-8"
      }`}
    >
      {children}
    </button>
  );
};

export default SkillCategoryBtn;
