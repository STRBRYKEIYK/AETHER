"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-celestial-dark min-h-screen font-body">
      <Navbar6 />
      
      {/* 1. Hero Section */}
      <section className="pt-48 pb-32 px-[5%] text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-[10px] mb-8"
        >
          Reach
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-tight uppercase"
        >
          Contact <br />
          <span className="text-gradient">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Connect securely with our verified real estate experts.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <button className="bg-white text-celestial-dark font-bold px-12 py-4 rounded-full hover:scale-105 transition-transform text-sm uppercase tracking-widest">
            Inquire
          </button>
          <button className="btn-outline !px-12 !py-4 text-sm uppercase tracking-widest">
            Learn
          </button>
        </motion.div>
      </section>

      {/* 2. Direct Contact Section */}
      <section className="py-32 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Direct</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest leading-tight mb-8">
              Get in touch
            </h2>
            <p className="text-white/40 mb-16 leading-relaxed max-w-md">
              Reach our team by phone, email, or visit our office in Manila.
            </p>
            
            <div className="space-y-12">
              <div className="group cursor-default">
                <Mail className="text-celestial-gold mb-6 group-hover:text-glow transition-all" size={24} />
                <h4 className="text-sm font-display font-bold text-white mb-2 uppercase tracking-widest">Email</h4>
                <p className="text-white/30 text-xs mb-4">Send us a message</p>
                <a href="mailto:hello@premiumphilippineproperties.com" className="text-white hover:text-celestial-gold transition-colors font-bold underline underline-offset-8 decoration-white/10">
                  hello@premiumphilippineproperties.com
                </a>
              </div>
              
              <div className="group cursor-default">
                <Phone className="text-celestial-gold mb-6 group-hover:text-glow transition-all" size={24} />
                <h4 className="text-sm font-display font-bold text-white mb-2 uppercase tracking-widest">Phone</h4>
                <p className="text-white/30 text-xs mb-4">Call our support team</p>
                <a href="tel:+63288880000" className="text-white hover:text-celestial-gold transition-colors font-bold underline underline-offset-8 decoration-white/10">
                  +63 (2) 8888-0000
                </a>
              </div>
              
              <div className="group cursor-default">
                <MapPin className="text-celestial-gold mb-6 group-hover:text-glow transition-all" size={24} />
                <h4 className="text-sm font-display font-bold text-white mb-2 uppercase tracking-widest">Office</h4>
                <p className="text-white/30 text-xs mb-4">BGC, Taguig City, Metro Manila</p>
                <button className="text-white hover:text-celestial-gold transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 mt-4">
                  View location <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="celestial-border rounded-[3rem] overflow-hidden aspect-video shadow-2xl shadow-celestial-gold/10">
              <img src="/images/cta_bg.jpg" alt="Office View" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Contact Form Section */}
      <section className="py-40 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Tagline</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest mb-10">Contact us</h2>
            <p className="text-white/40 mb-16 leading-relaxed max-w-md font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60">
                <Mail size={18} className="text-celestial-gold" />
                <span className="text-sm">email@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Phone size={18} className="text-celestial-gold" />
                <span className="text-sm">+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <MapPin size={18} className="text-celestial-gold" />
                <span className="text-sm">123 Sample St, Sydney NSW 2000 AU</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">First name</label>
                <input type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-celestial-gold/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Last name</label>
                <input type="text" className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-celestial-gold/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Email</label>
                <input type="email" className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-celestial-gold/50 transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Phone number</label>
                <input type="tel" className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-celestial-gold/50 transition-all" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Choose a topic</label>
                <select className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-6 py-4 text-white/40 focus:outline-none focus:border-celestial-gold/50 transition-all appearance-none cursor-pointer">
                  <option>Select one...</option>
                  <option>Inquiry</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Which best describes you?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-5 h-5 border border-white/20 rounded-full group-hover:border-celestial-gold transition-colors"></div>
                    <span className="text-white/40 group-hover:text-white transition-colors text-sm font-body">Buyer</span>
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="w-5 h-5 border border-white/20 rounded-full group-hover:border-celestial-gold transition-colors"></div>
                    <span className="text-white/40 group-hover:text-white transition-colors text-sm font-body">Broker</span>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold ml-1">Message</label>
                <textarea rows="4" className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-celestial-gold/50 transition-all resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-dodger hover:bg-dodger/80 text-white font-bold px-12 py-4 rounded-full transition-all text-sm uppercase tracking-widest float-right">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}


