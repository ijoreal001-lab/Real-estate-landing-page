import { motion } from "motion/react";
import { WHATSAPP_LINK, CONSULTANT_NAME } from "@/src/constants";

export default function About() {
  return (
    <section id="about" className="py-12 bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden h-full flex flex-col justify-center"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">Professional Background</span>
            <h2 className="text-white font-sans text-4xl md:text-5xl font-bold leading-tight mb-8">
              Expertise Driven by <span className="text-gold">Integrity.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base leading-relaxed font-medium mb-8">
              <p>
                I am <span className="text-white font-bold">{CONSULTANT_NAME}</span>, a professional Real Estate Consultant specialized in high-yield property investment and residential advisory. I guide investors to secure premium opportunities in Nigeria&apos;s rising market.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold hover:bg-white text-primary px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all w-fit"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card-light rounded-[2.5rem] overflow-hidden border border-white/5 relative h-[400px] md:h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1582408921715-18e7806365c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Estate Close-up"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-10 left-10">
                <div className="bg-primary/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                    <div className="text-gold font-bold text-2xl">8+</div>
                    <div className="text-white/50 text-[8px] uppercase font-black tracking-widest">Years Experience</div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
