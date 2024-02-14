import SmallSectionTitle from "./SmallSectionTitle";
import Skill from "./Skill";
import { ExperienceInterface } from "@/app/interfaces/experiences";

interface ExperienceProps {
  exp: ExperienceInterface;
}

const Experiences = ({
  experiences,
}: {
  experiences: ExperienceInterface[];
}) => {
  if (!experiences) {
    return <div></div>;
  } else {
    return (
      <section id="experiences" className="section">
        <SmallSectionTitle title="Experiences" />
        <ul className="list-none pl-0">
          {experiences?.map((experience: ExperienceInterface, index: number) => (
            <div key={experience.company}>
              <li className="">
                {experience.samePage ? (
                  <a href={experience.url}>
                    <Experience exp={experience} />
                  </a>
                ) : (
                  <a href={experience.url} target="_blank">
                    <Experience exp={experience} />
                  </a>
                )}
              </li>
            </div>
          ))}
        </ul>
        <div className="text-xl resume-link">
          <a href="/resume.pdf" target="_blank">
            View my Résumé
          </a>
        </div>
      </section>
    );
  }
};

const Experience = ({ exp }: ExperienceProps) => {
  return (
    <div className="mb-8 exp pl-0">
      <ExperienceSmall exp={exp} />
      <ExperienceLarge exp={exp} />
    </div>
  );
};

const ExperienceSmall = ({ exp }: ExperienceProps) => {
  return (
    <div className="lg:hidden flex flex-col w-full gap-3">
      <div className="opacity-50 text-lg">
        {exp.date2 ? `${exp.date2}, ` : null} {exp.date}
      </div>
      <h2 className="text-xl font-bold">{exp.position}</h2>

      <div className="opacity-50 text-lg">{exp.company}</div>
      <div className="opacity-50 text-lg">{exp.location}</div>
      <div className="opacity-50 text-sm">{exp.description}</div>
      <ul className="flex items-center flex-wrap">
        {exp.skills.map((skill: string, index: number) => {
          return (
            <li key={skill}>
              <Skill text={skill} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ExperienceLarge = ({ exp }: ExperienceProps) => {
  return (
    <div className="hidden lg:flex w-full gap-3 p-3 hover-element">
      <div className="w-1/4 flex flex-col">
        <div className="opacity-50 text-sm">{exp.date}</div>
        {exp.date2 ? (
          <div className="opacity-50 text-sm">{exp.date2}</div>
        ) : null}
      </div>
      <div className="w-3/4 flex flex-col">
        <h2 className="text-lg font-bold">{exp.position}</h2>
        <div className="opacity-50 text-lg">
          {exp.company === "NA" ? "" : exp.company}
        </div>
        <div className="opacity-50 text-lg">{exp.location}</div>
        <div className="opacity-50 text-sm">{exp.description}</div>
        <ul className="flex items-center flex-wrap">
          {exp.skills.map((skill: string, index: number) => {
            return (
              <li className="mt-3" key={skill}>
                <Skill text={skill} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
