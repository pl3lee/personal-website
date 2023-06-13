import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";

const RightPanel = () => {
  return (
    <div className="flex flex-col text-left lg:pt-[6rem] lg:pb-[6rem] lg:w-1/2 lg:ml-10 lg:gap-10 w-full gap-16">
      <About />
      <Experiences />
      <Projects />
    </div>
  );
};

export default RightPanel;
