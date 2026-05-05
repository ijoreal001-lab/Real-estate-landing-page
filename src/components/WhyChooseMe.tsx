import { motion } from "motion/react";
import { UserCheck, Globe, Star, Users, Eye, Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

const reasons = [
  {
    title: "Trusted Advisor",
    text: "Building long-term relationships through honesty and integrity in every transaction.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Deep Market Knowledge",
    text: "Access to verified market data and emerging property trends before they hit the general public.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Premium Opportunities",
    text: "Exclusive access to top-tier land and housing options in high-appreciation zones.",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Personalized Strategy",
    text: "Every consultation is unique, designed specifically for your individual financial goals.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Transparent Guidance",
    text: "Clear, no-nonsense communication about property documentation and legal status.",
    icon: <Eye className="w-6 h-6" />
  }
];


export default function WhyChooseMe() {
  return (
    <section className="py-4 bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 bg-secondary rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-center"
          >
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">The Advantage</span>
            <h2 className="text-white font-sans text-4xl font-bold leading-tight mb-10">
              Why Choose My <span className="text-gold">Consultation?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
               {reasons.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                       {item.icon}
                    </div>
                    <div>
                        <h4 className="text-white text-base font-bold mb-1">{item.title}</h4>
                        <p className="text-white/40 text-[11px] leading-relaxed">{item.text}</p>
                    </div>
                </div>
               ))}
            </div>
          </motion.div>

          {/* Quick Contact Small Piece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-12 lg:col-span-5 bg-gold rounded-[2.5rem] p-8 flex items-center justify-between border border-gold/20 shadow-2xl shadow-gold/10"
          >
             <div>
                <div className="text-primary font-black text-2xl uppercase tracking-tighter">Let&apos;s Chat</div>
                <div className="text-primary/70 text-sm font-bold leading-none mt-1">Immediate Response</div>
             </div>
             <a
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white p-5 rounded-full hover:scale-110 transition-transform shadow-xl"
            >
               <Phone size={24} />
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
