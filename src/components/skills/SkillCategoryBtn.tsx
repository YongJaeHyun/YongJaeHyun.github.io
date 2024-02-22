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
      className={`first:px-6 pr-6 lg:first:px-12 lg:pr-12 py-4 lg:py-5 ${
        category === children && " underline decoration-2 underline-offset-8"
      }`}
    >
      {children}
    </button>
  );
};

export default SkillCategoryBtn;
