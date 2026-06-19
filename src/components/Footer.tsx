"use client";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Typographic Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#"
            className="text-xl font-serif tracking-[0.25em] font-light text-foreground flex items-center"
          >
            ANISHA
            <span className="w-1.5 h-1.5 rounded-full bg-gold-dark ml-2" />
          </a>
          <p className="text-foreground/45 text-xxs tracking-wider font-light mt-2 uppercase">
            Luxury Fragrance Branding &amp; Packaging Dubai
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button
            onClick={() => onNavClick("services")}
            className="text-xs tracking-widest font-light text-foreground/75 hover:text-gold-light transition-colors cursor-pointer"
          >
            SERVICES
          </button>
          <button
            onClick={() => onNavClick("portfolio")}
            className="text-xs tracking-widest font-light text-foreground/75 hover:text-gold-light transition-colors cursor-pointer"
          >
            PORTFOLIO
          </button>
          <button
            onClick={() => onNavClick("creator")}
            className="text-xs tracking-widest font-light text-foreground/75 hover:text-gold-light transition-colors cursor-pointer"
          >
            STUDIO
          </button>
          <button
            onClick={() => onNavClick("contact")}
            className="text-xs tracking-widest font-light text-foreground/75 hover:text-gold-light transition-colors cursor-pointer"
          >
            INQUIRY
          </button>
        </div>

        {/* Right: Social handles */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full glass-panel border border-gold-dark/10 hover:border-gold-light/40 flex items-center justify-center text-foreground/70 hover:text-gold-light transition-colors"
          >
            {/* Custom LinkedIn SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full glass-panel border border-gold-dark/10 hover:border-gold-light/40 flex items-center justify-center text-foreground/70 hover:text-gold-light transition-colors"
          >
            {/* Custom Instagram SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="w-9 h-9 rounded-full glass-panel border border-gold-dark/10 hover:border-gold-light/40 flex items-center justify-center text-foreground/70 hover:text-gold-light transition-colors"
          >
            {/* Custom Twitter / X SVG */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>

      </div>

      {/* Underbar Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-dark-border/40 flex flex-col sm:flex-row justify-between items-center text-xxs font-light tracking-widest text-foreground/30 gap-4">
        <div>
          © {new Date().getFullYear()} ANISHA ARABIA DWC. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-light transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-gold-light transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
