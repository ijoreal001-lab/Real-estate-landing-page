import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

const testimonials = [
  {
    name: "Olawale Benson",
    quote: "Dada Samson guided me through my first land purchase in Epe. His transparency and knowledge about property documentation made the entire process stress-free.",
    image: "https://i.pravatar.cc/150?u=olawale"
  },
  {
    name: "Dr. Elizabeth Adenuga",
    quote: "Finding an investment property that actually yields high returns is tough. Samson's strategic recommendations helped me secure a premium condo in Ikoyi that has already appreciated significantly.",
    image: "https://i.pravatar.cc/150?u=elizabeth"
  },
  {
    name: "Engr. Felix Izu",
    quote: "Working with a consultant who actually listens to your goals is rare. I appreciate the personalized strategy and the access to exclusive opportunities that aren't on the general market.",
    image: "https://i.pravatar.cc/150?u=felix"
  }
];


export default function Testimonials() {
  return (
    <section className="py-12 bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 bg-secondary rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-center">
            <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">Testimonials</span>
            <h2 className="text-white font-sans text-4xl font-bold leading-tight">
              Client <span className="text-gold">Stories</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.slice(0, 2).map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card-light p-10 rounded-[2.5rem] border border-white/5 relative"
              >
                <div className="absolute top-6 right-8 opacity-10">
                    <Quote size={40} className="text-gold" />
                </div>
                <p className="text-white/60 leading-relaxed italic mb-8 font-serif text-lg">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-white font-bold text-xs tracking-wide uppercase">{t.name}</h4>
                    <p className="text-gold text-[8px] uppercase font-black tracking-widest mt-0.5">Satisfied Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
