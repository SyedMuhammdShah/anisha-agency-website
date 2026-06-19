"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onCTAQuery: (sectionId: string) => void;
}

export default function Hero({ onCTAQuery }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-dark/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left: Copy Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-gold-dark/20 text-gold-light text-xs font-light tracking-[0.15em] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DUBAI&apos;S PREMIER PERFUMERY DESIGN AGENCY</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-wide leading-[1.1] mb-6"
          >
            We Sculpt <br />
            <span className="font-serif italic font-normal gold-gradient-text">Liquid Luxury</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-foreground/75 text-base md:text-lg max-w-xl font-light tracking-wide leading-relaxed mb-10"
          >
            Anisha Agency crafts bespoke perfume bottles, Zamac caps, and complete fragrance branding packages. Over 25 years of turning sensory visions into shelf-ready masterpieces.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onCTAQuery("creator")}
              className="px-8 py-4 rounded-full gold-gradient-bg text-dark-bg text-sm tracking-widest font-medium hover:brightness-110 shadow-lg shadow-gold-dark/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>DESIGN BOTTLE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onCTAQuery("portfolio")}
              className="px-8 py-4 rounded-full glass-panel hover:bg-gold-light/5 text-foreground text-sm tracking-widest font-light transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              EXPLORE CREATIONS
            </button>
          </motion.div>

          {/* Quick stats banner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-dark-border mt-16 pt-8 w-full max-w-lg"
          >
            <div>
              <p className="text-2xl sm:text-3xl font-serif gold-gradient-text">25+</p>
              <p className="text-xxs sm:text-xs tracking-widest font-light text-foreground/50 mt-1 uppercase">Years Industry Experience</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif gold-gradient-text">100+</p>
              <p className="text-xxs sm:text-xs tracking-widest font-light text-foreground/50 mt-1 uppercase">Bespoke Fragrances</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif gold-gradient-text">100%</p>
              <p className="text-xxs sm:text-xs tracking-widest font-light text-foreground/50 mt-1 uppercase">Turnkey Execution</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Premium Showcase Bottle Render */}
        <div className="lg:col-span-5 flex justify-center relative select-none">
          {/* Subtle spinning soft gold ring in background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] border border-gold-light/5 rounded-full pointer-events-none"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] drop-shadow-[0_15px_50px_rgba(226,194,117,0.12)]"
          >
            {/* Ambient gold glow immediately behind the bottle */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/10 via-transparent to-transparent rounded-3xl filter blur-xl opacity-60" />
            
            {/* Main Visual Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <Image
                src="/images/perfume_bottle_hero.png"
                alt="Anisha Luxury Perfume Concept"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 300px, 360px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
