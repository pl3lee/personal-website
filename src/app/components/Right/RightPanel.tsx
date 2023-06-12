import About from "./About";
import Experiences from "./Experiences";

const RightPanel = () => {
  return (
    <div className="flex flex-col text-left pt-[6rem] pb-[6rem] w-1/2 ml-10 gap-10">
      <About />
      <Experiences />
    </div>
  );
};

export default RightPanel;
