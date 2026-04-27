"use client";

import { motion } from "framer-motion";
import React from "react";

export function Cta32() {
  return (
    <section className="px-[5%] py-24 md:py-40 bg-celestial-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-madison/5 blur-[150px] rounded-full"></div>

      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="celestial-border">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#050505]/90 backdrop-blur-3xl p-12 md:p-24 text-center rounded-[calc(1.5rem-1px)]"
          >
            <div className="reveal reveal-stagger-1 inline-block mb-10 p-4 rounded-3xl bg-white/[0.03] border border-white/10">
               <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-celestial-gold to-dodger flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                  <span className="text-white text-2xl">✦</span>
               </div>
            </div>

            <h2 className="reveal reveal-stagger-2 text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[0.9]">
              The Horizon <br />
              <span className="text-gradient">Awaits.</span>
            </h2>
            
            <p className="reveal reveal-stagger-3 text-white/50 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
              Our most exclusive architectural marvels never reach the public domain. 
              Join the AETHER circle for private invitations.
            </p>

            <form className="reveal reveal-stagger-4 max-w-lg mx-auto flex flex-col sm:flex-row gap-4 mb-10" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email for private access"
                className="flex-1 bg-white/[0.02] border border-white/10 rounded-full px-10 py-5 text-white focus:outline-none focus:border-celestial-gold/40 focus:bg-white/[0.05] transition-all placeholder:text-white/20 text-sm tracking-wider"
              />
              <button className="btn-gold !px-12 !py-5 shadow-2xl">
                Request Entry
              </button>
            </form>
            
            <p className="reveal reveal-stagger-5 text-white/20 text-[10px] uppercase tracking-[0.5em]">
              Exclusivity guaranteed. Absolute privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

