"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import BottleConfigurator from "../components/BottleConfigurator";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [customMsg, setCustomMsg] = useState("");

  const handleNavClick = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of sticky header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleInquireCustom = (configDetails: string) => {
    setCustomMsg(configDetails);
  };

  // Scroll detection to highlight active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "portfolio", "creator", "contact"];
      const scrollPosition = window.scrollY + 120; // offset buffer

      // If scrolled to top, set to hero
      if (window.scrollY < 100) {
        setActiveSection("hero");
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />
      <main className="flex-grow">
        <Hero onCTAQuery={handleNavClick} />
        <Services />
        <Portfolio />
        <BottleConfigurator onInquireCustom={handleInquireCustom} />
        <Contact customMessage={customMsg} />
      </main>
      <Footer onNavClick={handleNavClick} />
    </>
  );
}
