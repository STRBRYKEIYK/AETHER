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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-30 hover:opacity-60 transition-all duration-1000">
           {[
             "Forbes", "Vogue", "ArchDigest", "Sotheby's", "MoMA", "RobbReport"
           ].map((brand) => (
             <motion.div 
               key={brand}
               whileHover={{ scale: 1.05 }}
               className="flex justify-center"
             >
               <span className="font-display text-lg md:text-xl text-white/40 hover:text-white tracking-[0.2em] uppercase transition-colors duration-500">
                 {brand}
               </span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
