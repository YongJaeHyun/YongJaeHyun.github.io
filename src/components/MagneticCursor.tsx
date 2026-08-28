import { useEffect, useRef } from "react";

const WIDTH = 20;
const HEIGHT = 20;
const MAX_SCALE = 4;
const MOVE_STEP = 0.1;
const SCALE_STEP = 0.3;

const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0, scale: 1 });
  const current = useRef({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX - WIDTH / 2;
      mouse.current.y = e.clientY - HEIGHT / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * MOVE_STEP;
      current.current.y += (mouse.current.y - current.current.y) * MOVE_STEP;
      current.current.scale += (mouse.current.scale - current.current.scale) * SCALE_STEP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) scale(${current.current.scale})`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (e.button === 0) {
        mouse.current.scale = MAX_SCALE;
      }
    };

    const handlePointerUp = () => {
      mouse.current.scale = 1;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-50 bg-white mix-blend-exclusion rounded-full`}
      style={{
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
      }}
    ></div>
  );
};

export default MagneticCursor;
