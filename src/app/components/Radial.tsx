"use client";
import useMousePosition from "../hooks/useMousePosition";

const Radial = () => {
  const mousePosition = useMousePosition();
  const { pageX, pageY } = mousePosition;
  let scrollY = 0;
  if (typeof window !== "undefined") {
    scrollY = window.scrollY;
  }
  return (
    <div
      className="inset-0 transition duration-300 lg:fixed mouse-radial h-full"
      style={{
        top: `0`,
        left: `0`,
        zIndex: -1,
        background: `radial-gradient(600px at ${pageX}px ${
          pageY - scrollY
        }px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default Radial;
