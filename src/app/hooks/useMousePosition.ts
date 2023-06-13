import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({
    pageX: 0,
    pageY: 0,
  });

  const updatePosition = (event) => {
    const { pageX, pageY} = event;

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