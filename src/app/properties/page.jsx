"use client";

import React from "react";
import { Navbar6 } from "@/components/Navbar6";
import { PropertiesHero } from "@/components/PropertiesHero";
import { PropertiesListings } from "@/components/PropertiesListings";
import { Stats1 } from "@/components/Stats1";
import { Faq5 } from "@/components/Faq5";
import { PropertiesCta } from "@/components/PropertiesCta";
import { Footer10 } from "@/components/Footer10";

export default function Page() {
  return (
    <div className="bg-celestial-dark min-h-screen">
      <Navbar6 />
      <PropertiesHero />
      <PropertiesListings />
      <Stats1 />
      <Faq5 />
      <PropertiesCta />
      <Footer10 />
    </div>
  );
}


