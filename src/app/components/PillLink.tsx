const PillLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <a
      className="text-white bg-teal-500 rounded-full px-6 py-2 font-medium leading-5 text-center mb-5 lg:mb-0 hover:bg-teal-600 focus:outline-none focus:bg-teal-600 transition duration-150 ease-in-out h-9"
      href={link}
      target="_blank"
    >
      {text}
    </a>
  );
};

export default PillLink;
