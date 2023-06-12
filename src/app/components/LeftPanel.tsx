import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
const LeftPanel = () => {
  return (
    <div className="flex flex-col text-left justify-between sticky">
      <BasicInfo />
      <Navbar />
    </div>
  );
};

export default LeftPanel;
