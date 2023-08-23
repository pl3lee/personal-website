import { ProjectInterface } from "../interfaces/projects";
import Skill from "./Right/Skill";
import PillLink from "./PillLink";

interface ProjectProps {
  proj: ProjectInterface;
}
const Project = ({ proj }: ProjectProps) => {
  return (
    <div className="mb-20 exp pl-0">
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
          className="object-cover w-full max-h-[400px] max-w-screen-sm"
        />
      ) : null}
      <h2 className="text-xl font-bold">{proj.name}</h2>
      <div className="flex gap-3">
        {proj.demoUrl != "" ? (
          <PillLink text="Demo" link={proj.demoUrl} />
        ) : null}
        {proj.codeUrl != "" ? (
          <PillLink text="Code" link={proj.codeUrl} />
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
    <div className="hidden lg:flex w-full gap-3 p-3 hover-element">
      <div className="w-1/4">
        <img
          src={proj.img}
          alt={proj.name}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-3/4 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{proj.name} </h2>
          <div className="flex gap-3">
            {proj.demoUrl != "" ? (
              <PillLink text="Demo" link={proj.demoUrl} />
            ) : null}
            {proj.codeUrl != "" ? (
              <PillLink text="Code" link={proj.codeUrl} />
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

export default Project;
