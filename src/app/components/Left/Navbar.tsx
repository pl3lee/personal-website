"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const scrollPosition = window.scrollY;
      if (
        scrollPosition <
        sections[0].offsetTop + sections[0].scrollHeight * 0.6
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition <
        sections[1].offsetTop + sections[1].scrollHeight * 0.6
      ) {
        setActiveSection("experiences");
      } else if (
        scrollPosition <
        sections[2].offsetTop + sections[2].scrollHeight * 0.6
      ) {
        setActiveSection("projects");
      } else if (
        scrollPosition <
        sections[3].offsetTop + sections[3].scrollHeight * 0.6
      ) {
        setActiveSection("academics");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="lg:flex flex-col gap-3 hidden lg:mb-20">
      <Link
        href="#about"
        scroll={false}
        className={
          "nav-link" + (activeSection === "about" ? " active-section" : "")
        }
      >
        About
      </Link>
      <Link
        href="#experiences"
        scroll={false}
        className={
          "nav-link" +
          (activeSection === "experiences" ? " active-section" : "")
        }
      >
        Experiences
      </Link>
      <Link
        href="#projects"
        scroll={false}
        className={
          "nav-link" + (activeSection === "projects" ? " active-section" : "")
        }
      >
        Projects
      </Link>
      <Link
        href="#academics"
        scroll={false}
        className={
          "nav-link" + (activeSection === "academics" ? " active-section" : "")
        }
      >
        Academics
      </Link>
    </div>
  );
};

export default Navbar;
