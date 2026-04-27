"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Header145() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-celestial-dark pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          className="size-full object-cover opacity-60 scale-105 animate-slow-zoom"
          alt="Celestial Luxury Hero"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-celestial-dark/80 via-transparent to-celestial-dark"></div>
      </div>

      <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="reveal reveal-stagger-1 inline-block mb-8 px-5 py-2 border border-celestial-gold/30 rounded-full bg-celestial-gold/10 backdrop-blur-md">
            <span className="text-celestial-gold text-xs font-bold tracking-[0.3em] uppercase">
              The Pinnacle of Philippine Real Estate
            </span>
          </div>
          
          <h1 className="reveal reveal-stagger-2 mb-10 text-6xl md:text-7xl lg:text-[7.5rem] font-display font-bold leading-[0.85] text-white text-glow">
            Find Your Home <br />
            <span className="text-gradient">Under the Stars</span>
          </h1>

          
          <p className="reveal reveal-stagger-3 max-w-2xl mx-auto mb-12 text-lg md:text-xl text-white/60 font-body leading-relaxed tracking-wide">
            Experience celestial luxury redefined. Every architectural masterpiece in our collection 
            is a sanctuary designed for the most discerning visionaries.
          </p>
          
          <div className="reveal reveal-stagger-4 flex flex-wrap items-center justify-center gap-8">
            <button className="btn-gold group relative">
              <span className="relative z-10">Discover Collections</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button className="btn-outline group flex items-center gap-2">
              Learn Our Philosophy
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-madison/20 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-celestial-gold/10 blur-[150px] rounded-full animate-float [animation-delay:2s]"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-celestial-gold/50 to-transparent"></div>
      </div>
    </section>
  );
}

