"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENGLISH");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", id: "about" },
    {
      name: "SERVICES",
      id: "services",
      hasDropdown: true,
      subItems: [
        { name: "Perfume Bottle Design", id: "services" },
        { name: "Zamac Cap Creation", id: "services" },
        { name: "Packaging & Boxes", id: "services" },
        { name: "Supply Chain Support", id: "services" },
      ],
    },
    { name: "OUR WORK", id: "portfolio" },
    { name: "PRODUCTS", id: "creator" },
    { name: "BLOG", id: "blog" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-900/5 py-3"
          : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("hero");
          }}
          className="flex items-center gap-3 group"
        >
          {/* Logo SVG Icon - Elegant Anisha Purple Logo */}
          <div className="w-8 h-9 relative flex items-center justify-center">
            <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#522578]">
              <path d="M20 0L40 44H28L20 25L12 44H0L20 0Z" fill="currentColor" opacity="0.9" />
              <path d="M20 12L31 36H24L20 26L16 36H9L20 12Z" fill="#C3A552" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-serif tracking-[0.18em] font-semibold text-[#522578] leading-none">
              ANISHA
            </span>
            <span className="text-[9px] tracking-[0.25em] font-sans font-medium text-gray-500 uppercase mt-1">
              INTERNATIONAL DWC
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseLeave={() => setServicesOpen(false)}>
              {link.hasDropdown ? (
                <button
                  onClick={() => onNavClick(link.id)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`flex items-center gap-1.5 text-xs font-sans font-medium tracking-[0.15em] transition-colors py-2 cursor-pointer uppercase ${
                    activeSection === link.id ? "text-[#522578]" : "text-gray-700 hover:text-[#522578]"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#522578] transition-transform group-hover:rotate-180" />
                </button>
              ) : (
                <button
                  onClick={() => onNavClick(link.id)}
                  className={`text-xs font-sans font-medium tracking-[0.15em] transition-colors py-2 cursor-pointer uppercase ${
                    activeSection === link.id ? "text-[#522578]" : "text-gray-700 hover:text-[#522578]"
                  }`}
                >
                  {link.name}
                </button>
              )}

              {/* Dropdown Menu for SERVICES */}
              {link.hasDropdown && servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {link.subItems?.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => {
                        onNavClick(sub.id);
                        setServicesOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs tracking-wider text-gray-600 hover:bg-[#FAF2FA] hover:text-[#522578] transition-colors"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Button / Language */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => {
              const langs = ["ENGLISH", "ARABIC", "FRENCH"];
              const idx = (langs.indexOf(currentLang) + 1) % langs.length;
              setCurrentLang(langs[idx]);
            }}
            className="px-4 py-1.5 border border-[#522578]/40 hover:border-[#522578] text-[#522578] hover:bg-[#522578] hover:text-white transition-all duration-300 text-[11px] font-sans font-semibold tracking-widest uppercase cursor-pointer rounded-xs"
          >
            {currentLang}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => {
              const langs = ["ENGLISH", "ARABIC"];
              const idx = (langs.indexOf(currentLang) + 1) % langs.length;
              setCurrentLang(langs[idx]);
            }}
            className="px-2.5 py-1 border border-[#522578]/40 text-[#522578] text-[10px] tracking-wider uppercase"
          >
            {currentLang}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#522578] p-1 focus:outline-none"
            aria-label="Toggle menu"
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
            className="lg:hidden border-b border-gray-100 bg-white"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsOpen(false);
                    onNavClick(link.id);
                  }}
                  className="text-left text-sm tracking-[0.15em] font-medium text-gray-800 hover:text-[#522578] transition-colors py-2 uppercase"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavClick("contact");
                }}
                className="w-full mt-2 py-3 bg-[#522578] text-white text-center text-xs tracking-widest uppercase font-medium rounded-xs"
              >
                BOOK A FREE DISCOVERY MEETING
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

