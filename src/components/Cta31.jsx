"use client";

import { motion } from "framer-motion";
import React from "react";

export function Cta31() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-32 bg-celestial-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-celestial-star/5 blur-[180px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-8 leading-tight">
            Begin Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-celestial-gold to-celestial-star text-glow">
              Ascension.
            </span>
          </h2>
          <p className="text-white/50 text-xl mb-12 max-w-xl mx-auto">
            The stars have aligned for your next move. Connect with our elite circle of verified brokers today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-gold !px-12 !py-4 text-lg">
              Inquire Now
            </button>
            <button className="px-12 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-md">
              Schedule Viewing
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          className="size-full object-cover aspect-[21/9] opacity-80"
          alt="Celestial Estate"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-celestial-dark via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
