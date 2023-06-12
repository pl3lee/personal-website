import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
const LeftPanel = () => {
  return (
    <header className="flex flex-col md:text-left md:justify-between sticky md:w-1/2 md:max-h-screen md:top-0 md:pt-[6rem] md:pb-[6rem] md:mr-10 w-full gap-2">
      <BasicInfo />
      <Navbar />
      <ContactInfo />
    </header>
  );
};

export default LeftPanel;
