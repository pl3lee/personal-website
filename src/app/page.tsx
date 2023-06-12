import Image from "next/image";
import LeftPanel from "./components/LeftPanel";

export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-blue-950 text-white flex font-sans justify-between">
      <LeftPanel />
    </main>
  );
}
