"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout222() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Manila Bay views
                </h3>
                <p>
                  Unobstructed vistas from your private wraparound balcony
                  overlooking the city.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Explore
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Smart home ready
                </h3>
                <p>
                  Control lighting, climate, and security from your phone or
                  tablet.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Learn
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Private elevator
                </h3>
                <p>
                  Direct access from the lobby ensures privacy and convenience
                  for residents.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Details
                  </Button>
                </div>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                  Makati location
                </h3>
                <p>
                  Central to business districts, dining, and entertainment in
                  Metro Manila.
                </p>
                <div className="mt-6 flex items-center gap-4 md:mt-8">
                  <Button
                    iconRight={<RxChevronRight />}
                    variant="link"
                    size="link"
                  >
                    Discover
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
