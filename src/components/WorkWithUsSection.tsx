"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface WorkWithUsSectionProps {
  onCTA?: () => void;
}

export default function WorkWithUsSection({ onCTA }: WorkWithUsSectionProps) {
  return (
    <section className="py-20 bg-[#f9f9fb] text-[#2d2d2d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Gold Night Shadow Bottle Showcase */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px]"
          >
            <Image
              src="/images/night-shadow.webp"
              alt="Night Shadow Luxury Gold Perfume Packaging Design Dubai"
              fill
              className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
              sizes="(max-width: 768px) 300px, 380px"
            />
          </motion.div>
        </div>

        {/* Right Column: Copy & Gold CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-sans font-normal text-[#522578] tracking-wide mb-6"
          >
            When you work with us:
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-gray-700 text-sm sm:text-base font-sans font-light leading-relaxed mb-6 max-w-xl"
          >
            Your products will look incredible on shelves and on social media with our Perfume{" "}
            <span className="text-[#d84374] font-medium">Packaging Design Dubai</span> services. You will have a reliable partner who cares for your business. You will have more time to spend on other areas of your business
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-800 text-sm sm:text-base font-sans font-normal mb-8"
          >
            Ready to make your next perfume project stress free &amp; successful?
          </motion.p>

          {/* Gold CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              onClick={onCTA}
              className="px-8 py-4 bg-[#c3a552] hover:bg-[#b49543] text-white text-xs sm:text-sm font-sans font-semibold tracking-[0.18em] uppercase rounded-xs shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              BOOK A FREE DISCOVERY MEETING
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
