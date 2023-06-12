"use client";
import Experience from "./Experience";
import experiencesjson from "../../experiences.json";
import { useState } from "react";

const Experiences = () => {
  const [experiences, setExperiences] = useState<any>(
    experiencesjson.experiences
  );

  return (
    <div>
      <div className="small-section-title">Experiences</div>
      <ul>
        {experiences.map((experience: any, index: number) => (
          <li key={index} className="mb-8 exp">
            <a href={experience.url} target="_blank">
              <Experience exp={experience} />
            </a>
          </li>
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
export default Experiences;
