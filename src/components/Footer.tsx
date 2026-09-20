"use client";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-[#381656] text-white py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Typographic Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavClick("hero");
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-6 h-7 relative flex items-center justify-center">
              <svg viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                <path d="M20 0L40 44H28L20 25L12 44H0L20 0Z" fill="currentColor" opacity="0.9" />
                <path d="M20 12L31 36H24L20 26L16 36H9L20 12Z" fill="#C3A552" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-[0.18em] font-semibold text-white leading-none">
                ANISHA
              </span>
              <span className="text-[8px] tracking-[0.2em] font-sans font-medium text-white/60 uppercase mt-1">
                INTERNATIONAL DWC
              </span>
            </div>
          </a>
          <p className="text-white/60 text-[11px] tracking-wider font-light mt-3 uppercase">
            Luxury Fragrance Branding &amp; Packaging Dubai
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs font-medium tracking-widest uppercase">
          <button
            onClick={() => onNavClick("about")}
            className="text-white/80 hover:text-[#C3A552] transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => onNavClick("services")}
            className="text-white/80 hover:text-[#C3A552] transition-colors cursor-pointer"
          >
            SERVICES
          </button>
          <button
            onClick={() => onNavClick("portfolio")}
            className="text-white/80 hover:text-[#C3A552] transition-colors cursor-pointer"
          >
            OUR WORK
          </button>
          <button
            onClick={() => onNavClick("creator")}
            className="text-white/80 hover:text-[#C3A552] transition-colors cursor-pointer"
          >
            PRODUCTS
          </button>
          <button
            onClick={() => onNavClick("contact")}
            className="text-white/80 hover:text-[#C3A552] transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </div>

        {/* Right: Social handles */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C3A552] hover:text-[#381656] flex items-center justify-center text-white transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C3A552] hover:text-[#381656] flex items-center justify-center text-white transition-all"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

      </div>

      {/* Underbar Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[11px] font-light tracking-widest text-white/50 gap-4">
        <div>
          © {new Date().getFullYear()} ANISHA INTERNATIONAL DWC. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#C3A552] transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-[#C3A552] transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}

