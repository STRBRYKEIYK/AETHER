"use client";

import { motion } from "framer-motion";
import React from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

export function Layout16() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-celestial-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-celestial-gold font-display font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight mb-8">
              Premium Estates <br />
              Built on <span className="text-celestial-star">Trust.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              We built AETHER because the Philippine market deserved more than just listings—it deserved a standard of excellence. No scams, no ghost listings, just pure architectural poetry.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Brokers verified in real-time via institutional link",
                "Physical inspection of every celestial listing",
                "Transparent pricing with no hidden cosmic fees"
              ].map((text, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 p-1 rounded-full bg-celestial-gold/10 border border-celestial-gold/30">
                    <CheckCircle2 className="size-4 text-celestial-gold" />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-8">
              <button className="btn-gold !px-10">
                Learn More
              </button>
              <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs">
                View Policy <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-celestial-gold/5 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
              className="relative z-10 w-full object-cover aspect-[4/5] rounded-[2rem] shadow-2xl border border-white/10"
              alt="Luxury Estate"
            />
            {/* Floating Glass Element */}
            <div className="absolute -bottom-10 -left-10 z-20 glass-card p-6 border-white/20 hidden md:block">
              <p className="text-white font-display font-bold text-xl mb-1 tracking-tight">Verified 2024</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Credential Status: Active</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
