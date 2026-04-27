"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Link from "next/link";

const properties = [
  {
    id: "makati-tower",
    title: "Makati tower",
    price: "₱8.5M",
    location: "Makati City",
    image: "/images/prop1.jpg",
    tags: ["Verified", "Penthouse"]
  },
  {
    id: "bgc-penthouse",
    title: "BGC penthouse",
    price: "₱12.2M",
    location: "Taguig",
    image: "/images/prop2.jpg",
    tags: ["Verified", "Modern"]
  },
  {
    id: "quezon-city-estate",
    title: "Quezon City estate",
    price: "₱45,000,000",
    location: "Quezon City",
    image: "/images/prop3.jpg",
    tags: ["Verified", "Classic"]
  }
];

export function PropertiesListings() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="px-[5%] py-24 bg-celestial-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="reveal reveal-stagger-1">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-widest">
              Listings
            </h2>
            <p className="text-white/40 mt-4 max-w-md">
              Each property verified by licensed brokers across Metro Manila and beyond.
            </p>
          </div>
          <button className="btn-outline !py-2 !px-6 !text-[10px] uppercase tracking-widest hidden md:block">
            View All
          </button>
        </div>

        <div className="relative group">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {properties.map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[300px] md:min-w-[400px] snap-start"
              >
                <div className="glass-card overflow-hidden group/card">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={prop.image} 
                      alt={prop.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 grayscale group-hover/card:grayscale-0 opacity-60 group-hover/card:opacity-100" 
                    />
                    <div className="absolute top-6 left-6 flex gap-2">
                      {prop.tags.map(tag => (
                        <span key={tag} className="bg-celestial-dark/80 backdrop-blur-md text-celestial-gold text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-celestial-gold/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-1 group-hover/card:text-glow transition-all">{prop.title}</h3>
                        <p className="text-white/40 text-xs uppercase tracking-wider">{prop.location}</p>
                      </div>
                      <span className="text-xl font-display font-bold text-white">{prop.price}</span>
                    </div>
                    <Link href={`/properties/${prop.id}`} className="block">
                      <button className="w-full btn-outline !py-3 !text-[10px] uppercase tracking-[0.2em] hover:bg-celestial-gold hover:text-celestial-dark hover:border-celestial-gold transition-all">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Navigation */}
          <div className="flex justify-end gap-4 mt-8">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-celestial-gold hover:text-celestial-gold transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-celestial-gold hover:text-celestial-gold transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
