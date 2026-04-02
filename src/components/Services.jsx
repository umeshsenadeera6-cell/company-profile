import React from 'react';
import { motion } from 'framer-motion';
import { Map, Headphones, Users, Building } from 'lucide-react';

const services = [
  {
    title: 'Tour Planning',
    desc: 'Custom itineraries tailored to your unique interests and travel rhythm.',
    icon: <Map size={32} />
  },
  {
    title: 'Travel Consultation',
    desc: 'Expert advice on destinations, visas, and local safety protocols.',
    icon: <Headphones size={32} />
  },
  {
    title: 'Group Tours',
    desc: 'Join shared adventures with fellow travelers and expert guides.',
    icon: <Users size={32} />
  },
  {
    title: 'Corporate Travel',
    desc: 'Streamlined business travel solutions for companies and teams.',
    icon: <Building size={32} />
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary/60 max-w-2xl mx-auto mt-4"
          >
            We handle everything so you can focus on the journey. From meticulously planned logistics to 24/7 support.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((s, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-glass-border flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-secondary/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
