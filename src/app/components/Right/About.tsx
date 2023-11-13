import SmallSectionTitle from "./SmallSectionTitle";

const About = ({ about }: { about: string }) => {
  return (
    <section className="flex flex-col gap-12 section" id="about">
      <SmallSectionTitle title="About" />
      <p className="opacity-50 text-base lg:text-xl">{about}</p>
    </section>
  );
};

export default About;
