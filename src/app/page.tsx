import Image from "next/image";
import LeftPanel from "./components/Left/LeftPanel";
import RightPanel from "./components/Right/RightPanel";

export default function Home() {
  return (
    <main className="min-h-screen px-[1rem] py-[3rem] md:px-[5rem] md:px-[2rem] max-w-screen bg-slate-800 text-white flex flex-col md:flex-row font-sans justify-center gap-40">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}
