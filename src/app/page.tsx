import Image from "next/image";
import LeftPanel from "./components/Left/LeftPanel";
import RightPanel from "./components/Right/RightPanel";

export default function Home() {
  return (
    <main className="min-h-screen px-[1rem] py-[3rem] lg:px-[4rem] max-w-screen bg-slate-800 text-white flex flex-col lg:flex-row font-sans justify-center gap-40 scroll-smooth">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}
