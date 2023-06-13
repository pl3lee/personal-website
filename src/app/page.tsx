"use client";
import Image from "next/image";
import LeftPanel from "./components/Left/LeftPanel";
import RightPanel from "./components/Right/RightPanel";
import { useState, createContext, useEffect } from "react";
import Radial from "./components/Radial";

export default function Home() {
  return (
    <div className="flex justify-center align-middle">
      <main className="min-h-screen px-[1rem] py-[3rem] lg:px-[4rem] max-w-screen-2xl bg-slate-900 text-white flex flex-col lg:flex-row font-sans justify-center gap-40 scroll-smooth">
        <LeftPanel />
        <RightPanel />
      </main>
      <Radial />
    </div>
  );
}
