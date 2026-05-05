import { motion } from "motion/react";
import { MapPin, Maximize } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

const properties = [
  {
    title: "The Emerald Heights",
    location: "Lekki Phase 1, Lagos",
    type: "Luxury 5BR Fully Detached Villa",
    feature: "Private Cinema & Pool",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sapphire Bay Residences",
    location: "Ikoyi, Lagos",
    type: "4BR Luxury Penthouse",
    feature: "Panoramic Water View",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Golden Heritage Estate",
    location: "Epe, Lagos",
    type: "Residential Plot (500SQM)",
    feature: "C of O, Instant Allocation",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];


export default function FeaturedProperties() {
  return (
    <section id="investments" className="py-4 bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 bg-secondary rounded-[2.5rem] p-10 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">Exclusive Portfolio</span>
              <h2 className="text-white font-sans text-3xl font-bold leading-tight">
                Featured Property <span className="text-gold">Opportunities</span>
              </h2>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary border border-white/10 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
            >
              Contact for more listings
            </a>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {properties.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card-light rounded-[2.5rem] overflow-hidden border border-white/5 group h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-primary text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                    New Opportunity
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">{prop.title}</h3>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 mb-4">
                      <MapPin size={10} className="text-gold" />
                      {prop.location}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between items-center mt-auto">
                    <span className="text-gold text-xs font-bold uppercase tracking-widest leading-none">High ROI Potential</span>
                    <a href={WHATSAPP_LINK} target="_blank" className="text-white hover:text-gold transition-colors">
                        <Maximize size={16} />
                    </a>
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
