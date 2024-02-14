import About from "./About";
import Academics from "./Academics";
import Experiences from "./Experiences";
import FreelanceProjects from "./FreelanceProjects";
import Projects from "./Projects";
import info from "@/app/info.json"

const getInfo = async () => {
  return info;
};

const RightPanel = async () => {
  const info = await getInfo();
  return (
    <div className="flex flex-col text-left lg:pt-[6rem] lg:pb-[6rem] lg:w-2/3 lg:gap-72 w-full gap-16">
      <About about={info.about} />
      <Experiences experiences={info.experiences} />
      <FreelanceProjects projects={info.freelanceProjects} />
      <Projects projects={info.projects} />
      <Academics academics={info.academics} />
    </div>
  );
};

export default RightPanel;
