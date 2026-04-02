import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Instagram, Twitter, Facebook, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="pt-24 pb-12 bg-secondary text-white border-t border-glass-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white p-2 rounded-xl flex items-center justify-center">
                <Compass size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                ASTRA<span className="text-primary italic">TRAVEL</span>
              </span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Crafting premium travel experiences across the globe. Our mission is to connect travelers with the most authentic versions of our world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  whileHover={{ scale: 1.1, color: 'hsl(var(--primary))' }}
                  href="#" 
                  className="text-white/80 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold">Solutions</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">Luxury Tours</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cultural Expeditions</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Eco Travel</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Adventure Sports</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold">Company</h4>
            <ul className="space-y-4 text-white/50 font-medium">
              <li className="hover:text-primary transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Expert Team</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Sustainability</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Newsroom</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-bold">Stay Updated</h4>
            <p className="text-white/60">Subscribe to our newsletter for curated travel guides and exclusive offers.</p>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 group focus-within:border-primary transition-colors">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent px-5 py-3 outline-none flex-grow text-white placeholder:text-white/20"
              />
              <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:brightness-110 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-semibold">
          <p>© 2026 Astra Travel. All Rights Reserved.</p>
          <div className="flex gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <div className="flex items-center gap-2">
            Made with <Heart size={16} fill="currentColor" className="text-accent" /> for global explorers
          </div>
        </div>
      </div>
    </footer>
  );
}
