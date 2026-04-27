"use client";

import { motion } from "framer-motion";
import React from "react";
import { ChevronRight, Star } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Makati Sky Penthouse",
    location: "Makati City",
    price: "₱45M",
    specs: "4 bed | 3 bath | 350 sqm",
    image: "/images/prop1.jpg",
    tags: ["Luxury", "Skyline View"],
    fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Cebu Beachfront Estate",
    location: "Mactan, Cebu",
    price: "₱28M",
    specs: "5 bed | 4 bath | 500 sqm",
    image: "/images/prop2.jpg",
    tags: ["Beachfront", "Private Pool"],
    fallback: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Davao Executive Manor",
    location: "Davao City",
    price: "₱18M",
    specs: "3 bed | 3 bath | 280 sqm",
    image: "/images/prop3.jpg",
    tags: ["Executive", "Mountain View"],
    fallback: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
  }
];

export function Portfolio13() {
  return (
    <section className="px-[5%] py-24 md:py-32 bg-celestial-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dodger/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-xs mb-6 reveal reveal-stagger-1">
              Curated Collections
            </p>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-8 reveal reveal-stagger-2">
              Architectural <br />
              <span className="text-gradient">Masterpieces.</span>
            </h2>
            <p className="text-white/50 text-lg reveal reveal-stagger-3 max-w-lg leading-relaxed">
              Hand-selected properties that transcend ordinary living. 
              Each estate is a testament to extraordinary craftsmanship and celestial design.
            </p>
          </div>
          <div className="reveal reveal-stagger-4">
            <button className="btn-outline group flex items-center gap-3">
              View All Properties
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop, index) => (
            <motion.article
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl">
                <img
                  src={prop.image}
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={prop.title}
                  onError={(e) => { e.target.src = prop.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celestial-dark/90 via-celestial-dark/20 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <Star size={12} className="text-celestial-gold fill-celestial-gold" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">Verified Luxury</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-celestial-gold text-xs font-bold tracking-widest uppercase mb-1">
                        {prop.location}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-glow transition-all">
                        {prop.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-display font-bold text-white">{prop.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-white/40 text-sm mb-6 font-body tracking-wider italic">
                  {prop.specs}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {prop.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 bg-white/[0.03] border border-white/10 text-white/60 rounded-full group-hover:border-celestial-gold/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <button className="w-full flex items-center justify-center gap-3 text-white text-xs font-bold uppercase tracking-[0.3em] group/btn py-2 transition-all hover:text-celestial-gold">
                    View Property Details
                    <div className="w-8 h-px bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-celestial-gold transition-all"></div>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

