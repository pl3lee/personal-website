import Skill from "./Skill";

const Experience = ({ exp }: any) => {
  return (
    <div>
      <ExperienceSmall exp={exp} />
      <ExperienceLarge exp={exp} />
    </div>
  );
};

const ExperienceSmall = ({ exp }: any) => {
  return (
    <div className="md:hidden flex flex-col w-full gap-3">
      <div className="opacity-50 text-lg">{exp.date}</div>
      <div className="text-xl font-bold">{exp.position}</div>
      <div className="opacity-50 text-lg">{exp.company}</div>
      <div className="opacity-50 text-lg">{exp.location}</div>
      <div className="opacity-50 text-sm">{exp.description}</div>
      <ul className="flex items-center flex-wrap">
        {exp.skills.map((skill: any, index: number) => {
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

const ExperienceLarge = ({ exp }: any) => {
  return (
    <div className="hidden md:flex w-full gap-3">
      <div className="opacity-50 text-lg">{exp.date}</div>
      <div className="text-xl font-bold">{exp.position}</div>
      <div className="opacity-50 text-lg">{exp.company}</div>
      <div className="opacity-50 text-lg">{exp.location}</div>
      <div className="opacity-50 text-sm">{exp.description}</div>
      <ul className="flex items-center flex-wrap">
        {exp.skills.map((skill: any, index: number) => {
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
export default Experience;
