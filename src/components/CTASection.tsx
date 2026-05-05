import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

export default function CTASection() {
  return (
    <section className="py-4 bg-primary px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gold rounded-[2.5rem] p-12 md:p-24 text-center text-primary relative overflow-hidden shadow-2xl shadow-gold/20"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-sans text-4xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tighter">
              Ready to Secure the Right Property?
            </h2>
            <p className="text-primary/70 text-lg md:text-xl mb-12 leading-relaxed font-bold uppercase tracking-wider text-xs">
              Take the first step towards a profitable real estate investment.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl"
            >
              <PhoneCall size={20} />
              <span>Book Consultation on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
