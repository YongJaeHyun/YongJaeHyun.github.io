import { RefObject, useCallback, useEffect, useRef } from "react";

const useTypingEffect = (
  ref: RefObject<HTMLDivElement>,
  introduction: string,
  interval: number,
  slideIdx: number,
  delay: number = 0
) => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const idxRef = useRef<number>(0);

  const addText = useCallback(() => {
    if (idxRef.current >= introduction.length) {
      clearInterval(intervalRef.current);
    } else {
      const currentText = introduction[idxRef.current++];
      ref.current!.innerHTML += currentText === "\n" ? "<br />" : currentText;
    }
  }, [ref, introduction]);

  useEffect(() => {
    if (!ref.current) return;
    if (slideIdx > 0) return;
    ref.current!.innerHTML = "";
    idxRef.current = 0;

    setTimeout(() => {
      intervalRef.current = setInterval(addText, interval);
    }, delay);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [addText, delay, interval, slideIdx, ref]);
};

export default useTypingEffect;
