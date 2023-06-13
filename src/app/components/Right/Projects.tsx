"use client";
import projectsjson from "../../projects.json";
import { useState } from "react";
import Project from "./Project";
import SmallSectionTitle from "./SmallSectionTitle";
const Projects = () => {
  const [projects, setProjects] = useState<any>(projectsjson.projects);
  return (
    <div>
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

export default Projects;
