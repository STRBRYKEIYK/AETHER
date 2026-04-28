"use client";

import React, { useState } from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion, AnimatePresence } from "framer-motion";
import { RxChevronRight, RxPlus, RxMinus, RxArrowRight, RxStarFilled } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  const [openAccordion, setOpenAccordion] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark overflow-hidden">
      <Navbar6 />

      {/* 1. Immersive Hero / Overview */}
      <section className="relative pt-32 pb-24 px-[5%] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pt-12">
          
          {/* Left: Detail Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">
                  The Collection &bull; Makati
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-6">
                The Sky
                <br />
                <span className="font-bold italic">Penthouse</span>
              </h1>
              
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-3xl font-display font-bold text-white tracking-widest">
                  ₱45,000,000
                </h2>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-celestial-gold text-celestial-dark text-[10px] font-display font-bold uppercase tracking-widest">
                    Verified
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 border-l border-white/10 pl-6">
                This property represents the pinnacle of Manila's residential market. Floor-to-ceiling windows frame the city skyline while premium finishes define every room.
              </p>

              <form className="mb-12 space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-gray-500 font-display text-[10px] uppercase tracking-widest mb-2">Bedrooms</p>
                    <p className="text-white text-xl font-light">4 Suites</p>
                  </div>
                  <div className="border-b border-white/20 pb-4">
                    <p className="text-gray-500 font-display text-[10px] uppercase tracking-widest mb-2">Bathrooms</p>
                    <p className="text-white text-xl font-light">3 Baths</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/contact" className="group relative flex-1 flex items-center justify-center px-8 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden transition-transform hover:scale-[1.02]">
                    <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                    <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                      Submit Inquiry
                    </span>
                  </Link>
                  <Link href="/contact" className="group relative flex-1 flex items-center justify-center px-8 py-5 bg-transparent border border-white/30 text-white font-display uppercase tracking-widest text-xs font-bold hover:bg-white/5 transition-colors">
                    Schedule Viewing
                  </Link>
                </div>
              </form>

              <div className="border-t border-white/10 pt-4">
                {[
                  { title: "Specifications", content: "Full 520 square meter. Features smart home integration, private elevator access, and a wraparound balcony with unobstructed views of Manila Bay." },
                  { title: "Viewing", content: "Schedule directly with the verified broker. Viewings available weekdays and weekends. All appointments are confirmed via email and SMS for your convenience." },
                  { title: "Closing", content: "Standard closing timeline is 45 to 60 days pending documentation and financing approval. Your broker coordinates with legal counsel to ensure a smooth transaction." }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-white/10 group">
                    <div 
                      className="py-6 flex justify-between items-center cursor-pointer" 
                      onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                    >
                      <h3 className="text-sm font-display font-bold uppercase tracking-widest text-white group-hover:text-celestial-gold transition-colors">{item.title}</h3>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-celestial-gold transition-colors">
                        {openAccordion === idx ? <RxMinus className="text-white" size={16} /> : <RxPlus className="text-white" size={16} />}
                      </div>
                    </div>
                    <AnimatePresence>
                      {openAccordion === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-400 text-sm leading-relaxed pb-6 pr-8">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Immersive Images Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div className="w-full aspect-[4/3] bg-[#0f0f12] overflow-hidden relative group">
                <img src="/images/prop1.png" alt="Main property view" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "/images/prop2.png",
                  "/images/prop3.png",
                  "/images/hero.png",
                  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
                ].map((src, i) => (
                  <div key={i} className="aspect-square bg-[#0f0f12] overflow-hidden group">
                    <img src={src} alt={`Detail ${i}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. Distinctive Amenities / Details */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-celestial-gold mix-blend-color-burn opacity-20 transition-opacity duration-700 group-hover:opacity-0 z-10"></div>
            <div className="aspect-[3/4] bg-[#0f0f12] overflow-hidden relative">
              <img src="/images/makati_penthouse_1777386773139.png" alt="Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"} />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-celestial-gold"></span>
              <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Breakdown</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter mb-10 leading-[1.1]">
              Uncompromising
              <br />
              <span className="font-bold italic">Standard</span>
            </h2>
            <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-xl">
              Every detail matters. This penthouse combines luxury finishes with practical living space designed for the modern executive or growing family.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "Manila Bay Views", desc: "Unobstructed vistas from your private wraparound balcony.", num: "01" },
                { title: "Smart Home Ready", desc: "Control lighting, climate, and security from your device.", num: "02" },
                { title: "Private Elevator", desc: "Direct access from the lobby ensures absolute privacy.", num: "03" },
                { title: "Chef's Kitchen", desc: "Imported appliances, marble counters, and bespoke cabinetry.", num: "04" }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-12 border-l border-white/10 group hover:border-celestial-gold transition-colors">
                  <div className="absolute top-0 -left-[1px] w-[2px] h-0 bg-celestial-gold transition-all duration-500 group-hover:h-full"></div>
                  <span className="absolute left-4 -top-2 text-3xl font-display font-bold text-white/5 pointer-events-none group-hover:text-celestial-gold/10 transition-colors">{item.num}</span>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Broker Credentials - Monolithic Profile */}
      <section className="bg-celestial-dark py-40 px-[5%] relative overflow-hidden">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 text-[20rem] font-display font-bold text-white/[0.02] uppercase leading-none pointer-events-none whitespace-nowrap">
          VERIFIED
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6">
            <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em] mb-6">Representation</p>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter mb-8 leading-[1.1]">
              The Trusted
              <br />
              <span className="font-bold italic">Authority</span>
            </h2>
            <div className="bg-[#0f0f12] p-10 border border-white/5 mb-10 relative group">
              <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-celestial-gold to-transparent"></div>
              <h3 className="text-2xl font-display font-light text-white mb-2">Robert Santos</h3>
              <p className="text-gray-500 text-xs font-display tracking-widest uppercase mb-6">PRC Licensed Broker &bull; ID: 90218</p>
              <p className="text-gray-400 leading-relaxed text-sm mb-8">
                Robert Santos holds an active PRC license and has closed over 120 transactions in the past five years. His track record speaks to integrity and expertise in luxury properties across Metro Manila.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="px-8 py-3 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors">
                  Contact Broker
                </Link>
                <Link href="/contact" className="text-white font-display uppercase tracking-widest text-[10px] font-bold flex items-center gap-2 hover:text-celestial-gold transition-colors group-btn">
                  View Profile <RxArrowRight className="group-btn-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 aspect-square bg-[#0f0f12] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" alt="Broker" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* 4. Verified Buyers */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
              <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Testimonials</p>
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter leading-[1.1]">
              The Voices of
              <br />
              <span className="font-bold italic">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 p-px overflow-hidden rounded-sm">
            {[
              {
                text: "I was skeptical about online property deals, but the verification process here gave me complete confidence. The broker was transparent at every step.",
                name: "Maria Santos",
                role: "OFW, Singapore"
              },
              {
                text: "This platform removed all the uncertainty. Every detail checked out, every promise kept. I closed on my dream property in Manila without a single doubt.",
                name: "James Reyes",
                role: "Executive, Makati"
              },
              {
                text: "The licensed brokers here actually care about matching you with the right property, not just making a sale. That integrity is rare.",
                name: "Patricia Lim",
                role: "Investor, Cebu"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-celestial-dark p-12 md:p-16 hover:bg-[#0A0A0C] transition-colors flex flex-col justify-between group">
                <div>
                  <p className="text-gray-400 font-light leading-relaxed mb-12 italic text-lg group-hover:text-white transition-colors">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:border-celestial-gold transition-colors">
                    <span className="text-celestial-gold font-display font-bold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-display font-bold text-sm uppercase tracking-wider">{review.name}</h4>
                    <p className="text-gray-500 font-display text-[10px] tracking-widest uppercase">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="relative py-40 overflow-hidden bg-celestial-dark">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="/images/cta_bg.jpg"
            className="w-full h-full object-cover grayscale blur-md"
            alt="Abstract architecture"
            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"}
          />
          <div className="absolute inset-0 bg-celestial-dark/90 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-[5%] relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light text-white uppercase tracking-tighter leading-[1] mb-12">
            Acquire <span className="font-bold italic text-celestial-gold">Excellence</span>
          </h2>
          <p className="text-gray-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            Submit your inquiry to the verified broker handling this property.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="px-12 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors duration-300">
              Inquire Now
            </Link>
            <Link href="/contact" className="px-12 py-5 bg-transparent border border-white/30 text-white font-display uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors duration-300">
              Schedule Viewing
            </Link>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
