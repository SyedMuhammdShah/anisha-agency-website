"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle, Check, Info } from "lucide-react";

interface ConfiguratorProps {
  onInquireCustom: (configDetails: string) => void;
}

export default function BottleConfigurator({ onInquireCustom }: ConfiguratorProps) {
  const [shape, setShape] = useState("cubic"); // cubic, organic, cylinder
  const [glassColor, setGlassColor] = useState("violet"); // violet, frosted, obsidian, amber
  const [capType, setCapType] = useState("zamac-gold"); // zamac-gold, chrome-steel, walnut-wood
  const [labelText, setLabelText] = useState("L'ÉDEN");

  const shapes = [
    { id: "cubic", name: "Cubic Monark", desc: "Thick glass base, strong lines" },
    { id: "organic", name: "Fleur Organic", desc: "Curved natural elegance" },
    { id: "cylinder", name: "Rococo Cylinder", desc: "Minimalist modern column" },
  ];

  const colors = [
    { id: "violet", name: "Translucent Violet", hex: "#4c1d95", gradient: "from-purple-900/60 to-purple-950/80" },
    { id: "frosted", name: "Frosted Pearl", hex: "#e2e8f0", gradient: "from-slate-200/50 to-slate-300/70" },
    { id: "obsidian", name: "Liquid Obsidian", hex: "#0f172a", gradient: "from-slate-900/90 to-black/95" },
    { id: "amber", name: "Champagne Amber", hex: "#d97706", gradient: "from-amber-600/60 to-amber-900/80" },
  ];

  const caps = [
    { id: "zamac-gold", name: "Zamac Gold Crown", hex: "#fbbf24", colorName: "Polished Gold" },
    { id: "chrome-steel", name: "Brushed Chrome", hex: "#94a3b8", colorName: "Sleek Silver" },
    { id: "walnut-wood", name: "Natural Walnut", hex: "#78350f", colorName: "Rich Walnut" },
  ];

  // Get active configurations
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

  // Helper to render the dynamic SVG bottle
  const renderSVGBottle = () => {
    // Colors mapping for SVG fills
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
          return "#4c1d95";
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
          return "#fbbf24";
      }
    };

    return (
      <svg
        viewBox="0 0 400 500"
        className="w-full max-w-[280px] sm:max-w-[340px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        <defs>
          {/* Glass Gradients */}
          <linearGradient id="violetGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#4c1d95" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2e1065" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="frostedGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="obsidianGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="amberGlassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#b45309" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.95" />
          </linearGradient>

          {/* Cap Gradients */}
          <linearGradient id="goldCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="chromeCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f1f5f9" />
            <stop offset="40%" stopColor="#cbd5e1" />
            <stop offset="80%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="walnutCapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          {/* Label Glow / Details */}
          <linearGradient id="labelGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3d1" />
            <stop offset="100%" stopColor="#c5a059" />
          </linearGradient>
        </defs>

        {/* --- LIQUID INNER GLOW --- */}
        {shape === "cubic" && (
          <rect x="110" y="190" width="180" height="230" rx="20" fill="#000" opacity="0.15" />
        )}
        {shape === "organic" && (
          <path d="M 120 220 Q 90 280 120 340 Q 150 420 200 420 Q 250 420 280 340 Q 310 280 280 220 Q 260 180 200 180 Q 140 180 120 220 Z" fill="#000" opacity="0.15" />
        )}
        {shape === "cylinder" && (
          <rect x="120" y="180" width="160" height="250" rx="80" fill="#000" opacity="0.15" />
        )}

        {/* --- BOTTLE BODY --- */}
        <motion.path
          layout
          d={
            shape === "cubic"
              ? "M 100 180 H 300 V 430 Q 300 450 280 450 H 120 Q 100 450 100 430 Z" // Cubic
              : shape === "organic"
              ? "M 110 210 Q 70 280 110 350 Q 130 440 200 440 Q 270 440 290 350 Q 330 280 290 210 Q 250 160 200 160 Q 150 160 110 210 Z" // Organic curve
              : "M 110 170 H 290 V 410 Q 290 450 200 450 Q 110 450 110 410 Z" // Cylinder
          }
          fill={getGlassFill()}
          stroke="rgba(226, 194, 117, 0.2)"
          strokeWidth="1.5"
          className="transition-all duration-700 ease-in-out"
        />

        {/* Base reflections/glass weight thickness */}
        {shape === "cubic" && (
          <path d="M 100 410 H 300 V 430 Q 300 450 280 450 H 120 Q 100 450 100 430 Z" fill="rgba(255,255,255,0.08)" />
        )}
        {shape === "organic" && (
          <path d="M 130 400 Q 200 435 270 400 Q 250 440 200 440 Q 150 440 130 400 Z" fill="rgba(255,255,255,0.08)" />
        )}
        {shape === "cylinder" && (
          <path d="M 110 400 Q 200 445 290 400 Q 290 410 290 410 Q 290 450 200 450 Q 110 450 110 410 Z" fill="rgba(255,255,255,0.08)" />
        )}

        {/* --- SPRAY COLLAR --- */}
        <rect x="180" y="130" width="40" height="30" fill="url(#goldCapGradient)" rx="2" />
        
        {/* --- CAP CLOSURE --- */}
        <motion.path
          layout
          d={
            capType === "zamac-gold"
              ? "M 160 80 H 240 L 230 130 H 170 Z" // Zamac crown
              : capType === "chrome-steel"
              ? "M 170 60 H 230 V 130 H 170 Z" // Cylinder chrome
              : "M 165 70 Q 200 50 235 70 V 130 H 165 Z" // Wood curved top
          }
          fill={getCapFill()}
          stroke="rgba(0, 0, 0, 0.1)"
          strokeWidth="1"
          className="transition-all duration-700 ease-in-out"
        />

        {/* --- FRONT EMBOSSED LABEL --- */}
        {shape === "cubic" && (
          <rect x="140" y="250" width="120" height="90" rx="8" fill="rgba(14, 8, 22, 0.75)" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}
        {shape === "organic" && (
          <circle cx="200" cy="290" r="45" fill="rgba(14, 8, 22, 0.75)" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}
        {shape === "cylinder" && (
          <rect x="145" y="240" width="110" height="110" rx="55" fill="rgba(14, 8, 22, 0.75)" stroke="url(#labelGoldGradient)" strokeWidth="1" />
        )}

        {/* Glass vertical light highlight/glare */}
        <path
          d={
            shape === "cubic"
              ? "M 120 200 V 400"
              : shape === "organic"
              ? "M 135 220 Q 110 280 135 340"
              : "M 135 200 V 390"
          }
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Custom text rendered dynamically onto the label */}
        <text
          x="200"
          y={shape === "organic" ? "295" : "300"}
          textAnchor="middle"
          fill="url(#labelGoldGradient)"
          fontFamily="var(--font-cormorant), Georgia, serif"
          fontSize="17"
          letterSpacing="0.25em"
          fontWeight="300"
        >
          {labelText.toUpperCase() || "ANISHA"}
        </text>

        {/* Small subtitle text */}
        <text
          x="200"
          y={shape === "organic" ? "312" : "317"}
          textAnchor="middle"
          fill="#c5a059"
          fontFamily="var(--font-outfit), sans-serif"
          fontSize="7"
          letterSpacing="0.4em"
          opacity="0.75"
        >
          PARFUM DUBAI
        </text>
      </svg>
    );
  };

  return (
    <section id="creator" className="py-24 md:py-32 relative bg-dark-surface/20 border-t border-dark-border">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-900/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-gold-dark/10 text-gold-light text-xxs tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide leading-tight">
            Anisha <span className="font-serif italic font-normal gold-gradient-text">Concept Studio</span>
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base font-light max-w-xl mt-3 leading-relaxed">
            Customize glass shape, caps, color formulations, and branding tags. Send us your customization details to boot your design consultation.
          </p>
        </div>

        {/* Main Panel Wrapper */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Render Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-dark-bg/60 rounded-2xl p-8 border border-dark-border min-h-[380px] sm:min-h-[460px] relative overflow-hidden">
            {/* Background lighting */}
            <div className="absolute inset-0 bg-radial-gradient from-gold-dark/5 via-transparent to-transparent opacity-40" />
            
            {/* SVG Render */}
            {renderSVGBottle()}

            {/* Custom info panel */}
            <div className="mt-8 flex gap-2 items-center text-foreground/40 text-xxs tracking-widest uppercase">
              <Info className="w-3.5 h-3.5 text-gold-dark" />
              <span>Real-time vector mockup preview</span>
            </div>
          </div>

          {/* Right: Customization controls */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              
              {/* Option 1: Shape */}
              <div>
                <label className="block text-xs font-light tracking-[0.2em] text-gold-light uppercase mb-3">1. Select Bottle Silhouette</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {shapes.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setShape(s.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                        shape === s.id
                          ? "border-gold-light bg-gold-dark/5 text-foreground"
                          : "border-dark-border bg-dark-surface/20 text-foreground/75 hover:border-gold-dark/25"
                      }`}
                    >
                      {shape === s.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gold-light flex items-center justify-center text-dark-bg">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-sm font-medium tracking-wide">{s.name}</p>
                      <p className="text-xxs text-foreground/45 mt-1 font-light">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Glass Tint */}
              <div>
                <label className="block text-xs font-light tracking-[0.2em] text-gold-light uppercase mb-3">2. Choose Glass Finish</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setGlassColor(c.id)}
                      className={`p-3 rounded-xl border flex items-center gap-3 transition-all cursor-pointer ${
                        glassColor === c.id
                          ? "border-gold-light bg-gold-dark/5 text-foreground"
                          : "border-dark-border bg-dark-surface/20 text-foreground/75 hover:border-gold-dark/25"
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-white/10 shrink-0 block"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-light tracking-wide">{c.name.split(" ")[1] || c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Cap Closure */}
              <div>
                <label className="block text-xs font-light tracking-[0.2em] text-gold-light uppercase mb-3">3. Cap Closure Material</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {caps.map((cp) => (
                    <button
                      key={cp.id}
                      onClick={() => setCapType(cp.id)}
                      className={`p-4 rounded-xl text-left border transition-all cursor-pointer relative ${
                        capType === cp.id
                          ? "border-gold-light bg-gold-dark/5 text-foreground"
                          : "border-dark-border bg-dark-surface/20 text-foreground/75 hover:border-gold-dark/25"
                      }`}
                    >
                      {capType === cp.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-gold-light flex items-center justify-center text-dark-bg">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                      <p className="text-sm font-medium tracking-wide">{cp.name}</p>
                      <p className="text-xxs text-foreground/45 mt-1 font-light">{cp.colorName}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Custom Embossed label */}
              <div>
                <label className="block text-xs font-light tracking-[0.2em] text-gold-light uppercase mb-3">4. Custom Label Text</label>
                <input
                  type="text"
                  maxLength={16}
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  placeholder="Enter branding text (e.g. L'ÉDEN)"
                  className="w-full bg-dark-bg/60 border border-dark-border focus:border-gold-light focus:ring-1 focus:ring-gold-light rounded-xl px-4 py-3.5 text-sm font-light text-foreground tracking-widest placeholder:text-foreground/25 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Launch consultation CTA */}
            <div className="border-t border-dark-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs text-foreground/40 tracking-wider uppercase font-light">Custom Configured Concept</p>
                <p className="text-sm text-foreground/95 font-medium tracking-wide mt-1">
                  {currentShape?.name} / {currentCap?.colorName} / {currentColor?.name}
                </p>
              </div>
              <button
                onClick={handleInquiry}
                className="w-full sm:w-auto px-8 py-4 rounded-full gold-gradient-bg text-dark-bg text-xs tracking-widest font-medium hover:brightness-110 shadow-lg shadow-gold-dark/20 transition-all uppercase cursor-pointer"
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
