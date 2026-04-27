"use client";

import { motion } from "framer-motion";
import React from "react";

const stats = [
  { label: "Verified Listings", value: "2,847", suffix: "+" },
  { label: "Active Licensed Brokers", value: "156", suffix: "" },
  { label: "Properties Sold (2024)", value: "₱18.3B", suffix: "" }
];

export function Stats1() {
  return (
    <section className="px-[5%] py-24 md:py-32 bg-celestial-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-celestial-gold/[0.03] blur-[150px] rounded-full pointer-events-none"></div>


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-24 items-end">
          <div className="reveal reveal-stagger-1">
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9]">
              The Numbers <br />
              <span className="text-gradient">Speak.</span>
            </h2>
          </div>
          <div className="reveal reveal-stagger-2">
            <p className="text-white/50 text-xl leading-relaxed mb-10 font-body">
              We have built a sanctuary of trust in the Philippine market. 
              Every figure represents a verified dream and a secured legacy for our clients.
            </p>
            <button className="text-white text-xs font-bold uppercase tracking-[0.3em] border-b border-celestial-gold/50 pb-2 hover:text-celestial-gold hover:border-celestial-gold transition-all">
              Verification Methodology
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:border-celestial-gold/30 transition-all hover:bg-white/[0.04]"
            >
              <div className="absolute top-0 left-10 w-px h-10 bg-gradient-to-b from-celestial-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 flex items-baseline tracking-tighter">
                {stat.value}
                <span className="text-celestial-gold text-2xl ml-2 font-display">{stat.suffix}</span>
              </div>
              <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

