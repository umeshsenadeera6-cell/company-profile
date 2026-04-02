import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Wilson',
    location: 'London, UK',
    quote: 'The attention to detail on our custom tour of Japan was unparalleled. Every moment was a perfect blend of culture and comfort.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sophia Aris',
    location: 'New York, USA',
    quote: 'Finding small, local gems in Switzerland wouldn\'t have been possible without Astra\'s expertise. An absolute dream journey.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Liam Miller',
    location: 'Sydney, Australia',
    quote: 'Seamless logistics and truly authentic experiences. I\'ve never felt more connected to a destination before.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-label">Voices</p>
          <h2 className="section-title">What Our Travelers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 bg-background border border-glass-border rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>

              <p className="text-secondary/70 italic mb-8 leading-relaxed">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" 
                />
                <div>
                  <h4 className="text-lg font-black">{t.name}</h4>
                  <p className="text-secondary/50 text-xs font-semibold">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
