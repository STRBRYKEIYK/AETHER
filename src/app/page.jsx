"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { Footer10 } from "@/components/Footer10";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight, RxArrowRight } from "react-icons/rx";
import Link from "next/link";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen font-body bg-celestial-dark selection:bg-celestial-gold selection:text-celestial-dark overflow-hidden">
      <Navbar6 />

      {/* 1. Hero Section - Immersive Editorial Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            className="w-full h-full object-cover"
            alt="Real estate architectural masterpiece"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-celestial-dark/60 via-celestial-dark/20 to-celestial-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] opacity-70"></div>
        </motion.div>

        <div className="w-full max-w-[1400px] mx-auto px-[5%] relative z-10 flex flex-col md:flex-row items-end justify-between pb-20 pt-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-celestial-gold font-display text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                The Pinnacle of Living
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-light text-white uppercase tracking-tighter leading-[0.9] mb-8">
                Curated
                <br />
                <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                  Estates
                </span>
                <br />
                <span className="ml-0 md:ml-24">For You</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-sm text-left md:text-right mt-12 md:mt-0"
          >
            <p className="text-gray-300 text-lg md:text-xl font-light mb-8 leading-relaxed border-l md:border-l-0 md:border-r border-celestial-gold/50 pl-6 md:pl-0 md:pr-6">
              Exclusive properties across the Philippines. Verified listings,
              transparent transactions, and uncompromising luxury.
            </p>
            <div className="flex md:justify-end gap-6">
              <Link
                href="/properties"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold overflow-hidden rounded-none transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-celestial-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                  Explore{" "}
                  <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-display uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-celestial-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Featured Properties - Masonry/Asymmetric Style */}
      <section className="bg-celestial-dark py-40 px-[5%] relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-celestial-gold"></span>
                <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">
                  The Collection
                </p>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-[1.1]">
                Masterpieces
                <br />
                <span className="font-bold italic">Of Design</span>
              </h2>
            </div>
            <Link
              href="/properties"
              className="group flex items-center gap-4 text-white hover:text-celestial-gold transition-colors"
            >
              <span className="font-display uppercase tracking-widest text-xs font-bold">
                View full portfolio
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-celestial-gold flex items-center justify-center transition-colors">
                <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Property 1 - Large */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="col-span-1 md:col-span-8 group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0f0f12] mb-6">
                <img
                  src="/images/prop1.png"
                  alt="Makati Penthouse"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-display font-bold uppercase tracking-widest border border-white/10">
                    Makati
                  </span>
                  <span className="px-4 py-2 bg-celestial-gold text-black text-[10px] font-display font-bold uppercase tracking-widest">
                    Verified
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-light text-white uppercase mb-2 group-hover:text-celestial-gold transition-colors">
                    The Sky Penthouse
                  </h3>
                  <p className="text-gray-400 font-light tracking-wide text-sm">
                    4 Bed &bull; 3 Bath &bull; 4,200 sqft
                  </p>
                </div>
                <p className="text-xl font-display font-bold text-white tracking-wider">
                  ₱45.0M
                </p>
              </div>
            </motion.div>

            <div className="col-span-1 md:col-span-4 flex flex-col gap-10 mt-0 md:mt-32">
              {/* Property 2 - Small */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-[#0f0f12] mb-6">
                  <img
                    src="/images/prop2.png"
                    alt="Cebu Beachfront"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-display font-bold uppercase tracking-widest border border-white/10">
                      Cebu
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-light text-white uppercase mb-2 group-hover:text-celestial-gold transition-colors">
                    Azure Villa
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 font-light tracking-wide text-xs">
                      5 Bed &bull; Oceanfront
                    </p>
                    <p className="text-sm font-display font-bold text-white tracking-wider">
                      ₱28.5M
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Property 3 - Small */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="group cursor-pointer"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-[#0f0f12] mb-6">
                  <img
                    src="/images/prop3.png"
                    alt="Davao Executive"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-display font-bold uppercase tracking-widest border border-white/10">
                      Davao
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-display font-light text-white uppercase mb-2 group-hover:text-celestial-gold transition-colors">
                    Executive Estate
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-400 font-light tracking-wide text-xs">
                      3 Bed &bull; Premium
                    </p>
                    <p className="text-sm font-display font-bold text-white tracking-wider">
                      ₱18.0M
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Numbers Section - Editorial Typographic Treatment */}
      <section className="bg-[#0A0A0C] py-40 px-[5%] relative overflow-hidden">
        {/* Background typographic noise */}
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 text-[30rem] font-display font-bold text-white/[0.02] uppercase leading-none pointer-events-none whitespace-nowrap">
          AETHER
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-[1.1] mb-10">
                The Scale of
                <br />
                <span className="font-bold italic">Excellence</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
                Aether connects discerning buyers with exceptional properties.
                Our rigorous verification process ensures that every transaction
                is rooted in absolute trust and unparalleled quality.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-4 text-celestial-gold hover:text-white transition-colors group"
              >
                <span className="font-display uppercase tracking-widest text-xs font-bold border-b border-celestial-gold/30 pb-1 group-hover:border-white">
                  Discover our standard
                </span>
                <RxArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col gap-16 md:gap-24 justify-center">
              <div className="flex flex-col items-start border-l border-white/10 pl-10 relative">
                <div className="absolute top-0 -left-[1px] w-[2px] h-12 bg-celestial-gold"></div>
                <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-4 tracking-tighter">
                  12.4
                  <span className="text-3xl md:text-5xl text-celestial-gold ml-2">
                    K
                  </span>
                </h3>
                <p className="text-gray-400 font-display text-xs uppercase tracking-[0.2em]">
                  Verified listings live
                </p>
              </div>

              <div className="flex flex-col items-start border-l border-white/10 pl-10 relative ml-0 md:ml-20">
                <div className="absolute top-0 -left-[1px] w-[2px] h-12 bg-white/50"></div>
                <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-4 tracking-tighter">
                  3.8
                  <span className="text-3xl md:text-5xl text-gray-500 ml-2">
                    K
                  </span>
                </h3>
                <p className="text-gray-400 font-display text-xs uppercase tracking-[0.2em]">
                  Licensed brokers active
                </p>
              </div>

              <div className="flex flex-col items-start border-l border-white/10 pl-10 relative ml-0 md:ml-40">
                <div className="absolute top-0 -left-[1px] w-[2px] h-12 bg-celestial-gold"></div>
                <h3 className="text-6xl md:text-8xl font-display font-light text-white mb-4 tracking-tighter">
                  28.6
                  <span className="text-3xl md:text-5xl text-celestial-gold ml-2">
                    K
                  </span>
                </h3>
                <p className="text-gray-400 font-display text-xs uppercase tracking-[0.2em]">
                  Successful transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Trust Us Section - Modern Grid */}
      <section className="bg-celestial-dark py-40 px-[5%] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
              <p className="text-celestial-gold font-display text-xs uppercase tracking-[0.2em]">
                The Aether Guarantee
              </p>
              <span className="w-8 h-[1px] bg-celestial-gold"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white uppercase tracking-tight leading-[1.1] mb-8">
              Absolute <span className="font-bold italic">Certainty</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We eliminate the friction of luxury real estate through rigorous
              authentication and transparent processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 p-px rounded-sm overflow-hidden">
            {[
              {
                title: "Verified Agents",
                desc: "Real-time credential verification ensures you only deal with licensed professionals.",
                icon: "01",
              },
              {
                title: "Scam-Free",
                desc: "Every property is physically inspected and ownership confirmed prior to listing.",
                icon: "02",
              },
              {
                title: "Total Transparency",
                desc: "Zero hidden fees. Comprehensive cost breakdowns presented before you commit.",
                icon: "03",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-celestial-dark p-12 md:p-16 hover:bg-[#0A0A0C] transition-colors group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 text-[8rem] font-display font-bold text-white/[0.03] group-hover:text-celestial-gold/[0.05] transition-colors pointer-events-none">
                  {item.icon}
                </div>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:border-celestial-gold transition-colors">
                  <span className="font-display text-celestial-gold font-bold">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-light text-white uppercase mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section - Monolithic Design */}
      <section className="relative py-40 overflow-hidden bg-celestial-dark">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/images/hero.png"
            className="w-full h-full object-cover grayscale blur-sm"
            alt="Abstract architecture"
          />
          <div className="absolute inset-0 bg-celestial-dark/80 mix-blend-multiply"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-[5%] relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-display font-light text-white uppercase tracking-tighter leading-[1] mb-12">
            Enter{" "}
            <span className="font-bold italic text-celestial-gold">Aether</span>
          </h2>
          <p className="text-gray-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            Your definitive portal to the finest properties in the Philippines.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/properties"
              className="px-12 py-5 bg-white text-celestial-dark font-display uppercase tracking-widest text-xs font-bold hover:bg-celestial-gold hover:text-white transition-colors duration-300"
            >
              Commence Search
            </Link>
            <Link
              href="/contact"
              className="px-12 py-5 bg-transparent border border-white/30 text-white font-display uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-colors duration-300"
            >
              Speak with us
            </Link>
          </div>
        </div>
      </section>

      <Footer10 />
    </div>
  );
}
