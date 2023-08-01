
export interface ProjectsInterface {
  projects: ProjectInterface[];
}

export interface ProjectInterface {
  name: string;
  demoUrl: string;
  codeUrl: string;
  description: string;
  img: string;
  skills: string[];
}
