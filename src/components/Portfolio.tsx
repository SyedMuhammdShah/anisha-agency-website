"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Search, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: {
    materials: string;
    volume: string;
    collar: string;
    cap: string;
  };
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Custom Glass", "Zamac Caps", "Special Editions"];

  const projects: Project[] = [
    {
      id: "fleur-deden",
      title: "Fleur-d'Eden",
      category: "Custom Glass",
      image: "/images/perfume_bottle_hero.png",
      description: "An organic glass silhouette inspired by classic botanical form, paired with a custom sculpted floral crown and a textured velvet base finish.",
      details: {
        materials: "High-Flint Crystal Glass, Sculpted Zamac",
        volume: "100 ml / 3.4 oz",
        collar: "Invisible snap-on FEA15",
        cap: "Hand-polished Floral Zamac Crown",
      },
    },
    {
      id: "rococo",
      title: "Rococo Noir",
      category: "Zamac Caps",
      image: "/images/perfume_bottle_minimalist.png",
      description: "A luxury statement concept using a weighted magnetic cylindrical cap, matte frosted glass bottle, and hand-stamped label embossing.",
      details: {
        materials: "Acid-etched frosted glass, Brushed Steel",
        volume: "75 ml / 2.5 oz",
        collar: "Sleek metallic collar",
        cap: "Weighted Magnetic Chrome Cap",
      },
    },
    {
      id: "monark",
      title: "Monark",
      category: "Custom Glass",
      image: "/images/perfume_bottle_hero.png",
      description: "A bold, masculine square bottle engineered with extra-heavy glass distribution at the base for premium hand-feel and light refraction.",
      details: {
        materials: "Ultra-heavy solid base glass, Matte black alloy",
        volume: "100 ml / 3.4 oz",
        collar: "Screw-threaded FEA15",
        cap: "Heavyweight square alloy lid",
      },
    },
    {
      id: "mystere",
      title: "Mystère Violet",
      category: "Zamac Caps",
      image: "/images/perfume_bottle_hero.png",
      description: "Rich violet coated bottle featuring micro-embossed golden typography, designed specifically for luxury Middle Eastern fragrance offerings.",
      details: {
        materials: "Deep purple translucent lacquered glass",
        volume: "120 ml / 4.0 oz",
        collar: "Gold electroplated collar",
        cap: "Ornate gold-inlay Zamac cap",
      },
    },
    {
      id: "limara",
      title: "Limara frosted",
      category: "Special Editions",
      image: "/images/perfume_bottle_minimalist.png",
      description: "A delicate minimalist design utilizing clean cylinder aesthetics, standard pump sizes, and high-clarity crystal.",
      details: {
        materials: "High-clarity flint glass, Matte wood cap",
        volume: "50 ml / 1.7 oz",
        collar: "Standard crimped FEA15",
        cap: "Natural walnut collar & lid",
      },
    },
    {
      id: "mission-parwaaz",
      title: "Mission Parwaaz",
      category: "Special Editions",
      image: "/images/perfume_bottle_hero.png",
      description: "A commemorative, plane-shaped packaging concept celebrating elite UAE aviation journeys. A true engineering feat in glass molding.",
      details: {
        materials: "Bespoke plane glass mold, Gold Zamac wing accents",
        volume: "150 ml / 5.1 oz",
        collar: "Custom double-wall fitment",
        cap: "Aviation themed gold fuselage cap",
      },
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-dark-bg border-t border-dark-border">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-gold-dark/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold-light uppercase mb-4">CURATED CREATIONS</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight">
              Selected <span className="font-serif italic font-normal gold-gradient-text">Design Work</span>
            </h2>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-widest transition-all duration-300 font-light cursor-pointer ${
                  activeCategory === category
                    ? "gold-gradient-bg text-dark-bg font-medium"
                    : "glass-panel text-foreground/80 hover:bg-gold-light/5 hover:text-gold-light"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-panel rounded-2xl overflow-hidden group cursor-pointer hover:border-gold-light/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full bg-dark-surface/40 relative overflow-hidden flex items-center justify-center p-8 select-none">
                  {/* Subtle hover zoom */}
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  {/* Overlay background flare */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Category label */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full glass-panel border border-gold-dark/10 text-gold-light text-xxs tracking-wider font-light">
                    {project.category.toUpperCase()}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 border-t border-dark-border flex justify-between items-center bg-dark-surface/10">
                  <div>
                    <h3 className="text-xl font-serif font-light text-foreground group-hover:text-gold-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-foreground/50 text-xs tracking-wider font-light mt-1 uppercase">
                      {project.details.volume}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full glass-panel border border-gold-dark/10 group-hover:border-gold-light/40 flex items-center justify-center text-gold-light group-hover:bg-gold-light/5 transition-all duration-300">
                    <Search className="w-4.5 h-4.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-dark-bg/90 backdrop-blur-md"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl z-10 border border-gold-light/15 max-h-[90vh] overflow-y-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Side: Mockup Image */}
                  <div className="bg-dark-surface/30 p-8 flex items-center justify-center aspect-square md:aspect-auto md:h-full relative border-b md:border-b-0 md:border-r border-dark-border select-none min-h-[300px]">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 left-4 md:hidden w-10 h-10 rounded-full glass-panel flex items-center justify-center text-foreground cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    <div className="w-[80%] h-[80%] relative">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>

                  {/* Right Side: Information Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-between relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-8 right-8 hidden md:flex w-10 h-10 rounded-full glass-panel border border-gold-dark/15 hover:border-gold-light/40 items-center justify-center text-foreground hover:text-gold-light transition-all cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div>
                      {/* Badge */}
                      <div className="flex items-center gap-1.5 text-gold-light text-xs font-light tracking-[0.2em] mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{selectedProject.category.toUpperCase()}</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-serif font-light text-foreground mb-4">
                        {selectedProject.title}
                      </h3>

                      <p className="text-foreground/75 font-light text-sm sm:text-base leading-relaxed mb-8">
                        {selectedProject.description}
                      </p>

                      {/* Technical Specs Table */}
                      <div className="space-y-4 mb-8">
                        <h4 className="text-xs tracking-[0.2em] text-gold-light font-light uppercase border-b border-dark-border pb-2">TECHNICAL DESIGN SPECIFICATIONS</h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm">
                          <div>
                            <p className="text-foreground/50 font-light uppercase tracking-wider mb-0.5">Glass Composition</p>
                            <p className="text-foreground font-light">{selectedProject.details.materials}</p>
                          </div>
                          <div>
                            <p className="text-foreground/50 font-light uppercase tracking-wider mb-0.5">Bottle Volume</p>
                            <p className="text-foreground font-light">{selectedProject.details.volume}</p>
                          </div>
                          <div>
                            <p className="text-foreground/50 font-light uppercase tracking-wider mb-0.5">Collar Fitting</p>
                            <p className="text-foreground font-light">{selectedProject.details.collar}</p>
                          </div>
                          <div>
                            <p className="text-foreground/50 font-light uppercase tracking-wider mb-0.5">Cap / Closure</p>
                            <p className="text-foreground font-light">{selectedProject.details.cap}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full gold-gradient-bg text-dark-bg font-medium text-xs tracking-widest hover:brightness-110 shadow-lg shadow-gold-dark/10 transition-all uppercase"
                    >
                      Inquire About This Design
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
