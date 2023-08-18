
export interface ExperiencesInterface {
  experiences: ExperienceInterface[];
}

export interface ExperienceInterface {
  position: string;
  company: string;
  location: string;
  date: string;
  url: string;
  description: string;
  skills: string[];
  samePage: boolean;
}
