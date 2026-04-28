"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion } from "framer-motion";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight, RxArrowRight, RxPlus, RxMinus } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark overflow-hidden">
      <Navbar6 />

      {/* 1. Hero Section - Monolithic Aesthetic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-celestial-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute inset-0 bg-celestial-dark/90"></div>
          <img
            src="/images/hero.png"
            alt="Corporate office"
            className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"}
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
                Direct Communication
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Establish
                <br />
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Contact
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
              Connect securely with our verified real estate experts. Absolute discretion and rigorous professionalism guaranteed.
            </p>
            <div className="flex md:justify-end gap-6">
              <a href="#inquiry" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden transition-transform hover:scale-[1.02]">
                <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  Begin Inquiry <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Direct Channels Section */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#0f0f12] hidden lg:block z-0 border-l border-white/5"></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-celestial-gold"></span>
              <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">Our Channels</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter mb-10 leading-[1.1]">
              Global
              <br />
              <span className="font-bold italic">Presence</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-16 max-w-xl">
              Our concierge team is available to assist you. We accommodate international clients across all time zones.
            </p>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-celestial-gold transition-colors shrink-0">
                  <BiEnvelope className="text-white group-hover:text-celestial-gold transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-widest mb-2">Electronic Mail</h4>
                  <p className="text-gray-500 text-sm mb-2 font-light">For secure document transfer and general inquiries.</p>
                  <a href="mailto:hello@aether.com" className="text-white text-lg font-light hover:text-celestial-gold transition-colors">hello@aether.com</a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-celestial-gold transition-colors shrink-0">
                  <BiPhone className="text-white group-hover:text-celestial-gold transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-widest mb-2">Voice / Telecom</h4>
                  <p className="text-gray-500 text-sm mb-2 font-light">Direct line to our brokerage operations center.</p>
                  <a href="tel:+63288880000" className="text-white text-lg font-light hover:text-celestial-gold transition-colors">+63 (2) 8888-0000</a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-celestial-gold transition-colors shrink-0">
                  <BiMap className="text-white group-hover:text-celestial-gold transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-widest mb-2">Headquarters</h4>
                  <p className="text-gray-500 text-sm mb-2 font-light">By appointment only.</p>
                  <p className="text-white text-lg font-light mb-4">BGC, Taguig City, Metro Manila</p>
                  <button className="text-celestial-gold hover:text-white transition-colors font-display text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group-btn">
                    View Coordinates <RxArrowRight className="group-btn-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[500px] lg:h-[700px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-celestial-gold mix-blend-color-burn opacity-20 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
            <img src="/images/hero.png" alt="Office Location" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
          </div>
        </div>
      </section>

      {/* 3. Inquiry Form Section */}
      <section id="inquiry" className="bg-celestial-dark py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <div className="sticky top-40">
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tighter mb-8 leading-[1.1]">
                Initiate
                <br />
                <span className="font-bold italic text-celestial-gold">Dialogue</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-12">
                Provide your criteria and our matching algorithm will pair you with the appropriate verified professional.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#0f0f12] border border-white/5 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-celestial-gold via-transparent to-transparent"></div>
            
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" id="firstName" placeholder=" " className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:outline-none focus:border-celestial-gold transition-colors peer placeholder-transparent" required />
                  <label htmlFor="firstName" className="absolute left-0 top-4 text-gray-500 font-display text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-celestial-gold peer-focus:text-[9px] peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]">First Name</label>
                </div>
                
                <div className="relative group">
                  <input type="text" id="lastName" placeholder=" " className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:outline-none focus:border-celestial-gold transition-colors peer placeholder-transparent" required />
                  <label htmlFor="lastName" className="absolute left-0 top-4 text-gray-500 font-display text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-celestial-gold peer-focus:text-[9px] peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]">Last Name</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="email" id="email" placeholder=" " className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:outline-none focus:border-celestial-gold transition-colors peer placeholder-transparent" required />
                  <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 font-display text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-celestial-gold peer-focus:text-[9px] peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]">Electronic Mail</label>
                </div>
                
                <div className="relative group">
                  <input type="tel" id="phone" placeholder=" " className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:outline-none focus:border-celestial-gold transition-colors peer placeholder-transparent" required />
                  <label htmlFor="phone" className="absolute left-0 top-4 text-gray-500 font-display text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-celestial-gold peer-focus:text-[9px] peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]">Telephone / Mobile</label>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 font-display text-[10px] uppercase tracking-widest">Client Profile</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['First-Time Buyer', 'Returning Investor', 'OFW / Expatriate', 'Corporate Entity'].map((opt) => (
                    <label key={opt} className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-5 h-5 rounded-sm border border-white/20 flex items-center justify-center group-hover:border-celestial-gold transition-colors relative">
                        <input type="radio" name="profile" className="peer opacity-0 absolute inset-0 cursor-pointer" />
                        <div className="w-3 h-3 bg-celestial-gold opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-gray-300 font-light text-sm group-hover:text-white transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="relative group mt-8">
                <textarea id="message" placeholder=" " className="w-full bg-transparent border-b border-white/20 text-white py-4 focus:outline-none focus:border-celestial-gold transition-colors peer placeholder-transparent min-h-[120px] resize-none" required></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 font-display text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-celestial-gold peer-focus:text-[9px] peer-placeholder-shown:text-[10px] peer-placeholder-shown:top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[9px]">Message / Requirements</label>
              </div>

              <div className="pt-4 flex items-center justify-between flex-wrap gap-6">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className="w-5 h-5 rounded-sm border border-white/20 flex items-center justify-center group-hover:border-celestial-gold transition-colors relative">
                    <input type="checkbox" className="peer opacity-0 absolute inset-0 cursor-pointer" required />
                    <div className="w-3 h-3 bg-celestial-gold opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-gray-500 font-light text-xs group-hover:text-gray-300 transition-colors uppercase tracking-widest">I accept the terms of engagement</span>
                </label>

                <button type="submit" className="group relative inline-flex items-center justify-center px-12 py-4 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden transition-transform hover:scale-[1.02]">
                  <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                  <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                    Transmit <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </form>
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
                Operational transparency is our mandate. Review common procedural inquiries.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border-t border-white/10">
            {[
              { q: "How do you verify agents?", a: "Every broker on our platform holds current PRC licensing. We conduct rigorous background verification and maintain ongoing compliance monitoring." },
              { q: "Are listings guaranteed authentic?", a: "Affirmative. Each property undergoes verification before listing. We confirm ownership and pricing accuracy to eliminate false advertisements." },
              { q: "How does the inquiry process work?", a: "Submit your inquiry via secure protocol and we connect you directly with the verified broker representing that specific asset." },
              { q: "Can OFWs buy property remotely?", a: "Yes. Our platform supports remote buyers with secure document handling, high-fidelity video tours, and specialized expatriate brokers." }
            ].map((faq, i) => (
              <div key={i} className="py-10 border-b border-white/10 group">
                <div 
                  className="flex justify-between items-center cursor-pointer mb-6"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <h3 className="text-xl md:text-2xl font-display font-light text-white uppercase group-hover:text-celestial-gold transition-colors">
                    {faq.q}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-celestial-gold transition-colors">
                    {openFaq === i ? <RxMinus size={20} className="text-white group-hover:text-celestial-gold transition-colors" /> : <RxPlus size={20} className="text-white group-hover:text-celestial-gold transition-colors" />}
                  </div>
                </div>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 font-light leading-relaxed pr-12 max-w-2xl pb-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
