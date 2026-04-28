"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { RxChevronRight, RxArrowRight } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark overflow-hidden">
      <Navbar6 />

      {/* 1. Hero Section - Monolithic Aesthetic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-celestial-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute inset-0 bg-celestial-dark/90"></div>
          <img
            src="/images/prop3.png"
            alt="Neighborhood architecture"
            className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"}
          />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-[5%] relative z-10 flex flex-col md:flex-row items-end justify-between pb-20 pt-40">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-celestial-gold font-display text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                Neighborhood Intelligence
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Master
                <br />
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  The Market
                </span>
              </h1>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-left md:text-right mt-12 md:mt-0"
          >
            <p className="text-gray-300 text-lg md:text-xl font-light mb-8 leading-relaxed border-l md:border-l-0 md:border-r border-celestial-gold/50 pl-6 md:pl-0 md:pr-6">
              Verified data and localized insights to guide your next premium acquisition in Philippine real estate.
            </p>
            <div className="flex md:justify-end gap-6">
              <Link href="/properties" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden transition-transform hover:scale-[1.02]">
                <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  Search Properties <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Three Pillars of Data Section */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5 relative">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 text-[15rem] font-display font-bold text-white/[0.02] uppercase leading-none pointer-events-none whitespace-nowrap z-0">
          INSIGHTS
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight mb-8 leading-[1.1]">
              The Anatomy of
              <br />
              <span className="font-bold italic text-gray-500">A Neighborhood</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed border-l border-celestial-gold/50 pl-6">
              We aggregate real data on infrastructure, security, and lifestyle. No marketing embellishments—only the metrics that dictate long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hyper-Local Metrics",
                desc: "Crime indices, school proximities, and commute algorithms verified by current resident data.",
                num: "01"
              },
              {
                title: "Architectural Context",
                desc: "Street-level analyses of development trajectory, zoning laws, and neighborhood character.",
                num: "02"
              },
              {
                title: "Broker Intelligence",
                desc: "Proprietary market insights from licensed professionals operating within specific districts.",
                num: "03"
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-celestial-dark p-12 border border-white/5 hover:border-celestial-gold/30 transition-colors group relative overflow-hidden">
                <div className="absolute -right-4 -top-8 text-[10rem] font-display font-bold text-white/[0.03] group-hover:text-celestial-gold/[0.05] transition-colors pointer-events-none">
                  {pillar.num}
                </div>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:border-celestial-gold transition-colors">
                  <span className="font-display text-celestial-gold font-bold">{pillar.num}</span>
                </div>
                <h3 className="text-2xl font-display font-light text-white uppercase mb-6">{pillar.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Staggered Visual Gallery */}
      <section className="bg-celestial-dark py-40 px-[5%] border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
              <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Districts</p>
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter leading-[1.1] mb-8">
              Visual <span className="font-bold italic text-white">Cartography</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Every district dictates its own aesthetic and rhythm. Explore the visual identity of the most coveted areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "/images/prop1.png",
              "/images/prop2.png",
              "/images/prop3.png",
              "/images/hero.png",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
            ].map((src, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-square bg-[#0f0f12] overflow-hidden group rounded-sm"
              >
                <img 
                  src={src} 
                  alt={`District ${i}`} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Guides Section */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter leading-[1.1]">
                Intelligence
                <br />
                <span className="font-bold italic text-celestial-gold">Reports</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md border-l border-white/10 pl-6">
              Comprehensive analyses of the forces shaping the most premium ZIP codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Guide 1 */}
            <Link href="/properties" className="group flex flex-col border border-white/5 bg-celestial-dark hover:border-celestial-gold/50 transition-colors duration-500">
              <div className="aspect-[4/3] bg-[#0f0f12] overflow-hidden relative">
                <img src="/images/prop1.png" alt="Makati" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Makati
                  </span>
                  <span className="px-3 py-1.5 bg-celestial-gold text-black text-[9px] font-display font-bold uppercase tracking-widest">
                    8 Min Read
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-light text-white uppercase mb-4 leading-snug group-hover:text-celestial-gold transition-colors">
                  The Financial Heart<br />of the Metropolis
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  How corporate towers, infrastructure developments, and ultra-luxury residential zoning are redefining the district.
                </p>
                <div className="flex items-center gap-2 text-white font-display uppercase tracking-widest text-[10px] font-bold group-hover:text-celestial-gold transition-colors">
                  Access Report <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Guide 2 */}
            <Link href="/properties" className="group flex flex-col border border-white/5 bg-celestial-dark hover:border-celestial-gold/50 transition-colors duration-500 mt-0 md:mt-12">
              <div className="aspect-[4/3] bg-[#0f0f12] overflow-hidden relative">
                <img src="/images/prop2.png" alt="Cebu" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Cebu
                  </span>
                  <span className="px-3 py-1.5 bg-celestial-gold text-black text-[9px] font-display font-bold uppercase tracking-widest">
                    6 Min Read
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-light text-white uppercase mb-4 leading-snug group-hover:text-celestial-gold transition-colors">
                  Evolution of a<br />Modern Hub
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  From a historic port city to a thriving nexus of global business and premium beachfront residential estates.
                </p>
                <div className="flex items-center gap-2 text-white font-display uppercase tracking-widest text-[10px] font-bold group-hover:text-celestial-gold transition-colors">
                  Access Report <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Guide 3 */}
            <Link href="/properties" className="group flex flex-col border border-white/5 bg-celestial-dark hover:border-celestial-gold/50 transition-colors duration-500 mt-0 md:mt-24">
              <div className="aspect-[4/3] bg-[#0f0f12] overflow-hidden relative">
                <img src="/images/prop3.png" alt="Davao" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Davao
                  </span>
                  <span className="px-3 py-1.5 bg-celestial-gold text-black text-[9px] font-display font-bold uppercase tracking-widest">
                    7 Min Read
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-display font-light text-white uppercase mb-4 leading-snug group-hover:text-celestial-gold transition-colors">
                  The Logic of<br />Southern Investment
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  Why security metrics, rapid economic growth, and expansive executive zoning attract sophisticated capital.
                </p>
                <div className="flex items-center gap-2 text-white font-display uppercase tracking-widest text-[10px] font-bold group-hover:text-celestial-gold transition-colors">
                  Access Report <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Monolithic CTA */}
      <section className="relative py-40 overflow-hidden bg-celestial-dark border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero.png"
            className="w-full h-full object-cover grayscale blur-sm"
            alt="Abstract architecture"
            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-celestial-dark via-celestial-dark/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-[5%] relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light text-white uppercase tracking-tighter leading-[1] mb-12">
            Make Your
            <br />
            <span className="font-bold italic text-celestial-gold">Move</span>
          </h2>
          <p className="text-gray-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            Connect with a verified broker who commands intimate knowledge of these key districts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/properties" className="px-12 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors duration-300">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="px-12 py-5 bg-transparent border border-white/30 text-white font-display uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors duration-300">
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
