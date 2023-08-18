"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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
      {/* <Link
        href="#about"
        scroll={false}
        className={
          "nav-link" + (activeSection === "about" ? " active-section" : "")
        }
      >
        <h1 className="flex flex-row gap-2 items-center">
          About
          <FiArrowRight
            className={`${activeSection === "about" ? "" : "hidden"}`}
          />
        </h1>
      </Link> */}
      <NavLink
        sectionTitle="About"
        sectionClassName="about"
        activeSection={activeSection}
      />
      {/* <Link
        href="#experiences"
        scroll={false}
        className={
          "nav-link" +
          (activeSection === "experiences" ? " active-section" : "")
        }
      >
        <h1>Experiences</h1>
      </Link> */}
      <NavLink
        sectionTitle="Experiences"
        sectionClassName="experiences"
        activeSection={activeSection}
      />
      {/* <Link
        href="#freelance-projects"
        scroll={false}
        className={
          "nav-link" +
          (activeSection === "freelance-projects" ? " active-section" : "")
        }
      >
        <h1>Freelance Projects</h1>
      </Link> */}
      <NavLink
        sectionTitle="Freelance Projects"
        sectionClassName="freelance-projects"
        activeSection={activeSection}
      />
      {/* <Link
        href="#projects"
        scroll={false}
        className={
          "nav-link" + (activeSection === "projects" ? " active-section" : "")
        }
      >
        <h1>Projects</h1>
      </Link> */}
      <NavLink
        sectionTitle="Projects"
        sectionClassName="projects"
        activeSection={activeSection}
      />
      {/* <Link
        href="#academics"
        scroll={false}
        className={
          "nav-link" + (activeSection === "academics" ? " active-section" : "")
        }
      >
        <h1>Academics</h1>
      </Link> */}
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
      <h1 className="flex flex-row gap-2 items-center">
        {sectionTitle}
        <FiArrowRight
          className={`${activeSection === sectionClassName ? "" : "hidden"}`}
        />
      </h1>
    </Link>
  );
};

export default Navbar;
