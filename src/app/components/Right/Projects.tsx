import projectsjson from "../../projects.json";
import { useState } from "react";
import Project from "./Project";
const Projects = () => {
  const [projects, setProjects] = useState<any>(projectsjson.projects);
  return (
    <div>
      <ul>
        {projects.map((project: any, index: number) => (
          <li key={index} className="mb-8 exp">
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
