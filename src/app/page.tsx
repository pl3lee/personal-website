import LeftPanel from "./components/Left/LeftPanel";
import RightPanel from "./components/Right/RightPanel";
import Radial from "./components/Radial";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center align-middle">
      <main className="px-[1rem] py-[3rem] lg:px-[4rem] max-w-screen-2xl text-white flex flex-col lg:flex-row font-sans justify-center gap-20 scroll-smooth">
        <LeftPanel />
        <RightPanel />
      </main>
      <Radial />
    </div>
  );
}
