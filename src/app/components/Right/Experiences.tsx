"use client";
import experiencesjson from "../../experiences.json";
import SmallSectionTitle from "./SmallSectionTitle";
import Skill from "./Skill";
import {
  ExperiencesInterface,
  ExperienceInterface,
} from "@/app/interfaces/experiences";

interface ExperienceProps {
  exp: ExperienceInterface;
}

const Experiences = () => {
  const { experiences } = experiencesjson;

  return (
    <div id="experiences" className="section">
      <SmallSectionTitle title="Experiences" />
      <ul className="list-none pl-0">
        {experiences.map((experience: ExperienceInterface, index: number) => (
          <div key={index}>
            <li key={index} className="mb-8 exp pl-0 lg:hidden">
              <Experience exp={experience} />
            </li>
            <li
              key={index}
              className="mb-8 exp pl-0 hidden lg:block hover-element"
            >
              <a href={experience.url} target="_blank">
                <Experience exp={experience} />
              </a>
            </li>
          </div>
        ))}
      </ul>
      <div className="text-xl resume-link">
        <a
          href="https://raw.githubusercontent.com/pl3lee/Resume/f29e9658f91f3ea3db5eb888e3d6cbd8b64823d4/resumeCombined.pdf"
          target="_blank"
        >
          View my Résumé
        </a>
      </div>
    </div>
  );
};

const Experience = ({ exp }: ExperienceProps) => {
  return (
    <div>
      <ExperienceSmall exp={exp} />
      <ExperienceLarge exp={exp} />
    </div>
  );
};

const ExperienceSmall = ({ exp }: ExperienceProps) => {
  return (
    <div className="lg:hidden flex flex-col w-full gap-3">
      <div className="opacity-50 text-lg">{exp.date}</div>
      <a href={exp.url} target="_blank">
        <div className="text-xl font-bold">{exp.position}</div>
      </a>

      <div className="opacity-50 text-lg">{exp.company}</div>
      <div className="opacity-50 text-lg">{exp.location}</div>
      <div className="opacity-50 text-sm">{exp.description}</div>
      <ul className="flex items-center flex-wrap">
        {exp.skills.map((skill: string, index: number) => {
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

const ExperienceLarge = ({ exp }: ExperienceProps) => {
  return (
    <div className="hidden lg:flex w-full gap-3 p-3">
      <div className="w-1/4">
        <div className="opacity-50 text-lg">{exp.date}</div>
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="text-xl font-bold">{exp.position}</div>
        <div className="opacity-50 text-lg">{exp.company}</div>
        <div className="opacity-50 text-lg">{exp.location}</div>
        <div className="opacity-50 text-sm">{exp.description}</div>
        <ul className="flex items-center flex-wrap">
          {exp.skills.map((skill: string, index: number) => {
            return (
              <li className="mt-3" key={index}>
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
