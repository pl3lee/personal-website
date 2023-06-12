"use client";
import Experience from "./Experience";
import experiencesjson from "../../experiences.json";
import { useState } from "react";

const Experiences = () => {
  const [experiences, setExperiences] = useState<any>(
    experiencesjson.experiences
  );

  return (
    <ul>
      {experiences.map((experience: any, index: number) => (
        <li key={index} className="mb-8 exp">
          <a href={experience.url} target="_blank">
            <Experience exp={experience} />
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Experiences;
