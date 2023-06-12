import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
const LeftPanel = () => {
  return (
    <header className="flex flex-col text-left justify-between sticky w-1/2 max-h-screen top-0 pt-[6rem] pb-[6rem] mr-10">
      <BasicInfo />
      <Navbar />
      <ContactInfo />
    </header>
  );
};

export default LeftPanel;
