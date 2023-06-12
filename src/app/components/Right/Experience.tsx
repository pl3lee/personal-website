const Experience = ({ exp }: any) => {
  return (
    <div className="flex w-full">
      <div className="flex-auto w-1/4 opacity-50">{exp.date}</div>
      <div className="flex-auto w-3/4">
        <div className="flex flex-col">
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
                <li
                  className="text-teal-300 mr-5 bg-teal-400/10 rounded-3xl px-3 py-1 font-medium leading-5 text-center"
                  key={index}
                >
                  {skill}
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
