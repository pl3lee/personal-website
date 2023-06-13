import useMousePosition from "../hooks/useMousePosition";

const Radial = () => {
  const mousePosition = useMousePosition();
  const { x, y } = mousePosition;
  return (
    <div
      className="hidden lg:block inset-0 z-10 transition duration-300 lg:fixed mouse-radial"
      style={{ top: `${y}px`, left: `${x}px` }}
    ></div>
  );
};

export default Radial;
