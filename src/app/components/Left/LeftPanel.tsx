import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
const LeftPanel = () => {
  return (
    <header className="flex flex-col lg:text-left lg:justify-start sticky lg:w-1/3 lg:max-h-screen lg:top-0 lg:pt-[6rem] lg:pb-[6rem] w-full gap-2">
      <BasicInfo />
      <Navbar />
      <ContactInfo />
    </header>
  );
};

export default LeftPanel;
