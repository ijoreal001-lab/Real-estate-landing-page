import { Phone, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import { CONSULTANT_SHORT_NAME, EMAIL } from "@/src/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 border-t border-white/5 px-6">
      <div className="container mx-auto">
        <div className="bg-secondary rounded-[2.5rem] p-10 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
             <span className="text-white font-sans text-xl font-bold tracking-tight mb-1 uppercase text-center md:text-left">{CONSULTANT_SHORT_NAME}</span>
             <span className="text-gold text-[10px] uppercase tracking-widest font-black">Real Estate Consultant</span>
          </div>

          <p className="text-white/30 text-[10px] uppercase tracking-widest font-black text-center md:text-right">
            © {currentYear} Dada Samson Oluwadamilare • All Rights Reserved
          </p>

          <div className="flex gap-4">
             {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                 <a key={idx} href="#" className="text-white/40 hover:text-gold transition-all duration-300">
                     <Icon size={18} />
                 </a>
             ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-12 text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
            <span>Lagos, Nigeria</span>
            <span className="text-emerald-500">● Online for Consultations</span>
        </div>
      </div>
    </footer>
  );
}
