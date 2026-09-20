"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BottleShowcaseProps {
  onLearnMore?: () => void;
}

export default function BottleShowcase({ onLearnMore }: BottleShowcaseProps) {
  return (
    <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Right Action Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={onLearnMore}
            className="px-6 py-2.5 border border-[#522578] text-[#522578] text-xs font-sans font-semibold tracking-widest uppercase hover:bg-[#522578] hover:text-white transition-all duration-300 cursor-pointer"
          >
            FIND OUT MORE
          </button>
        </div>

        {/* Video / Bottle Showcase Visual */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-50 flex items-center justify-center min-h-[400px] md:min-h-[550px]">
          {/* Video or Image background */}
          <video
            src="/images/home-video-1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover max-h-[600px]"
            poster="/images/le-rond.webp"
          />

          {/* Overlay fallback / complement */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
