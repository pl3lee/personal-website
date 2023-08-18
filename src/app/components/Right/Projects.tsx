import SmallSectionTitle from "./SmallSectionTitle";
import { ProjectInterface } from "@/app/interfaces/projects";
import Project from "../Project";

const Projects = ({ projects }: { projects: ProjectInterface[] }) => {
  return (
    <div id="projects" className="section">
      <SmallSectionTitle title="Projects" />
      <ul className="pl-0">
        {projects.map((project: ProjectInterface, index: number) => (
          <div key={index}>
            <li>
              <Project proj={project} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
