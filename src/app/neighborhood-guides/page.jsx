"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Compass, BookOpen, User, ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-celestial-dark min-h-screen">
      <Navbar6 />
      
      {/* 1. Hero Section */}
      <section className="pt-48 pb-32 px-[5%] text-center relative overflow-hidden">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-[10px] mb-8"
        >
          Neighborhoods
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-tight"
        >
          Know Before <br />
          <span className="text-gradient">You Buy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body"
        >
          Verified data and local insight guide your next move in Philippine real estate.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-6"
        >
          <button className="bg-white text-celestial-dark font-bold px-12 py-4 rounded-full hover:scale-105 transition-transform text-sm uppercase tracking-widest">
            Explore
          </button>
          <button className="btn-outline !px-12 !py-4 text-sm uppercase tracking-widest">
            Learn
          </button>
        </motion.div>
      </section>

      {/* 2. Feature Section (Tagline) */}
      <section className="py-32 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6">Tagline</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest leading-tight">
              Curated Data For <br />
              The Discerning Investor
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto mt-8 leading-relaxed">
              We analyze market trends, infrastructure developments, and local amenities to provide 
              a comprehensive view of every premium neighborhood.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <ShieldCheck size={32} />, title: "Broker Verified", desc: "Every insight is backed by boots-on-the-ground data from our network of licensed local experts." },
              { icon: <Compass size={32} />, title: "Strategic Location", desc: "We identify areas with high capital appreciation potential and proximity to key hubs." },
              { icon: <ShieldCheck size={32} />, title: "Safety Audited", desc: "In-depth safety and security reports for every district, ensuring your peace of mind." }
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="text-celestial-gold mb-8 flex justify-center group-hover:text-glow transition-all">{f.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest leading-tight">{f.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{f.desc}</p>
                <div className="mt-8 text-white/10 group-hover:text-celestial-gold transition-colors">
                  <ChevronRight size={24} className="mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Image Gallery */}
      <section className="py-32 px-[5%] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest mb-6">Image Gallery</h2>
            <p className="text-white/40">Glimpses into the lifestyle of our most coveted districts.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden celestial-border group cursor-pointer">
                <img 
                  src={`/images/prop${(i % 3) + 1}.jpg`} 
                  alt="Gallery" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Blog Section */}
      <section className="py-32 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-celestial-gold text-[10px] uppercase tracking-widest font-bold mb-4">Blog</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest">Neighborhood Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Makati: The Financial Core", time: "5 min read", img: "/images/prop1.jpg" },
              { title: "Cebu: The Coastal Gem", time: "7 min read", img: "/images/prop2.jpg" },
              { title: "BGC: The Future City", time: "4 min read", img: "/images/prop3.jpg" }
            ].map((post, i) => (
              <div key={i} className="glass-card overflow-hidden group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 block">{post.time}</span>
                  <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-glow transition-all">{post.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">
                    Discover why this district continues to lead in luxury residence demand and infrastructure.
                  </p>
                  <div className="text-white/20 group-hover:text-celestial-gold transition-colors"><span>→</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-40 px-[5%] text-center">
        <h2 className="text-4xl md:text-8xl font-display font-bold text-white uppercase tracking-tight mb-12">
          Your Next Move <br />
          <span className="text-gradient">Starts Here</span>
        </h2>
        <button className="btn-gold !px-16 !py-6 text-lg mb-24">Explore Guides</button>
        <div className="celestial-border rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl shadow-celestial-gold/10">
          <img src="/images/cta_bg.jpg" alt="Final View" className="w-full h-full object-cover opacity-60" />
        </div>
      </section>

      <Footer10 />
    </div>
  );
}


