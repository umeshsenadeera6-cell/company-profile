import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

const destinations = [
  {
    title: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    category: 'Cultural'
  },
  {
    title: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    category: 'Coastal'
  },
  {
    title: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=800',
    category: 'Adventure'
  },
  {
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    category: 'Tropical'
  },
  {
    title: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    category: 'Romantic'
  },
  {
    title: 'Petra, Jordan',
    image: 'https://images.unsplash.com/photo-1579606030130-48fdcb763d3c?auto=format&fit=crop&q=80&w=800',
    category: 'Ancient'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="section-label">Explore</p>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="text-secondary/60 text-lg">Curated collections of the world's most breathtaking locations.</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all pb-2 border-b-2 border-primary/10 hover:border-primary">
            View All Destinations <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg border border-glass-border cursor-pointer"
            >
              <img 
                src={d.image} 
                alt={d.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 right-6">
                <div className="glass px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white border-white/20">
                  {d.category}
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <MapPin size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">{d.category} Voyage</span>
                </div>
                <h3 className="text-white text-3xl font-black mb-4">{d.title}</h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-white/60 text-xs font-semibold">Discovery awaits you...</span>
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
