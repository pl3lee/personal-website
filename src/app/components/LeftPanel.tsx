import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
const LeftPanel = () => {
  return (
    <div className="flex flex-col text-left justify-between sticky">
      <BasicInfo />
      <Navbar />
      <ContactInfo />
    </div>
  );
};

export default LeftPanel;
