"use client";

import { motion } from "framer-motion";
import React from "react";
import { ChevronRight, ShieldCheck, BadgeCheck, Eye } from "lucide-react";

const features = [
  {
    title: "Verified Agents",
    description: "Each broker displays their license number and credential status in real time.",
    icon: <ShieldCheck className="size-8 text-celestial-gold" />
  },
  {
    title: "Scam-Free Listings",
    description: "Our team inspects properties and confirms ownership before publication.",
    icon: <BadgeCheck className="size-8 text-dodger" />
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees. All costs displayed upfront in clear, detailed breakdowns.",
    icon: <Eye className="size-8 text-white" />
  }
];

export function Layout239() {
  return (
    <section className="px-[5%] py-24 md:py-32 bg-celestial-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="max-w-3xl">
            <p className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-xs mb-6 reveal reveal-stagger-1">
              Unrivaled Security
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight reveal reveal-stagger-2">
              Three Pillars of <br />
              <span className="text-gradient">Confidence.</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed reveal reveal-stagger-3">
              We verify every broker and authenticate every listing before it appears on our platform, 
              ensuring your journey is as secure as it is spectacular.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-celestial-gold/20 transition-all group hover:bg-white/[0.04]"
            >
              <div className="mb-8 p-5 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                {feature.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5 group-hover:text-glow transition-all">
                {feature.title}
              </h3>
              <p className="text-white/40 leading-relaxed font-body tracking-wide">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center gap-8 reveal reveal-stagger-4">
          <button className="btn-gold">
            Explore Collection
          </button>
          <button className="flex items-center gap-3 text-white/50 hover:text-white transition-all font-bold uppercase tracking-[0.3em] text-[10px]">
            Security Protocol <ChevronRight size={14} className="text-celestial-gold" />
          </button>
        </div>
      </div>
    </section>
  );
}

