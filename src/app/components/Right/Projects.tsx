"use client";
import Skill from "./Skill";
import projectsjson from "../../projects.json";
import { useState } from "react";
import SmallSectionTitle from "./SmallSectionTitle";
const Projects = () => {
  const [projects, setProjects] = useState<any>(projectsjson.projects);
  return (
    <div id="projects" className="section">
      <SmallSectionTitle title="Projects" />
      <ul className="pl-0">
        {projects.map((project: any, index: number) => (
          <li key={index} className="mb-8 exp hover-element pl-0">
            <a href={project.url} target="_blank">
              <Project proj={project} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Project = ({ proj }: any) => {
  return (
    <div>
      <ProjectSmall proj={proj} />
      <ProjectLarge proj={proj} />
    </div>
  );
};

const ProjectSmall = ({ proj }: any) => {
  return (
    <div className="lg:hidden flex flex-col w-full gap-3">
      <div className="text-xl font-bold">{proj.name}</div>
      <div className="opacity-50 text-sm">{proj.description}</div>
      <ul className="flex items-center flex-wrap">
        {proj.skills.map((skill: any, index: number) => {
          return (
            <li key={index}>
              <Skill text={skill} />
            </li>
          );
        })}
      </ul>
      {proj.img ? (
        <img
          src={proj.img}
          alt={proj.name}
          className="object-cover w-1/2 h-auto"
        />
      ) : null}
    </div>
  );
};

const ProjectLarge = ({ proj }: any) => {
  return (
    <div className="hidden lg:flex w-full gap-3 p-3">
      <div className="w-1/4">
        <img
          src={proj.img}
          alt={proj.name}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="text-xl font-bold">{proj.name}</div>
        <div className="opacity-50 text-sm">{proj.description}</div>
        <ul className="flex items-center flex-wrap">
          {proj.skills.map((skill: any, index: number) => {
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
