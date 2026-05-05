import { motion } from "motion/react";
import { Building2, Landmark, Home, LineChart, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

const services = [
  {
    title: "Property Investment Consulting",
    description: "Identify high-growth potential properties and maximize your investment returns with data-driven insights.",
    icon: <LineChart className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Land Acquisition Guidance",
    description: "Secure litigation-free and strategically located land plots for residential or commercial development.",
    icon: <Landmark className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Residential Property Advisory",
    description: "From luxury apartments to family homes, find the perfect residence that suits your lifestyle and budget.",
    icon: <Home className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Real Estate Market Insights",
    description: "Stay ahead with comprehensive reports on market trends, legal frameworks, and upcoming opportunities.",
    icon: <Building2 className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Property Portfolio Strategy",
    description: "Professional management and strategic planning to diversify and strengthen your real estate holdings.",
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    image: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];


export default function Services() {
  return (
    <section id="services" className="py-4 bg-primary px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 bg-card-light rounded-[2.5rem] p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">Elite Services</span>
              <h2 className="text-white font-sans text-3xl font-bold leading-tight mb-6">
                Premium Real Estate <span className="text-gold">Solutions</span>
              </h2>
            </div>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 group cursor-default">
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  <span className="text-white/60 group-hover:text-white transition-colors text-sm font-medium">{service.title}</span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP_LINK} className="mt-12 text-gold text-[10px] font-black uppercase tracking-[0.2em] underline underline-offset-8 hover:text-white transition-colors">
              Request Full Portfolio
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary rounded-[2.5rem] p-8 border border-white/5 hover:border-gold/20 transition-all group flex flex-col gap-6"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-all duration-500">
                  {service.icon}
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed font-medium">
                        {service.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
