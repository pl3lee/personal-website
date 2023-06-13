
export interface ProjectsInterface {
  projects: ProjectInterface[];
}

export interface ProjectInterface {
  name: string;
  url: string;
  description: string;
  img: string;
  skills: string[];
}
