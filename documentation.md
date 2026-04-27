# AETHER - Real Estate Website Documentation

## Overview
AETHER is a modern, high-performance real estate web application designed to showcase property listings, provide comprehensive neighborhood guides, and offer a seamless user experience for potential homebuyers and renters. The platform features dynamic property routing, rich visual galleries, and detailed property insights.

## What It Offers
- **Property Listings:** Browse a curated selection of properties with high-quality images and detailed information.
- **Dynamic Property Details:** Dedicated pages for individual properties, offering deep dives into amenities, pricing, and specific property features.
- **Neighborhood Guides:** Explore comprehensive guides on various neighborhoods to help users find the perfect location.
- **About Us & Contact:** Learn about the team behind AETHER and easily get in touch for inquiries or property viewings.
- **Responsive Design:** A fully responsive, mobile-first interface ensuring a seamless experience across all devices.

## Tech Stack & Architecture
AETHER is built using a modern React-based tech stack, prioritizing performance, SEO, and developer experience.

- **Framework:** [Next.js (App Router)](https://nextjs.org/) - Provides Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance and SEO.
- **Library:** [React](https://react.dev/) - Core library for building the user interface.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **UI Components:** 
  - [Relume UI](https://library.relume.io/) & `@relume_io/relume-tailwind` - Pre-built, accessible, and highly customizable UI components exported into React.
  - [Framer Motion](https://www.framer.com/motion/) - For fluid animations and page transitions.
  - [Lucide React](https://lucide.dev/) - Clean, consistent iconography.
- **Data Management:** Static mock data structure (`src/data/properties.js`) mapped to dynamic Next.js routes (`src/app/properties/[id]`).

## Project Structure
- `/src/app` - Contains all Next.js page routes (`/`, `/about-us`, `/properties`, `/neighborhood-guides`, `/contact`).
- `/src/components` - Reusable UI components including Navbars, Footers, Hero sections, Galleries, and more.
- `/src/data` - Contains the mock data logic powering the property listings.
- `/public` - Static assets including site images (`hero.jpg`, `prop1.jpg`, etc.) and icons.
