"use client";

import { motion } from "framer-motion";
import React from "react";

export function Logo6() {
  return (
    <section className="px-[5%] py-12 md:py-16 lg:py-24 bg-celestial-dark">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-white/30 font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-12"
        >
          Trusted by Elite Institutions
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {/* We can use high-quality SVGs or text placeholders for a premium minimalist look */}
           {["FORBES", "VOGUE", "ARCH-DIGEST", "SOTHEBYS", "MOMA", "ROBB-REPORT"].map((name) => (
             <motion.div 
               key={name}
               whileHover={{ scale: 1.1, opacity: 1 }}
               className="flex justify-center"
             >
               <span className="font-display font-black text-xl md:text-2xl text-white tracking-tighter">
                 {name}
               </span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
