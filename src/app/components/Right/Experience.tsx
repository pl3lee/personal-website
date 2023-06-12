const Experience = ({ exp }: any) => {
  return (
    <div className="flex w-full">
      <div className="flex-auto w-1/4 opacity-50">{exp.date}</div>
      <div className="flex-auto w-3/4">
        <div className="flex flex-col">
          <div className="opacity-100">{exp.position}</div>
          <div className="opacity-100">{exp.company}</div>
          <div className="opacity-50">{exp.location}</div>
          <div className="opacity-50">{exp.description}</div>
          <ul>
            {exp.skills.map((skill: any, index: number) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Experience;
