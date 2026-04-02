import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Eleanor Vance',
    role: 'Tour Strategy Lead',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-label">Our People</p>
          <h2 className="section-title">Meet the Experts</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto mt-4">The passionate global team behind every extraordinary journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-6 shadow-lg border border-glass-border aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white text-sm font-semibold mb-1">{member.role}</p>
                  <h3 className="text-white text-2xl font-black">{member.name}</h3>
                </div>
              </div>
              <div className="text-center md:text-left md:pl-4 group-hover:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-secondary/60 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
