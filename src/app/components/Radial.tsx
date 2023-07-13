"use client";
import { useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const Radial = () => {
  const mousePositionHook = useMousePosition();
  const [mousePosition, setMousePosition] = useState({ pageX: 0, pageY: 0 });
  const { pageX, pageY } = mousePositionHook;
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    setMousePosition(mousePositionHook);
    setScrollY(window.scrollY);
  }, [mousePositionHook]);
  if (mousePosition) {
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
  } else {
    return <div></div>;
  }
};

export default Radial;
