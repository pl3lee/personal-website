import Image from "next/image";
import LeftPanel from "./components/Left/LeftPanel";
import RightPanel from "./components/Right/RightPanel";

export default function Home() {
  return (
    <main className="min-h-screen px-[13rem] bg-blue-950 text-white flex font-sans justify-center">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}
