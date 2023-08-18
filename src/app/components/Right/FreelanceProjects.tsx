import SmallSectionTitle from "./SmallSectionTitle";
import { ProjectInterface } from "@/app/interfaces/projects";
import Project from "../Project";

const FreelanceProjects = ({ projects }: { projects: ProjectInterface[] }) => {
  return (
    <div id="freelance-projects" className="section">
      <SmallSectionTitle title="Freelance Projects" />
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

export default FreelanceProjects;
