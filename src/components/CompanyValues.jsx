import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Heart, Award } from 'lucide-react';

const values = [
  {
    title: 'Trust',
    desc: 'Reliability you can count on, from booking to your return home.',
    icon: <ShieldCheck size={28} />,
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    title: 'Quality Service',
    desc: 'Excellence in every detail, ensuring your comfort and delight.',
    icon: <Award size={28} />,
    color: 'bg-primary/10 text-primary'
  },
  {
    title: 'Customer Satisfaction',
    desc: 'Your happiness is our priority, and we go the extra mile.',
    icon: <Heart size={28} />,
    color: 'bg-red-500/10 text-red-500'
  },
  {
    title: 'Safety First',
    desc: 'Uncompromising safety standards throughout your entire journey.',
    icon: <Star size={28} />,
    color: 'bg-yellow-500/10 text-yellow-500'
  }
];

export default function CompanyValues() {
  return (
    <section id="values" className="py-24 bg-white border-y border-glass-border">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-14 h-14 ${v.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-black/5`}>
                {v.icon}
              </div>
              <h4 className="text-xl font-black mb-3">{v.title}</h4>
              <p className="text-secondary/60 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
