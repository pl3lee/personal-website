interface SkillProps {
  text: string;
}

const Skill = ({ text }: SkillProps) => {
  return (
    <div className="text-teal-300 mr-5 bg-teal-400/10 rounded-3xl px-3 py-1 font-medium leading-5 text-center">
      {text}
    </div>
  );
};
export default Skill;
