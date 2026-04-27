"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Faq5() {
  return (
    <section className="px-[5%] py-24 md:py-32 bg-celestial-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <p className="text-celestial-gold font-display font-bold tracking-[0.3em] uppercase text-[10px] mb-4 reveal reveal-stagger-1">
            Proven
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight reveal reveal-stagger-2">
            The Numbers Speak <br />
            <span className="text-gradient">For Themselves</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed reveal reveal-stagger-3 max-w-2xl">
            We've built something real here. Thousands of serious buyers trust our platform 
            because they know every listing is verified and every broker is licensed.
          </p>
        </div>

        <h3 className="text-4xl font-display font-bold text-white mb-10 tracking-widest uppercase">FAQs</h3>
        
        <Accordion
          type="multiple"
          className="space-y-4"
        >
          {[
            {
              q: "How does verification work?",
              a: "Every broker on our platform holds a valid PRC license and professional credentials. We verify each listing independently before it goes live. No shortcuts. No exceptions. You see what's real."
            },
            {
              q: "Can I trust the pricing?",
              a: "Transparent pricing is non-negotiable here. We display market comparables, broker commissions, and all fees upfront. Ghost listings and inflated prices don't exist on our platform."
            },
            {
              q: "How do I connect with brokers?",
              a: "Submit an inquiry directly through any listing. Verified brokers respond within hours. You control the conversation. You set the pace. You decide who to work with."
            },
            {
              q: "What protects OFW buyers?",
              a: "We handle international transactions, currency conversions, and remote viewings. Your broker manages documentation and compliance. You get a secure, seamless experience from anywhere in the world."
            },
            {
              q: "Is there a buyer's fee?",
              a: "No. You never pay us. Brokers handle their own commissions. Your money stays in your pocket until you're ready to close. That's how it should be."
            }
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden px-8 transition-all hover:bg-white/[0.04] hover:border-white/10"
            >
              <AccordionTrigger
                className="py-8 text-xl font-display font-bold text-white hover:no-underline [&[data-state=open]]:text-celestial-gold transition-colors"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-8 text-white/50 leading-relaxed text-lg font-body">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 pt-20 border-t border-white/5">
          <h4 className="text-3xl font-display font-bold text-white mb-4 uppercase tracking-widest">Still have questions?</h4>
          <p className="text-white/40 mb-10">Our concierge team is standing by for private consultations.</p>
          <button className="btn-gold">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}


