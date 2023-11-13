import About from "./About";
import Academics from "./Academics";
import Experiences from "./Experiences";
import FreelanceProjects from "./FreelanceProjects";
import Projects from "./Projects";

const getInfo = async () => {
  const response = await fetch(
    "https://json-bucket.vercel.app/public-api/bucket?bucketID=18ae571d-d098-4676-854a-dd334888a11c",
    { next: { revalidate: 0 } }
  );
  const data = await response.json();
  return data;
};

const RightPanel = async () => {
  const info = await getInfo();
  console.log(info);
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
