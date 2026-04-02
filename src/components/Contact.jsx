import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label">Connect</p>
            <h2 className="section-title">Ready to Plan <br /><span className="text-primary italic">Your Next Journey?</span></h2>
            <p className="text-secondary/70 text-lg mb-10 leading-relaxed max-w-md">
              Whether you have a specific destination in mind or need inspiration, our travel experts are here to help. Reach out and start your adventure today.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-glass-border group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold">hello@astratravel.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-glass-border group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-glass-border group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-secondary/50 text-xs font-bold uppercase tracking-widest mb-1">Office</p>
                  <p className="text-xl font-bold">45 Global Way, London, UK</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary/60 hover:text-primary shadow-sm border border-glass-border transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 glass rounded-[3rem] shadow-2xl border border-white/50 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary rounded-full filter blur-3xl opacity-10"></div>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary/70 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-white/50 border border-glass-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-secondary/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-secondary/70 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 bg-white/50 border border-glass-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-secondary/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary/70 ml-2">Preferred Destination</label>
                <input 
                  type="text" 
                  placeholder="e.g. Kyoto, Japan" 
                  className="w-full px-6 py-4 bg-white/50 border border-glass-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-secondary/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary/70 ml-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your dream trip..." 
                  className="w-full px-6 py-4 bg-white/50 border border-glass-border rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-secondary/30 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn btn-primary py-5 rounded-2xl text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/30"
              >
                Send Message
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
