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
      className={`first:ml-6 first:mr-10 mr-10 md:first:mx-12 md:mr-12 py-4 md:py-5 text-sm md:text-lg ${
        category === children ? "font-semibold underline decoration-2 underline-offset-8" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default SkillCategoryBtn;
