"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { RxChevronRight, RxChevronLeft, RxArrowRight, RxPlus } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark">
      <Navbar6 />

      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 px-[5%] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-celestial-dark/90"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">
                  The Portfolio
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-light text-white uppercase tracking-tighter leading-[0.9]">
                Curated
                <br />
                <span className="font-bold italic">Properties</span>
              </h1>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-md"
          >
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Explore our exclusive collection of verified luxury estates across the Philippines. Uncompromising quality meets total transparency.
            </p>
            <div className="flex gap-6">
              <Link href="#listings" className="group flex items-center gap-4 text-white hover:text-celestial-gold transition-colors">
                <span className="font-display uppercase tracking-widest text-xs font-bold">Browse Collection</span>
                <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-celestial-gold flex items-center justify-center transition-colors">
                  <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Listings Section */}
      <section id="listings" className="bg-[#0A0A0C] py-32 px-[5%] relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="flex gap-4 items-center">
              <span className="text-white font-display text-2xl font-light">01</span>
              <span className="w-12 h-[1px] bg-white/20"></span>
              <h2 className="text-2xl font-display font-bold text-white uppercase tracking-widest">
                Latest Acquisitions
              </h2>
            </div>
            
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <RxChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <RxChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Card 1 */}
            <Link href="/property-details" className="group flex flex-col cursor-pointer">
              <div className="w-full aspect-[3/4] bg-[#0f0f12] overflow-hidden mb-6 relative border border-white/5">
                <img
                  src="/images/prop1.png"
                  alt="Makati tower"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Makati
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-display text-xl uppercase tracking-wider group-hover:text-celestial-gold transition-colors">
                  The Sky Tower
                </h3>
                <span className="text-white font-display font-bold text-lg tracking-widest">₱45M</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
                <span>4 Bed &bull; 3 Bath</span>
                <span className="text-celestial-gold">Verified</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/property-details" className="group flex flex-col cursor-pointer mt-0 lg:mt-12">
              <div className="w-full aspect-[3/4] bg-[#0f0f12] overflow-hidden mb-6 relative border border-white/5">
                <img
                  src="/images/prop2.png"
                  alt="BGC penthouse"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Cebu
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-display text-xl uppercase tracking-wider group-hover:text-celestial-gold transition-colors">
                  Azure Villa
                </h3>
                <span className="text-white font-display font-bold text-lg tracking-widest">₱28M</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
                <span>5 Bed &bull; Oceanfront</span>
                <span className="text-celestial-gold">Verified</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/property-details" className="group flex flex-col cursor-pointer mt-0 lg:mt-24">
              <div className="w-full aspect-[3/4] bg-[#0f0f12] overflow-hidden mb-6 relative border border-white/5">
                <img
                  src="/images/prop3.png"
                  alt="Davao Executive"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Davao
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-display text-xl uppercase tracking-wider group-hover:text-celestial-gold transition-colors">
                  Executive Estate
                </h3>
                <span className="text-white font-display font-bold text-lg tracking-widest">₱18M</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
                <span>3 Bed &bull; Premium</span>
                <span className="text-celestial-gold">Verified</span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/property-details" className="group flex flex-col cursor-pointer mt-0 lg:mt-36">
              <div className="w-full aspect-[3/4] bg-[#0f0f12] overflow-hidden mb-6 relative border border-white/5">
                <img
                  src="/images/hero.png"
                  alt="Manila Masterpiece"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Manila
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-display text-xl uppercase tracking-wider group-hover:text-celestial-gold transition-colors">
                  The Glass House
                </h3>
                <span className="text-white font-display font-bold text-lg tracking-widest">₱85M</span>
              </div>
              <div className="flex justify-between items-center text-gray-400 text-xs tracking-widest uppercase">
                <span>6 Bed &bull; Tropical</span>
                <span className="text-celestial-gold">Verified</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Numbers Section */}
      <section className="bg-celestial-dark py-40 px-[5%] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-celestial-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">
                  Market Dominance
                </p>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-light text-white uppercase tracking-tighter leading-[0.9]">
                Proven
                <br />
                <span className="font-bold italic">Results</span>
              </h2>
            </div>
            <div className="flex flex-col justify-start lg:pt-12">
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-10">
                Thousands of serious buyers trust our platform because they know every listing is rigorously verified. The market moves fast, but we move with absolute precision.
              </p>
              <Link href="/about-us" className="inline-flex items-center gap-4 text-white hover:text-celestial-gold transition-colors group">
                <span className="font-display uppercase tracking-widest text-xs font-bold border-b border-white/30 pb-1 group-hover:border-celestial-gold">Our Methodology</span>
                <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
            <div className="flex flex-col">
              <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-2 tracking-tighter">
                2.8<span className="text-3xl md:text-4xl text-celestial-gold ml-1">K</span>
              </h3>
              <p className="text-gray-500 font-display text-xs uppercase tracking-[0.2em]">Verified listings live</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-2 tracking-tighter">
                156
              </h3>
              <p className="text-gray-500 font-display text-xs uppercase tracking-[0.2em]">Licensed brokers active</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-2 tracking-tighter">
                ₱18<span className="text-3xl md:text-4xl text-celestial-gold ml-1">B</span>
              </h3>
              <p className="text-gray-500 font-display text-xs uppercase tracking-[0.2em]">Properties sold this year</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Section */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter leading-[1.1] mb-8">
                Clarity &<br/>
                <span className="font-bold italic">Confidence</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                Everything you need to know about navigating the premium real estate market with Aether.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-4 text-celestial-gold hover:text-white transition-colors group">
                <span className="font-display uppercase tracking-widest text-xs font-bold">Ask a Question</span>
                <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-white/10">
            {[
              { q: "How does verification work?", a: "Every broker on our platform holds a valid PRC license. We independently authenticate property ownership and perform physical inspections before any listing goes live." },
              { q: "Can I trust the pricing?", a: "Absolutely. Aether mandates transparent pricing models. All costs, including taxes and association dues, are fully detailed prior to any transaction." },
              { q: "How do I connect with brokers?", a: "Once you create an account, you can securely message licensed brokers directly through our platform, ensuring all communications are logged and verified." },
              { q: "What protects OFW buyers?", a: "We offer dedicated concierge services for Overseas Filipino Workers, providing virtual tours, digital document signing, and end-to-end transaction security." }
            ].map((faq, i) => (
              <div key={i} className="py-10 border-b border-white/10 group">
                <div className="flex justify-between items-center cursor-pointer mb-6">
                  <h3 className="text-xl md:text-2xl font-display font-light text-white uppercase group-hover:text-celestial-gold transition-colors">
                    {faq.q}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-celestial-gold transition-colors">
                    <RxPlus size={20} className="text-white group-hover:text-celestial-gold transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed pr-12 max-w-2xl">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-40 px-[5%] text-center relative overflow-hidden bg-[#0A0A0C]">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/prop1.png"
            alt="Property CTA"
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-celestial-dark via-celestial-dark/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-12">
            Secure Your
            <br />
            <span className="font-bold italic text-celestial-gold">Legacy</span>
          </h2>
          <p className="text-gray-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            Connect with a verified broker who knows the market and protects your interests completely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors duration-300">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
