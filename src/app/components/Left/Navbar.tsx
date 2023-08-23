"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections: HTMLElement[] = Array.from(
        document.querySelectorAll(".section")
      );
      let scrollPosition = 0;
      if (typeof window !== "undefined") {
        scrollPosition = window.scrollY;
      }
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
        setActiveSection("freelance-projects");
      } else if (
        scrollPosition <
        sections[3].offsetTop + sections[3].scrollHeight * 0.6
      ) {
        setActiveSection("projects");
      } else if (
        scrollPosition <
        sections[4].offsetTop + sections[4].scrollHeight * 0.6
      ) {
        setActiveSection("academics");
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <nav className="lg:flex flex-col gap-3 hidden lg:mb-20">
      <NavLink
        sectionTitle="About"
        sectionClassName="about"
        activeSection={activeSection}
      />
      <NavLink
        sectionTitle="Experiences"
        sectionClassName="experiences"
        activeSection={activeSection}
      />
      <NavLink
        sectionTitle="Freelance Projects"
        sectionClassName="freelance-projects"
        activeSection={activeSection}
      />
      <NavLink
        sectionTitle="Projects"
        sectionClassName="projects"
        activeSection={activeSection}
      />
      <NavLink
        sectionTitle="Academics"
        sectionClassName="academics"
        activeSection={activeSection}
      />
    </nav>
  );
};

const NavLink = ({
  sectionTitle,
  sectionClassName,
  activeSection,
}: {
  sectionTitle: string;
  sectionClassName: string;
  activeSection: string;
}) => {
  return (
    <Link
      href={`#${sectionClassName}`}
      scroll={false}
      className={
        "nav-link" +
        (activeSection === sectionClassName ? " active-section" : "")
      }
    >
      <h1 className="flex flex-row gap-4 items-center">
        <AiOutlineRight
          className={`${
            activeSection === sectionClassName ? "opacity-100" : "opacity-0"
          }  ${activeSection === sectionClassName ? "ml-4" : ""}  ${
            activeSection === sectionClassName
              ? "translate-x-2"
              : "translate-x-0"
          } transition-all duration-500`}
        />
        {sectionTitle}
      </h1>
    </Link>
  );
};

export default Navbar;
