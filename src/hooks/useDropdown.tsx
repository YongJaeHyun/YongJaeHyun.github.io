import { useState } from "react";

const useDropdown = (initValue?: boolean) => {
  const [isClicked, setIsClicked] = useState(initValue || false);

  const toggleIsClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return { isClicked, toggleIsClicked };
};

export default useDropdown;
