import About from "./About";
import Experiences from "./Experiences";

const RightPanel = () => {
  return (
    <div className="flex flex-col text-left md:pt-[6rem] md:pb-[6rem] md:w-1/2 md:ml-10 md:gap-10 w-full gap-16">
      <About />
      <Experiences />
    </div>
  );
};

export default RightPanel;
