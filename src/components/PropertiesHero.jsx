"use client";

import { motion } from "framer-motion";
import React from "react";

export function PropertiesHero() {
  return (
    <section className="relative pt-48 pb-32 px-[5%] bg-celestial-dark overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-xs mb-8"
        >
          Verified
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-10 leading-tight"
        >
          Luxury Properties <br />
          <span className="text-gradient">Await</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body tracking-wide"
        >
          Licensed brokers. Transparent pricing. <br className="hidden md:block" />
          No ghost listings here. Only the pinnacle of real estate.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-gold !px-12">
            Search
          </button>
          <button className="btn-outline !px-12">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient(circle_at_center,_rgba(11,59,97,0.1)_0%,_transparent_70%) pointer-events-none opacity-50"></div>
    </section>
  );
}
