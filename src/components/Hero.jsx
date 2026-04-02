import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play, Star } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={{
      minHeight: '92vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '80px',
      borderRadius: '2.5rem',
      backgroundColor: '#000',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Background Image with Zoom Effect */}
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={heroImg} 
        alt="Luxury Travel Resort" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none'
        }} 
      />

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="glass-dark" 
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 'clamp(2rem, 8vw, 4rem)',
          borderRadius: '2.5rem',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '2rem',
          color: '#fff',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)'
        }}
      >
        <motion.div 
          variants={itemVariants}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '1.5rem',
            padding: '0.5rem 1.25rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '0.05em'
          }}
        >
          <Star size={16} fill="currentColor" />
          VOTED SRI LANKA'S BEST TRAVEL PARTNER 2026
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-[clamp(3rem,10vw,6rem)] font-black mb-8 leading-[1] tracking-tighter text-white drop-shadow-2xl"
        >
          Explore the World <br />
          <span className="text-primary italic">With Us</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-[clamp(1.1rem,2.5vw,1.5rem)] mb-12 opacity-95 font-medium max-w-[800px] mx-auto leading-relaxed text-white/90 drop-shadow-md"
        >
          Embark on unforgettable journeys across continents. From serene landscapes to vibrant cityscapes, we craft experiences that last a lifetime.
        </motion.p>

        
        <motion.div 
          variants={itemVariants}
          className="flex gap-5 justify-center flex-wrap"
        >
          <motion.button 
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary px-10 py-4 text-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ChevronRight size={20} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 text-lg bg-white/10 text-white backdrop-blur-md rounded-full border border-white/20 flex items-center gap-3 cursor-pointer font-bold transition-all"
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Play size={16} fill="white" />
            </div>
            Our Story
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Decorative Gradient Overlays */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)',
        pointerEvents: 'none'
      }} />
    </section>
  );
}
