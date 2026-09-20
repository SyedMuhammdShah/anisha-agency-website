"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  onCTAQuery: (sectionId: string) => void;
}

export default function Hero({ onCTAQuery }: HeroProps) {
  return (
    <section className="relative min-h-[650px] lg:min-h-[750px] flex items-center text-white pt-28 pb-20 md:py-36 overflow-hidden clip-hero-bottom bg-[#522578]">
      
      {/* Background Image: Power-of-love render covering the entire hero section */}
      <div className="absolute inset-0 w-full h-full z-0 select-none">
        <Image
          src="/images/power-of-love.webp"
          alt="Anisha Agency Power of Love Hero Background"
          fill
          priority
          className="object-cover object-right md:object-center"
          sizes="100vw"
        />
        {/* Soft subtle gradient overlay to ensure text contrast on mobile if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4b1f70]/80 via-[#4b1f70]/40 to-transparent md:hidden pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
        
        {/* Left: Headline & Text Content */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-sans font-light tracking-wide leading-[1.2] mb-6 text-white uppercase"
          >
            WE MAKE PERFUME <br className="hidden sm:inline" /> DESIGN EASY!
          </motion.h1>

          {/* Subtext Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/90 text-sm sm:text-base font-sans font-light leading-relaxed mb-4 max-w-lg drop-shadow-xs"
          >
            From concept to shelf, we provide custom perfume packaging design in Dubai, fragrance development, and complete supply chain support.
          </motion.p>

          {/* Subtext Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/85 text-sm sm:text-base font-sans font-light leading-relaxed mb-8 max-w-lg drop-shadow-xs"
          >
            We help perfume brands create packaging that stands out and succeeds in the market.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              onClick={() => onCTAQuery("contact")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#33144d] hover:bg-[#250d3a] border border-purple-300/30 text-white text-xs sm:text-sm font-sans font-medium tracking-[0.18em] rounded-md shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase"
            >
              BOOK A FREE DISCOVERY MEETING
            </button>
          </motion.div>
        </div>

        {/* Right column kept empty to let the background image's bottle render show seamlessly */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

      </div>
    </section>
  );
}


