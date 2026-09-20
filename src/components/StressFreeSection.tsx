"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StressFreeSection() {
  const steps = [
    {
      icon: "/images/icon-bottle.webp",
      text: "Need beautiful, innovative perfume packaging design?",
    },
    {
      icon: "/images/icon-warehouse.webp",
      text: "We help brands define what to launch and why it will sell.",
    },
    {
      icon: "/images/icon-handshake.webp",
      text: "One partner from idea to shelf. Execution.",
    },
  ];

  return (
    <section className="py-20 bg-white text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-[#522578] tracking-wide leading-tight">
            Creating A New Perfume <br /> Should Not Be Stressful....
          </h2>
        </motion.div>

        {/* 3 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-6 relative flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                <Image
                  src={step.icon}
                  alt={step.text}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed font-light max-w-xs">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 25 Years Experience Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-8"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-normal text-[#522578] tracking-wide leading-snug mb-8">
            For 25 Years We Have Helped Perfume <br />
            Brands To Develop Great Perfume Design
          </h3>

          {/* Centered Line Divider */}
          <div className="w-full max-w-2xl mx-auto h-[1px] bg-gray-300 mb-10" />

          <p className="text-gray-700 text-lg sm:text-xl font-sans font-light mb-4">
            We Understand How Overwhelming New Product Development Can Be
          </p>

          <p className="text-[#522578] text-sm sm:text-base font-sans font-medium tracking-wide">
            That&apos;s Why We Handle The Hard Parts For You
          </p>
        </motion.div>

      </div>
    </section>
  );
}
