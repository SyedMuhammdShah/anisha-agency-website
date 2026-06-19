"use client";

import { motion } from "framer-motion";
import { Compass, Box, Settings, Cpu, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Compass className="w-8 h-8 text-gold-dark" />,
      title: "Bespoke Glass & Bottle Sculpting",
      description:
        "Unique custom glass silhouettes engineered for perfect ergonomics and light reflection. We create signature bottle molds that define your brand identity.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-gold-dark" />,
      title: "Custom Zamac & Magnetic Caps",
      description:
        "Luxury caps designed with precise weight and structural integrity. Featuring magnetic closures, custom embossing, and fine metallization options.",
    },
    {
      icon: <Box className="w-8 h-8 text-gold-dark" />,
      title: "Luxury Rigid Outer Packaging",
      description:
        "High-end outer cases, micro-embossed paperboards, soft-touch coatings, and internal protective layouts lined with silk, velvet, or custom foams.",
    },
    {
      icon: <Settings className="w-8 h-8 text-gold-dark" />,
      title: "Engineering & Sourcing (Turnkey)",
      description:
        "From technical CAD drawings and collar fitment design to spray pump sizing and quality assurance. We manage the global supply chain end-to-end.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="services" className="py-24 md:py-32 relative bg-dark-bg">
      {/* Decorative backdrop mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] text-gold-light uppercase mb-4"
          >
            OUR BRANDING CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide max-w-2xl leading-tight"
          >
            End-to-End <span className="font-serif italic font-normal gold-gradient-text">Turnkey Solutions</span> for Perfume Brands
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel glass-panel-hover p-8 md:p-10 rounded-2xl flex flex-col justify-between group cursor-default relative overflow-hidden"
            >
              {/* Card top flare */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/10 group-hover:border-gold-light/35 transition-all duration-300 mb-8">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-light text-foreground group-hover:text-gold-light transition-colors duration-300 mb-4">
                  {service.title}
                </h3>

                <p className="text-foreground/70 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs tracking-widest text-gold-light hover:text-gold-hover transition-colors font-medium mt-4 select-none cursor-pointer">
                <span>LEARN MORE</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
