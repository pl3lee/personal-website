
export interface ExperiencesInterface {
  experiences: ExperienceInterface[];
}

export interface ExperienceInterface {
  position: string;
  company: string;
  location: string;
  date: string;
  date2?: string;
  url: string;
  description: string;
  skills: string[];
  samePage: boolean;
}
