"use client";

import { motion } from "framer-motion";
import React from "react";

export function PropertiesCta() {
  return (
    <section className="px-[5%] py-24 md:py-40 bg-celestial-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-tight"
        >
          Ready to Find Your <br />
          <span className="text-gradient">Property</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with a verified broker who knows the market and protects your interests completely.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
        >
          <button className="bg-white text-celestial-dark font-bold px-12 py-5 rounded-full hover:scale-105 transition-transform">
            Inquire
          </button>
          <button className="btn-outline !px-12 !py-5">
            Browse
          </button>
        </motion.div>

        {/* Large Decorative Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="celestial-border"
        >
          <div className="aspect-video rounded-[calc(1.5rem-1px)] overflow-hidden bg-celestial-deep">
            <img 
              src="/images/cta_bg.jpg" 
              alt="Celestial Horizon" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-10000 hover:scale-110"
            />
          </div>
        </motion.div>
      </div>

      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-gradient-to-t from-celestial-gold/10 to-transparent pointer-events-none"></div>
    </section>
  );
}
