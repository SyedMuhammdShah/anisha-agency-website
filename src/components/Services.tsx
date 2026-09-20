"use client";

import { motion } from "framer-motion";
import { Compass, Box, Settings, Cpu, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Compass className="w-8 h-8 text-[#522578]" />,
      title: "Bespoke Glass & Bottle Sculpting",
      description:
        "Unique custom glass silhouettes engineered for perfect ergonomics and light reflection. We create signature bottle molds that define your brand identity.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#522578]" />,
      title: "Custom Zamac & Magnetic Caps",
      description:
        "Luxury caps designed with precise weight and structural integrity. Featuring magnetic closures, custom embossing, and fine metallization options.",
    },
    {
      icon: <Box className="w-8 h-8 text-[#522578]" />,
      title: "Luxury Rigid Packaging & Boxes",
      description:
        "High-end outer cases, micro-embossed paperboards, soft-touch coatings, and internal protective layouts lined with silk, velvet, or custom foams.",
    },
    {
      icon: <Settings className="w-8 h-8 text-[#522578]" />,
      title: "Supply Chain & Engineering (Turnkey)",
      description:
        "From technical CAD drawings and collar fitment design to spray pump sizing and quality assurance. We manage the global supply chain end-to-end.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white text-[#2d2d2d] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.25em] text-[#522578] uppercase font-semibold mb-3"
          >
            OUR PACKAGING CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-[#522578] tracking-wide max-w-2xl leading-tight"
          >
            End-to-End Turnkey Solutions For Perfume Brands
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#FAF2FA] p-8 md:p-10 rounded-xl border border-purple-900/10 hover:border-[#522578]/30 transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center border border-purple-900/10 shadow-xs mb-8 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-medium text-[#522578] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 font-sans font-light text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs tracking-widest text-[#522578] font-semibold uppercase mt-4 cursor-pointer">
                <span>EXPLORE SERVICE</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

