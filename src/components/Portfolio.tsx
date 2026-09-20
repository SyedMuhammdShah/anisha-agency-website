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
      id: "power-of-love",
      title: "Power of Love",
      category: "Special Editions",
      image: "/images/power-of-love.webp",
      description: "An iconic luxury purple glass silhouette with an ornate gold base and custom engraved pendant, engineered in Dubai for premium fragrance houses.",
      details: {
        materials: "Deep Purple Lacquered Crystal, Gold Zamac",
        volume: "100 ml / 3.4 oz",
        collar: "Gold electroplated FEA15",
        cap: "Hand-finished Filigree Gold Cap",
      },
    },
    {
      id: "night-shadow",
      title: "Night Shadow",
      category: "Zamac Caps",
      image: "/images/night-shadow.webp",
      description: "Gold embossed metallic pattern integrated into high-transparency glass, featuring a heavy knurled Zamac gold cap.",
      details: {
        materials: "High-Flint Flint Glass, Heavy Gold Zamac",
        volume: "100 ml / 3.4 oz",
        collar: "Custom textured gold collar",
        cap: "Weighted Knurled Gold Lid",
      },
    },
    {
      id: "le-rond",
      title: "Le Rond",
      category: "Custom Glass",
      image: "/images/le-rond.webp",
      description: "Minimalist circular ridged crystal bottle featuring a signature asymmetric slanted black cap and gold plaque accent.",
      details: {
        materials: "Precision Molded Glass, Matte Black Alloy",
        volume: "80 ml / 2.7 oz",
        collar: "FEA15 Pump with custom collar",
        cap: "Asymmetric Slanted Alloy Lid",
      },
    },
    {
      id: "fleur-deden",
      title: "Fleur-d'Eden",
      category: "Custom Glass",
      image: "/images/power-of-love.webp",
      description: "An organic glass silhouette inspired by classic botanical form, paired with a custom sculpted floral crown.",
      details: {
        materials: "High-Flint Crystal Glass, Sculpted Zamac",
        volume: "100 ml / 3.4 oz",
        collar: "Invisible snap-on FEA15",
        cap: "Hand-polished Floral Zamac Crown",
      },
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative bg-white text-[#2d2d2d] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#522578] uppercase font-semibold mb-3">OUR PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-[#522578] tracking-wide leading-tight">
              Selected Packaging Creations
            </h2>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 font-medium cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#522578] text-white shadow-md"
                    : "bg-[#FAF2FA] text-gray-700 hover:bg-[#522578] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#FAF2FA] rounded-xl overflow-hidden group cursor-pointer border border-purple-900/10 hover:border-[#522578]/40 transition-all duration-300 shadow-xs hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full bg-white relative overflow-hidden flex items-center justify-center p-8 select-none border-b border-purple-900/5">
                  <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  
                  {/* Category label */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#522578] text-white text-[10px] tracking-wider font-semibold uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex justify-between items-center bg-[#FAF2FA]">
                  <div>
                    <h3 className="text-xl font-sans font-medium text-[#522578]">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs tracking-wider font-light mt-1 uppercase">
                      {project.details.volume}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white border border-purple-900/10 flex items-center justify-center text-[#522578] shadow-xs group-hover:bg-[#522578] group-hover:text-white transition-all">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl z-10 border border-gray-100 max-h-[90vh] overflow-y-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-[#FAF2FA] p-8 flex items-center justify-center aspect-square md:aspect-auto relative border-b md:border-b-0 md:border-r border-purple-900/10 min-h-[300px]">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 left-4 md:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 shadow-xs"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    <div className="w-[85%] h-[85%] relative">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-contain"
                        sizes="400px"
                      />
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-between relative">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 hidden md:flex w-9 h-9 rounded-full bg-gray-100 hover:bg-[#522578] hover:text-white items-center justify-center text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div>
                      <div className="flex items-center gap-1.5 text-[#522578] text-xs font-semibold tracking-widest uppercase mb-3">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{selectedProject.category}</span>
                      </div>

                      <h3 className="text-3xl font-sans font-normal text-[#522578] mb-4">
                        {selectedProject.title}
                      </h3>

                      <p className="text-gray-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="text-xs tracking-widest text-[#522578] font-semibold uppercase border-b border-gray-100 pb-2">TECHNICAL DESIGN SPECIFICATIONS</h4>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm">
                          <div>
                            <p className="text-gray-400 font-light uppercase tracking-wider mb-0.5">Materials</p>
                            <p className="text-gray-800 font-medium">{selectedProject.details.materials}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 font-light uppercase tracking-wider mb-0.5">Volume</p>
                            <p className="text-gray-800 font-medium">{selectedProject.details.volume}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 font-light uppercase tracking-wider mb-0.5">Collar Fitting</p>
                            <p className="text-gray-800 font-medium">{selectedProject.details.collar}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 font-light uppercase tracking-wider mb-0.5">Cap / Closure</p>
                            <p className="text-gray-800 font-medium">{selectedProject.details.cap}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="w-full text-center px-6 py-3.5 bg-[#522578] hover:bg-[#381656] text-white font-medium text-xs tracking-widest uppercase rounded-xs transition-all shadow-md"
                    >
                      Inquire About This Packaging Design
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
