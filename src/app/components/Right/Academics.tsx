"use client";
import academicsjson from "../../academics.json";
import SmallSectionTitle from "./SmallSectionTitle";
import {
  AcademicsInterface,
  AcademicInterface,
} from "@/app/interfaces/academics";

interface AcademicProps {
  acd: AcademicInterface;
}

const Academics = () => {
  const { academics } = academicsjson;
  return (
    <div className="flex flex-col w-full section" id="academics">
      <SmallSectionTitle title="Academics" />
      <ul className="pl-0">
        {academics.map((academic: AcademicInterface, index: number) => (
          <li key={index} className="mb-8 exp lg:hover-element pl-0">
            <a href={academic.url} target="_blank">
              <Academic acd={academic} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Academic = ({ acd }: AcademicProps) => {
  return (
    <div>
      <AcademicSmall acd={acd} />
      <AcademicLarge acd={acd} />
    </div>
  );
};

const AcademicSmall = ({ acd }: AcademicProps) => {
  return (
    <div className="lg:hidden flex flex-col w-full gap-3">
      <div className="opacity-50 text-base">{acd.date}</div>
      <div className="text-xl font-bold">{acd.name}</div>
      <div className="opacity-50 text-base">{acd.description}</div>
      <div className="opacity-50 text-base">{acd.location}</div>
      <div className="opacity-50 text-base">Major: {acd.major}</div>
      <div className="opacity-50 text-base">Minor: {acd.minor}</div>
      <div className="opacity-50 text-base">Cumulative GPA: {acd.cgpa}</div>
      <div className="opacity-50 text-base">Major Average: {acd.mav}</div>
      {acd.img ? (
        <img
          src={acd.img}
          alt={acd.name}
          className="object-cover w-1/2 h-auto"
        />
      ) : null}
    </div>
  );
};

const AcademicLarge = ({ acd }: AcademicProps) => {
  return (
    <div className="hidden lg:flex w-full gap-3 p-3">
      <div className="w-1/4">
        {acd.img ? (
          <img
            src={acd.img}
            alt={acd.name}
            className="object-cover w-full h-auto"
          />
        ) : null}
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="text-xl font-bold">{acd.name}</div>
        <div className="opacity-50 text-lg">{acd.description}</div>
        <div className="opacity-50 text-lg">{acd.location}</div>
        <div className="opacity-50 text-lg">{acd.date}</div>
        <div className="opacity-50 text-base">Major: {acd.major}</div>
        <div className="opacity-50 text-base">Minor: {acd.minor}</div>
        <div className="opacity-50 text-base">Cumulative GPA: {acd.cgpa}</div>
        <div className="opacity-50 text-base">Major Average: {acd.mav}</div>
      </div>
    </div>
  );
};

export default Academics;
