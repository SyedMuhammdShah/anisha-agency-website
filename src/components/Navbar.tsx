"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Creator", id: "creator" },
    { name: "Inquiry", id: "contact" },
  ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "AR", label: "العربية" },
    { code: "FR", label: "Français" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-dark-bg/85 backdrop-blur-md border-b border-dark-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-serif tracking-[0.25em] font-light text-foreground flex items-center hover:opacity-80 transition-opacity"
        >
          ANISHA
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark ml-2 animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className={`text-sm tracking-widest font-light hover:text-gold-light transition-colors relative py-1 cursor-pointer ${
                activeSection === link.id ? "text-gold-light" : "text-foreground/80"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-light"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Language & CTA Button */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-xs tracking-wider text-foreground/80 hover:text-gold-light transition-colors py-2 cursor-pointer"
            >
              <Globe className="w-4.5 h-4.5 text-gold-dark" />
              <span>{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-32 glass-panel rounded-lg shadow-xl py-1 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs tracking-wider font-light hover:bg-gold-dark/10 transition-colors ${
                        currentLang === lang.code ? "text-gold-light font-medium" : "text-foreground/80"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => onNavClick("contact")}
            className="px-5 py-2.5 rounded-full border border-gold-dark/40 hover:border-gold-light text-xs tracking-widest text-gold-light hover:bg-gold-light/5 transition-all duration-300 font-light cursor-pointer"
          >
            CONSULTATION
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Button */}
          <button
            onClick={() => {
              const nextIndex = (languages.findIndex(l => l.code === currentLang) + 1) % languages.length;
              setCurrentLang(languages[nextIndex].code);
            }}
            className="flex items-center gap-1 text-xs text-foreground/80"
          >
            <Globe className="w-4 h-4 text-gold-dark" />
            <span>{currentLang}</span>
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-gold-light transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsOpen(false);
                    onNavClick(link.id);
                  }}
                  className="text-left text-lg tracking-widest font-light text-foreground/90 hover:text-gold-light transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavClick("contact");
                }}
                className="w-full py-3 rounded-lg border border-gold-dark/40 hover:border-gold-light text-center text-sm tracking-widest text-gold-light hover:bg-gold-light/5 transition-all duration-300 font-light cursor-pointer"
              >
                BOOK CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
