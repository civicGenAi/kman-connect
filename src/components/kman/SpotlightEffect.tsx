import { useEffect, useRef, useState } from "react";

export const SpotlightEffect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(300px circle at ${e.clientX}px ${e.clientY}px, rgba(240, 168, 0, 0.04), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
};
