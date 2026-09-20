"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, Info } from "lucide-react";

interface ConfiguratorProps {
  onInquireCustom: (configDetails: string) => void;
}

export default function BottleConfigurator({ onInquireCustom }: ConfiguratorProps) {
  const [shape, setShape] = useState("cubic");
  const [glassColor, setGlassColor] = useState("violet");
  const [capType, setCapType] = useState("zamac-gold");
  const [labelText, setLabelText] = useState("ANISHA");

  const shapes = [
    { id: "cubic", name: "Cubic Monark", desc: "Thick glass base, strong lines" },
    { id: "organic", name: "Fleur Organic", desc: "Curved natural elegance" },
    { id: "cylinder", name: "Rococo Cylinder", desc: "Minimalist modern column" },
  ];

  const colors = [
    { id: "violet", name: "Royal Purple", hex: "#522578" },
    { id: "frosted", name: "Frosted Pearl", hex: "#e2e8f0" },
    { id: "obsidian", name: "Liquid Obsidian", hex: "#0f172a" },
    { id: "amber", name: "Champagne Amber", hex: "#d97706" },
  ];

  const caps = [
    { id: "zamac-gold", name: "Zamac Gold Crown", hex: "#c3a552", colorName: "Polished Gold" },
    { id: "chrome-steel", name: "Brushed Chrome", hex: "#94a3b8", colorName: "Sleek Silver" },
    { id: "walnut-wood", name: "Natural Walnut", hex: "#78350f", colorName: "Rich Walnut" },
  ];

  const currentShape = shapes.find((s) => s.id === shape);
  const currentColor = colors.find((c) => c.id === glassColor);
  const currentCap = caps.find((cp) => cp.id === capType);

  const handleInquiry = () => {
    const details = `Custom bottle concept:
- Shape: ${currentShape?.name}
- Glass finish: ${currentColor?.name}
- Cap type: ${currentCap?.name}
- Custom label: "${labelText}"`;
    onInquireCustom(details);
  };

  const renderSVGBottle = () => {
    const getGlassFill = () => {
      switch (glassColor) {
        case "violet":
          return "url(#violetGlassGradient)";
        case "frosted":
          return "url(#frostedGlassGradient)";
        case "obsidian":
          return "url(#obsidianGlassGradient)";
        case "amber":
          return "url(#amberGlassGradient)";
        default:
          return "#522578";
      }
    };

    const getCapFill = () => {
      switch (capType) {
        case "zamac-gold":
          return "url(#goldCapGradient)";
        case "chrome-steel":
          return "url(#chromeCapGradient)";
        case "walnut-wood":
          return "url(#walnutCapGradient)";
        default:
          return "#c3a552";
      }
    };

    return (
      <svg
        viewBox="0 0 400 500"
        className="w-full max-w-[280px] sm:max-w-[340px] drop-shadow-[0_15px_30px_rgba(82,37,120,0.15)]"
      >
        <defs>
          <linearGradient id="violetGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6a349c" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#522578" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#381656" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="frostedGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="obsidianGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="amberGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#b45309" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="goldCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e3c778" />
            <stop offset="50%" stopColor="#c3a552" />
            <stop offset="100%" stopColor="#9e7f33" />
          </linearGradient>
          <linearGradient id="chromeCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          <linearGradient id="walnutCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          <linearGradient id="labelGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#c3a552" />
          </linearGradient>
        </defs>

        {/* Liquid Inner Glow */}
        {shape === "cubic" && (
          <rect x="110" y="190" width="180" height="230" rx="20" fill="#000" opacity="0.08" />
        )}
        {shape === "organic" && (
          <path d="M 120 220 Q 90 280 120 340 Q 150 420 200 420 Q 250 420 280 340 Q 310 280 280 220 Q 260 180 200 180 Q 140 180 120 220 Z" fill="#000" opacity="0.08" />
        )}
        {shape === "cylinder" && (
          <rect x="120" y="180" width="160" height="250" rx="80" fill="#000" opacity="0.08" />
        )}

        {/* Bottle Body */}
        <motion.path
          layout
          d={
            shape === "cubic"
              ? "M 100 180 H 300 V 430 Q 300 450 280 450 H 120 Q 100 450 100 430 Z"
              : shape === "organic"
              ? "M 110 210 Q 70 280 110 350 Q 130 440 200 440 Q 270 440 290 350 Q 330 280 290 210 Q 250 160 200 160 Q 150 160 110 210 Z"
              : "M 110 170 H 290 V 410 Q 290 450 200 450 Q 110 450 110 410 Z"
          }
          fill={getGlassFill()}
          stroke="rgba(195, 165, 82, 0.4)"
          strokeWidth="1.5"
          className="transition-all duration-700 ease-in-out"
        />

        {/* Spray Collar */}
        <rect x="180" y="130" width="40" height="30" fill="url(#goldCapGradient)" rx="2" />
        
        {/* Cap */}
        <motion.path
          layout
          d={
            capType === "zamac-gold"
              ? "M 160 80 H 240 L 230 130 H 170 Z"
              : capType === "chrome-steel"
              ? "M 170 60 H 230 V 130 H 170 Z"
              : "M 165 70 Q 200 50 235 70 V 130 H 165 Z"
          }
          fill={getCapFill()}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="1"
          className="transition-all duration-700 ease-in-out"
        />

        {/* Label */}
        {shape === "cubic" && (
          <rect x="140" y="250" width="120" height="90" rx="8" fill="#381656" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}
        {shape === "organic" && (
          <circle cx="200" cy="290" r="45" fill="#381656" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}
        {shape === "cylinder" && (
          <rect x="145" y="240" width="110" height="110" rx="55" fill="#381656" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}

        <text
          x="200"
          y={shape === "organic" ? "295" : "300"}
          textAnchor="middle"
          fill="url(#labelGoldGradient)"
          fontFamily="sans-serif"
          fontSize="15"
          letterSpacing="0.2em"
          fontWeight="600"
        >
          {labelText.toUpperCase() || "ANISHA"}
        </text>

        <text
          x="200"
          y={shape === "organic" ? "312" : "317"}
          textAnchor="middle"
          fill="#c3a552"
          fontFamily="sans-serif"
          fontSize="7"
          letterSpacing="0.3em"
          opacity="0.9"
        >
          PARFUM DUBAI
        </text>
      </svg>
    );
  };

  return (
    <section id="creator" className="py-24 md:py-32 relative bg-white text-[#2d2d2d] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2FA] border border-purple-900/10 text-[#522578] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-[#522578] tracking-wide leading-tight">
            Anisha Bottle Concept Studio
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light max-w-xl mt-3 leading-relaxed">
            Customize glass shape, caps, color formulations, and branding tags. Send us your customization details for a tailored design consultation.
          </p>
        </div>

        {/* Configurator Box */}
        <div className="bg-[#FAF2FA] rounded-2xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-purple-900/10 shadow-xs">
          
          {/* Left Render Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white rounded-xl p-8 border border-purple-900/10 min-h-[380px] sm:min-h-[460px] relative overflow-hidden shadow-xs">
            {renderSVGBottle()}

            <div className="mt-8 flex gap-2 items-center text-gray-500 text-[10px] tracking-widest uppercase">
              <Info className="w-3.5 h-3.5 text-[#522578]" />
              <span>Real-time vector mockup preview</span>
            </div>
          </div>

          {/* Right Control Box */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              
              {/* Silhouette */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#522578] uppercase mb-3">1. Select Bottle Silhouette</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {shapes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setShape(s.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                        shape === s.id
                          ? "border-[#522578] bg-white text-[#522578] shadow-xs"
                          : "border-gray-200 bg-white/60 text-gray-700 hover:border-[#522578]/40"
                      }`}
                    >
                      {shape === s.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#522578] flex items-center justify-center text-white">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-sm font-medium tracking-wide">{s.name}</p>
                      <p className="text-[11px] text-gray-500 mt-1 font-light">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Glass Finish */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#522578] uppercase mb-3">2. Choose Glass Finish</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setGlassColor(c.id)}
                      className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                        glassColor === c.id
                          ? "border-[#522578] bg-white text-[#522578] shadow-xs"
                          : "border-gray-200 bg-white/60 text-gray-700 hover:border-[#522578]/40"
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-gray-200 shrink-0 block"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-medium tracking-wide">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cap Material */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#522578] uppercase mb-3">3. Cap Closure Material</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {caps.map((cp) => (
                    <button
                      key={cp.id}
                      onClick={() => setCapType(cp.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                        capType === cp.id
                          ? "border-[#522578] bg-white text-[#522578] shadow-xs"
                          : "border-gray-200 bg-white/60 text-gray-700 hover:border-[#522578]/40"
                      }`}
                    >
                      {capType === cp.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#522578] flex items-center justify-center text-white">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-sm font-medium tracking-wide">{cp.name}</p>
                      <p className="text-[11px] text-gray-500 mt-1 font-light">{cp.colorName}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Label Text */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-[#522578] uppercase mb-3">4. Custom Label Text</label>
                <input
                  type="text"
                  maxLength={16}
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  placeholder="Enter branding text (e.g. ANISHA)"
                  className="w-full bg-white border border-gray-200 focus:border-[#522578] rounded-xl px-4 py-3.5 text-sm font-medium text-gray-800 tracking-widest placeholder:text-gray-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="border-t border-purple-900/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-[11px] text-gray-500 tracking-wider uppercase font-light">Custom Configured Concept</p>
                <p className="text-sm text-[#522578] font-semibold tracking-wide mt-0.5">
                  {currentShape?.name} / {currentCap?.colorName} / {currentColor?.name}
                </p>
              </div>
              <button
                onClick={handleInquiry}
                className="w-full sm:w-auto px-8 py-4 bg-[#522578] hover:bg-[#381656] text-white text-xs tracking-widest font-semibold uppercase rounded-xs transition-all shadow-md cursor-pointer"
              >
                Inquire With Configuration
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

