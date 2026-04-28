"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { Logo6 } from "@/components/Logo6";
import { motion } from "framer-motion";
import { RxChevronRight, RxArrowRight } from "react-icons/rx";
import { FaLinkedinIn, FaXTwitter, FaGlobe } from "react-icons/fa6";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark overflow-hidden">
      <Navbar6 />

      {/* 1. Hero Section - Monolithic Vision */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-celestial-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute inset-0 bg-celestial-dark/80"></div>
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
                The Aether Vision
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Absolute
                <br />
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Trust
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
              We built a marketplace where verified brokers and serious buyers meet without fear. No ghost properties. No shortcuts.
            </p>
            <div className="flex md:justify-end gap-6">
              <Link href="/properties" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden transition-transform hover:scale-[1.02]">
                <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  Our Portfolio <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-bold text-white/[0.02] uppercase leading-none pointer-events-none whitespace-nowrap z-0">
          MISSION
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-celestial-gold"></span>
            <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Our Purpose</p>
            <span className="w-12 h-[1px] bg-celestial-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white uppercase leading-[1.2] mb-12">
            We exist to eliminate friction from Philippine real estate. Every listing is <span className="font-bold italic text-celestial-gold">verified</span>, every broker is <span className="font-bold italic text-celestial-gold">licensed</span>, and every transaction is <span className="font-bold italic text-celestial-gold">transparent</span>.
          </h2>
        </div>
      </section>

      {/* 3. Three Pillars Section - Asymmetric Grid */}
      <section className="bg-celestial-dark py-40 px-[5%] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-24 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight mb-8 leading-[1.1]">
              The Aether
              <br />
              <span className="font-bold italic text-gray-500">Foundation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Pillar 1 */}
            <div className="md:col-span-6 bg-[#0f0f12] border border-white/5 p-12 md:p-16 group hover:border-celestial-gold/50 transition-colors duration-500">
              <span className="text-6xl font-display font-bold text-white/5 block mb-8 group-hover:text-celestial-gold/20 transition-colors">01</span>
              <h3 className="text-3xl font-display font-light text-white uppercase mb-6 leading-snug group-hover:text-celestial-gold transition-colors">
                Authentic<br />Representation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Every broker holds a valid PRC license. We independently authenticate credentials and track successful transactions to ensure absolute professionalism.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="md:col-span-6 bg-[#0f0f12] border border-white/5 p-12 md:p-16 mt-0 md:mt-24 group hover:border-celestial-gold/50 transition-colors duration-500">
              <span className="text-6xl font-display font-bold text-white/5 block mb-8 group-hover:text-celestial-gold/20 transition-colors">02</span>
              <h3 className="text-3xl font-display font-light text-white uppercase mb-6 leading-snug group-hover:text-celestial-gold transition-colors">
                Rigorous<br />Verification
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                We physically inspect properties and confirm ownership before publication. Ghost listings and bait-and-switch tactics are systematically eliminated.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="md:col-span-8 md:col-start-3 bg-[#0A0A0C] border border-white/5 p-12 md:p-16 mt-0 md:-mt-12 relative z-10 group hover:border-celestial-gold/50 transition-colors duration-500">
              <span className="absolute top-12 right-12 text-8xl font-display font-bold text-white/5 group-hover:text-celestial-gold/10 transition-colors">03</span>
              <h3 className="text-4xl font-display font-light text-white uppercase mb-6 leading-snug">
                Transparent<br /><span className="font-bold italic">Economics</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Zero hidden fees. We mandate clear, comprehensive cost breakdowns prior to commitment. You maintain absolute control over the financial aspects of your acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Executive Team - Editorial Portrait Grid */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Leadership</p>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-[1.1]">
                The Architects
                <br />
                <span className="font-bold italic">Of Trust</span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md border-l border-white/10 pl-6">
              Built by visionaries who understand Philippine real estate and the rigorous standards it demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {[
              { name: "Marcus Villanueva", role: "Founder, CEO", desc: "Former investment banker with fifteen years in Philippine property development." },
              { name: "Elena Santos", role: "Chief Operations", desc: "Managed compliance and broker networks across Southeast Asia." },
              { name: "David Reyes", role: "Head of Technology", desc: "Designed our verification and transaction systems from the ground up." },
              { name: "Patricia Lim", role: "Chief Broker Relations", desc: "Licensed broker with two decades connecting serious buyers to verified properties." },
              { name: "Robert Cruz", role: "Director of Trust", desc: "Oversees verification protocols and the systems that keep scams off our platform." },
              { name: "Sofia Mercado", role: "Head of Design", desc: "Creates the clean, data-forward experience that makes finding properties seamless." },
            ].map((member, i) => (
              <div key={i} className="group cursor-default">
                <div className="w-full aspect-square bg-[#0f0f12] mb-8 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="absolute inset-0 bg-celestial-gold mix-blend-color-burn opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                  <img src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&sig=${i}`} alt={member.name} className="w-full h-full object-cover opacity-80" />
                </div>
                <h3 className="text-2xl font-display font-light text-white uppercase mb-2 group-hover:text-celestial-gold transition-colors">{member.name}</h3>
                <p className="text-gray-500 font-display text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                <div className="w-8 h-[1px] bg-white/20 mb-4 group-hover:bg-celestial-gold transition-colors"></div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.desc}
                </p>
                <div className="flex gap-4 text-gray-500">
                  <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn size={16} /></a>
                  <a href="#" className="hover:text-white transition-colors"><FaXTwitter size={14} /></a>
                </div>
              </div>
            ))}
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
          <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em] mb-6">Careers & Growth</p>
          <h2 className="text-5xl md:text-7xl font-display font-light text-white uppercase tracking-tighter leading-[1] mb-12">
            Join The
            <br />
            <span className="font-bold italic">Vanguard</span>
          </h2>
          <p className="text-gray-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            We are actively recruiting licensed brokers, engineers, and operations specialists to redefine the Philippine real estate market.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors duration-300">
              View Positions
            </Link>
          </div>
        </div>
      </section>

      <Logo6 />
      <Footer10 />
    </div>
  );
}
