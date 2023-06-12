import Skill from "./Skill";

const Experience = ({ exp }: any) => {
  return (
    <div className="flex w-full xl:text-sm lg:text-xs">
      <div className="flex-auto w-1/4 opacity-50">{exp.date}</div>
      <div className="flex-auto w-3/4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between align-middle">
            <div className="flex flex-col">
              <div className="opacity-100 text-xl">{exp.position}</div>
              <div className="opacity-100">{exp.company}</div>
            </div>
            <div className="opacity-50 text-right">{exp.location}</div>
          </div>

          <div className="opacity-50">{exp.description}</div>
          <ul className="flex items-center">
            {exp.skills.map((skill: any, index: number) => {
              return (
                <li key={index}>
                  <Skill text={skill} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Experience;
