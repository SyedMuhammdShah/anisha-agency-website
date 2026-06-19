import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Anisha Agency | Luxury Perfume Packaging Design Dubai",
  description: "Anisha Agency specializes in luxury perfume packaging design in Dubai, custom bottle engineering, and comprehensive turnkey fragrance branding solutions across the UAE.",
  keywords: ["perfume packaging", "luxury fragrance branding", "custom bottle design", "Zamac caps", "Dubai perfume design", "turnkey perfumery"],
  authors: [{ name: "Anisha Agency" }],
  openGraph: {
    title: "Anisha Agency | Luxury Perfume Packaging Design Dubai",
    description: "Bespoke perfume bottle design, custom caps, packaging engineering, and turnkey fragrance supply chain coordination in Dubai.",
    url: "https://anisha.agency",
    siteName: "Anisha Agency",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-foreground font-sans selection:bg-gold-dark selection:text-dark-bg">
        {children}
      </body>
    </html>
  );
}
