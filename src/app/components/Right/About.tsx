import SmallSectionTitle from "./SmallSectionTitle";

const About = () => {
  return (
    <section className="flex flex-col gap-12 section" id="about">
      <SmallSectionTitle title="About" />
      <p className="opacity-50 text-base lg:text-xl">
        Hi there! I’m a fourth-year Honours Bachelor of Mathematics student at
        the University of Waterloo, with a double major in Computational
        Mathematics and Combinatorics & Optimization and a minor in Computer
        Science. I am currently interning at Hewlett Packard Enterprise. I also
        have experience working as a Full Stack Developer Intern at the
        University of Waterloo and as a Computer Technician Intern at Bolee
        Machine Tool Ltd. I am proficient in multiple programming languages and
        web development technologies/frameworks. In my free time, I enjoy
        playing badminton, video games, and chess (though I’m still working on
        improving my skills!). I am excited to continue learning and growing in
        my field.
      </p>
    </section>
  );
};

export default About;
