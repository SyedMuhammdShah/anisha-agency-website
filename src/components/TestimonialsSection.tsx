"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialsSectionProps {
  onCTA?: () => void;
}

export default function TestimonialsSection({ onCTA }: TestimonialsSectionProps) {
  const testimonials = [
    {
      quote:
        "What truly sets Anisha International apart is their commitment to quality and customer satisfaction. I wholeheartedly recommend Anisha International to any business looking to elevate their branding and packaging solutions. They are true partners in design, and I look forward to continue working with them in the future!",
      author: "SF PATEL & SONS, INDIA",
      company: "SFR Perfumes",
      stars: 5,
    },
    {
      quote:
        "Anisha Agency's custom Zamac cap designs and bottle prototyping brought our high-end luxury line to life seamlessly. Their Dubai-based team managed every detail from concept render to mass production flawlessly.",
      author: "MAISON DE PARFUM",
      company: "Luxury Fragrance Co.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-white text-[#2d2d2d] relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-sans font-normal text-[#522578] text-center tracking-wide mb-14"
        >
          What Our Clients Are Saying About ANISHA
        </motion.h2>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-[#FAF2FA] rounded-xl p-8 sm:p-12 shadow-sm border border-purple-900/5 text-center relative mb-12"
        >
          {/* Quote Text */}
          <p className="text-gray-700 font-sans font-light text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto italic">
            &ldquo;{testimonials[0].quote}&rdquo;
          </p>

          {/* 5 Purple Stars */}
          <div className="flex justify-center items-center gap-1.5 mb-6">
            {[...Array(testimonials[0].stars)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#522578] text-[#522578]" />
            ))}
          </div>

          {/* Badge Icon */}
          <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-xs mb-4 border border-purple-900/10">
            <span className="text-[10px] font-serif font-bold text-[#522578]">★SFR</span>
          </div>

          {/* Author Name */}
          <h4 className="text-xs sm:text-sm font-sans font-semibold text-[#522578] tracking-[0.2em] uppercase">
            {testimonials[0].author}
          </h4>
        </motion.div>

        {/* Action Button below */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={onCTA}
            className="px-8 py-3.5 border border-[#522578] text-[#522578] hover:bg-[#522578] hover:text-white transition-all duration-300 text-xs font-sans font-semibold tracking-widest uppercase cursor-pointer rounded-xs"
          >
            LETS CREATE TOGETHER
          </button>
        </motion.div>

      </div>
    </section>
  );
}
