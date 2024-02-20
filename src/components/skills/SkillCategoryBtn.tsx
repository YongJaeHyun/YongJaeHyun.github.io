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
      className={`first:px-12 pr-12 py-5 ${
        category === children && " underline decoration-2 underline-offset-8"
      }`}
    >
      {children}
    </button>
  );
};

export default SkillCategoryBtn;
