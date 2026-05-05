import { motion } from "motion/react";
import { WHATSAPP_LINK } from "@/src/constants";

const steps = [
  {
    step: "Step 01",
    title: "Book a Consultation",
    text: "Reach out via WhatsApp to schedule a session that fits your timeline."
  },
  {
    step: "Step 02",
    title: "Discuss Your Goals",
    text: "A deep dive into your vision, budget, and real estate aspirations."
  },
  {
    step: "Step 03",
    title: "Personalized Strategy",
    text: "Get curated property matches and investment plans tailored for you."
  },
  {
    step: "Step 04",
    title: "Secure the Best Deal",
    text: "Professional guidance through negotiation, valuation, and final closing."
  }
];


export default function Process() {
  return (
    <section id="process" className="py-4 bg-primary px-6">
      <div className="container mx-auto">
        <div className="bg-secondary rounded-[2.5rem] p-10 md:p-16 border border-white/5">
          <div className="mb-12">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">Process</span>
            <h2 className="text-white font-sans text-3xl font-bold leading-tight">
              Simplified <span className="text-gold">Workflow</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-gold font-mono text-xs font-bold">{item.step}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="text-white text-lg font-bold group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
