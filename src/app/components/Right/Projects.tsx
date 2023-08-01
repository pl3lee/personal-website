import Image from "next/image";
import Skill from "./Skill";
import SmallSectionTitle from "./SmallSectionTitle";
import { ProjectInterface } from "@/app/interfaces/projects";
interface ProjectProps {
  proj: ProjectInterface;
}

const Projects = ({ projects }: { projects: ProjectInterface[] }) => {
  return (
    <div id="projects" className="section">
      <SmallSectionTitle title="Projects" />
      <ul className="pl-0">
        {projects.map((project: ProjectInterface, index: number) => (
          <div key={index}>
            <li className="mb-20 exp lg:hidden pl-0">
              <Project proj={project} />
            </li>

            <li className="hidden mb-20 exp lg:block pl-0 hover-element">
              <Project proj={project} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

const Project = ({ proj }: ProjectProps) => {
  return (
    <div>
      <ProjectSmall proj={proj} />
      <ProjectLarge proj={proj} />
    </div>
  );
};

const ProjectSmall = ({ proj }: ProjectProps) => {
  return (
    <div className="lg:hidden flex flex-col w-full gap-3">
      {proj.img ? (
        <img
          src={proj.img}
          alt={proj.name}
          className="object-cover w-auto max-h-[300px]"
        />
      ) : null}
      <div className="text-xl font-bold">{proj.name}</div>
      <div className="flex gap-3">
        {proj.demoUrl != "" ? (
          <a
            className="text-white bg-teal-500 rounded-full px-6 py-2 font-medium leading-5 text-center mb-5 lg:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition duration-150 ease-in-out"
            href={proj.demoUrl}
            target="_blank"
          >
            Demo
          </a>
        ) : null}
        {proj.codeUrl != "" ? (
          <a
            className="text-white bg-teal-500 rounded-full px-6 py-2 font-medium leading-5 text-center mb-5 lg:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition duration-150 ease-in-out"
            href={proj.codeUrl}
            target="_blank"
          >
            Code
          </a>
        ) : null}
      </div>
      <div className="opacity-50 text-sm">{proj.description}</div>
      <ul className="flex items-center flex-wrap">
        {proj.skills.map((skill: string, index: number) => {
          return (
            <li key={index}>
              <Skill text={skill} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ProjectLarge = ({ proj }: ProjectProps) => {
  return (
    <div className="hidden lg:flex w-full gap-3 p-3">
      <div className="w-1/4">
        <img
          src={proj.img}
          alt={proj.name}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-3/4 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-xl font-bold">{proj.name} </span>
          <div className="flex gap-3">
            {proj.demoUrl != "" ? (
              <a
                className="text-white bg-teal-500 rounded-full px-6 py-2 font-medium leading-5 text-center mb-5 lg:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition duration-150 ease-in-out"
                href={proj.demoUrl}
                target="_blank"
              >
                Demo
              </a>
            ) : null}
            {proj.codeUrl != "" ? (
              <a
                className="text-white bg-teal-500 rounded-full px-6 py-2 font-medium leading-5 text-center mb-5 lg:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition duration-150 ease-in-out"
                href={proj.codeUrl}
                target="_blank"
              >
                Code
              </a>
            ) : null}
          </div>
        </div>

        <div className="opacity-50 text-sm">{proj.description}</div>
        <ul className="flex items-center flex-wrap">
          {proj.skills.map((skill: string, index: number) => {
            return (
              <li className="mt-3" key={index}>
                <Skill text={skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
