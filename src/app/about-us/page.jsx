"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Shield, Star, User, MessageSquare, Mail, Globe } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-celestial-dark min-h-screen font-body">
      <Navbar6 />
      
      {/* 1. Hero Section */}
      <section className="pt-48 pb-32 px-[5%] text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-[10px] mb-8"
        >
          Trust
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold text-white mb-10 leading-tight uppercase"
        >
          Real Estate, <br />
          <span className="text-gradient">Reimagined</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          We built a marketplace where verified brokers and serious buyers meet without fear.
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
            Learn more
          </button>
        </motion.div>
      </section>

      {/* 2. Mission Section (White Block) */}
      <section className="bg-white py-40 px-[5%] text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-celestial-dark/30 uppercase tracking-[0.3em] text-[10px] mb-10 font-bold">Mission</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-celestial-dark uppercase leading-tight tracking-wide mb-12">
            We exist to eliminate fear from Philippine real estate. <br />
            Every listing is verified, every broker is licensed, <br />
            and every transaction is transparent.
          </h2>
          <div className="flex justify-center items-center gap-10">
            <button className="border border-celestial-dark text-celestial-dark px-10 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-celestial-dark hover:text-white transition-colors">
              Learn more
            </button>
            <button className="text-celestial-dark font-bold text-xs uppercase tracking-widest flex items-center gap-2 group">
              Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars Section */}
      <section className="py-40 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6">Tagline</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest leading-tight">
              Medium length section <br />
              heading goes here
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto mt-8 leading-relaxed">
              Our core values drive every interaction on the platform, ensuring a celestial standard of excellence for both buyers and brokers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: <ShieldCheck size={32} />, title: "Absolute Verification", desc: "No listing goes live without a 48-point audit of title deeds, tax records, and broker credentials." },
              { icon: <Compass size={32} />, title: "Local Insight", desc: "We provide deep-dive neighborhood data that goes beyond square footage and price points." },
              { icon: <Shield size={32} />, title: "Transaction Security", desc: "Our platform ensures all document exchanges and escrow processes meet the highest legal standards." }
            ].map((f, i) => (
              <div key={i} className="text-center group">
                <div className="text-celestial-gold mb-8 flex justify-center group-hover:text-glow transition-all">{f.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest leading-tight">{f.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{f.desc}</p>
                <div className="mt-8 text-white/10 group-hover:text-white/40 transition-colors"><span>→</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-40 px-[5%] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6 font-bold">Tagline</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest leading-tight">
              Medium length section <br />
              heading goes here
            </h2>
            <p className="text-white/40 mt-8 leading-relaxed">
              The numbers reflect our commitment to excellence and the trust we've built in the Philippine real estate market.
            </p>
            <div className="mt-12">
              <button className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group">
                Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            {[
              { val: "50%", label: "Verified Growth" },
              { val: "50%", label: "Broker Retention" },
              { val: "50%", label: "Market Share" },
              { val: "50%", label: "Client Satisfaction" }
            ].map((s, i) => (
              <div key={i} className="border-l border-white/10 pl-8">
                <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">{s.val}</h3>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">{s.label}</p>
                <p className="text-white/20 text-[10px] uppercase tracking-widest mt-2">Short heading goes here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Team Section */}
      <section className="py-40 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-celestial-gold text-[10px] uppercase tracking-widest font-bold mb-4">Tagline</p>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase tracking-widest">Our Team</h2>
            <p className="text-white/40 mt-8 max-w-lg mx-auto leading-relaxed">
              A diverse group of technologists and real estate veterans dedicated to the AETHER vision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-8 celestial-border flex items-center justify-center text-white/10 overflow-hidden">
                  <User size={40} />
                </div>
                <h4 className="text-lg font-display font-bold text-white uppercase tracking-widest mb-2">Full Name</h4>
                <p className="text-celestial-gold text-[10px] uppercase tracking-widest font-bold mb-6">Job Title</p>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="flex justify-center gap-6 text-white/20 group-hover:text-white/60 transition-colors">
                  <MessageSquare size={18} className="cursor-pointer hover:text-celestial-gold transition-colors" />
                  <Mail size={18} className="cursor-pointer hover:text-celestial-gold transition-colors" />
                  <Globe size={18} className="cursor-pointer hover:text-celestial-gold transition-colors" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-32 text-center pt-20 border-t border-white/5">
            <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-widest">We're Hiring!</h3>
            <p className="text-white/40 mb-10 max-w-md mx-auto">Join us in building the future of real estate in Southeast Asia.</p>
            <button className="btn-outline !px-12">View Openings</button>
          </div>
        </div>
      </section>

      {/* 6. Partner Logos Section */}
      <section className="bg-white py-24 px-[5%] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale contrast-125">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-2 font-black text-2xl tracking-tighter text-celestial-dark">
              {i % 2 === 0 ? "WEBFLOW" : "RELUME"}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-40 px-[5%] text-center border-t border-white/5">
        <h2 className="text-4xl md:text-8xl font-display font-bold text-white uppercase tracking-tight mb-12">
          Medium length heading <br />
          <span className="text-gradient">Goes here</span>
        </h2>
        <button className="btn-gold !px-16 !py-6 text-lg mb-24">Button</button>
        <div className="celestial-border rounded-[3rem] overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl shadow-celestial-gold/10">
          <img src="/images/cta_bg.jpg" alt="Final View" className="w-full h-full object-cover opacity-60" />
        </div>
      </section>

      <Footer10 />
    </div>
  );
}


