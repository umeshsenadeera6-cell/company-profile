import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Redefining the Way <br /><span className="text-primary italic">You See the World</span></h2>
            <p className="text-secondary/70 text-lg mb-8 leading-relaxed">
              Founded in 2020, Astra Travel began with a simple mission: to make luxury travel accessible and authentic. What started as a small team of passionate explorers has grown into a premier travel partner, dedicated to crafting unique journeys that go beyond the ordinary.
            </p>
            <p className="text-secondary/70 text-lg mb-8 leading-relaxed">
              We believe that travel is not just about visiting new places, but about gaining new perspectives. Our team painstakingly selects every destination and experience to ensure it meets our rigorous standards of quality, safety, and cultural integrity.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <div className="p-6 bg-background rounded-2xl border border-glass-border">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-secondary/60 text-sm">To provide seamless, unforgettable travel experiences that inspire and enrich the soul.</p>
              </div>
              <div className="p-6 bg-background rounded-2xl border border-glass-border">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                  <Eye size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-secondary/60 text-sm">To be the world's most trusted companion for authentic and sustainable global exploration.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000" 
                alt="Traveler exploring" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
            
            <div className="absolute top-1/2 -right-8 glass p-6 rounded-3xl shadow-xl z-20 max-w-[200px] hidden md:block animate-float">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                  <Rocket size={20} />
                </div>
                <span className="font-bold text-sm">Fast Growing</span>
              </div>
              <p className="text-secondary/60 text-xs line-clamp-2">Leading the industry in curated cultural expeditions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
