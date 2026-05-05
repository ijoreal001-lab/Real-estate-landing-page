import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-8 relative bg-secondary rounded-[2.5rem] p-8 md:p-16 border border-white/5 overflow-hidden flex flex-col justify-end min-h-[500px]"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
               <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Luxury Real Estate"
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            </div>

            <div className="relative z-10">
              <span className="inline-block text-gold uppercase tracking-[0.4em] text-[10px] font-black mb-6">
                Premium Real Estate Advisor
              </span>
              <h1 className="text-white font-sans text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-tighter">
                Expert Guidance <br />
                <span className="text-gold">You Can Trust</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl mb-12 leading-relaxed font-medium">
                Helping you buy, invest, and secure the best real estate opportunities with professional precision.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-white text-primary px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-gold/20"
                >
                  Book a Consultation
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Profile Card / Bento Piece */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 lg:col-span-4 bg-secondary rounded-[2.5rem] border border-white/5 p-8 flex flex-col items-center text-center justify-center gap-6"
          >
             <div className="w-24 h-24 rounded-3xl bg-neutral-100 overflow-hidden border-4 border-gold/20 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300" className="w-full h-full object-cover" />
             </div>
             <div>
                <h3 className="text-white text-xl font-bold mb-1">Dada Samson</h3>
                <p className="text-gold text-[10px] uppercase font-black tracking-widest">Consultant Portfolio</p>
             </div>
             <p className="text-white/40 text-sm leading-relaxed">
                Specialized in high-yield property investment and residential advisory in Nigeria's rising market.
             </p>
             <div className="flex gap-2">
                <div className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] uppercase font-bold text-gold">Reliable</div>
                <div className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] uppercase font-bold text-gold">Expert</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
