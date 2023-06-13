"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div className="lg:flex flex-col gap-3 hidden">
      <Link href="#about" scroll={false}>
        About
      </Link>
      <Link href="#experiences" scroll={false}>
        Experiences
      </Link>
      <Link href="#projects" scroll={false}>
        Projects
      </Link>
      <Link href="#academics" scroll={false}>
        Academics
      </Link>
    </div>
  );
};

export default Navbar;
