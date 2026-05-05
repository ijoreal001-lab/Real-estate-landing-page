import { Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import { WHATSAPP_LINK, CONSULTANT_SHORT_NAME } from "@/src/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-secondary/20 backdrop-blur-sm border border-white/5 px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center font-bold text-primary text-sm shadow-lg shadow-gold/20">D</div>
          <div className="flex flex-col">
            <span className="text-white font-sans text-sm font-bold tracking-tight uppercase">{CONSULTANT_SHORT_NAME}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/70 text-xs font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#investments" className="hover:text-gold transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-gold transition-colors">Process</a>
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold/90 text-primary px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-gold/10"
        >
          <Phone size={14} />
          <span>Consult Now</span>
        </a>
      </div>
    </nav>
  );
}
