"use client";
import Nav from "@/features/home/Nav";
import { useEffect, useState } from "react";

import { navLinks } from "@/features/home/enum/nav-links";
import Section from "@/components/section/Section";
import Home from "./parts/Home";
import Technology from "./parts/Technology";

export default function Index() {
  let [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let about = document.getElementById(navLinks.about.id);
    let technology = document.getElementById(navLinks.technology.id);

    let sections = [about, technology];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == navLinks.about.id) {
            setActiveSection(navLinks.about.id);
          }
          if (entry.target.id == navLinks.technology.id) {
            setActiveSection(navLinks.technology.id);
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Nav activeSection={activeSection} />
      <Section id={navLinks.home.id}>
        <Home />
      </Section>
      <Section id={navLinks.about.id}>
        <Technology />
      </Section>
      {/* <div
        id={navLinks.home.id}
        className="w-screen h-full bg-blue-500 flex flex-col justify-center items-center"
      >
        <div className="w-screen h-screen bg-blue-500 flex flex-col justify-center items-center">
          <h1 className="text-white text-6xl">home 1</h1>
        </div>
        <div
          // id={navLinks.home.id}
          className="w-screen h-screen bg-blue-500 flex flex-col justify-center items-center"
        >
          <h1 className="text-blue text-6xl">home 2</h1>
        </div>
        <h1 className="text-white text-6xl">home 1</h1>
      </div> */}
      {/* <div
        id={navLinks.activity.id}
        className="w-screen h-screen bg-white flex flex-col justify-center items-center"
      >
        <h1 className="text-red text-6xl">activity</h1>
      </div>
      <div
        id={navLinks.us.id}
        className="w-screen h-screen bg-white flex flex-col justify-center items-center"
      >
        <h1 className="text-red text-6xl">why</h1>
      </div> */}
    </div>
  );
}
