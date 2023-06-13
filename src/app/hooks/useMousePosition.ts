import { useState, useEffect } from "react";
import React from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    pageX: 0,
    pageY: 0,
  });

  const updatePosition = (event : MouseEvent) => {
    const { pageX, pageY } = event;

    setPosition({
      pageX,
      pageY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return position;
};

export default useMousePosition;