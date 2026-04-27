"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@relume_io/relume-ui";
import React, { Fragment } from "react";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { RxPlus } from "react-icons/rx";

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

export function ProductHeader5() {
  return (
    <header id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1.25fr_1fr] lg:gap-x-20">
          <Fragment>
            <div className="block lg:hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
                className="aspect-[5/4] size-full object-cover"
              />
            </div>
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 1"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 2"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 3"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 4"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 5"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 6"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
              <div className="first:lg:col-span-2">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder image 7"
                  className="aspect-[5/4] size-full object-cover"
                />
              </div>
            </div>
          </Fragment>
          <div>
            <div className="xl:sticky xl:top-32">
              <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
                <BreadcrumbList>
                  <Fragment>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Properties</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </Fragment>
                  <Fragment>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Makati</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </Fragment>
                  <Fragment>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Luxury penthouse</BreadcrumbLink>
                    </BreadcrumbItem>
                  </Fragment>
                </BreadcrumbList>
              </Breadcrumb>
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between md:mb-6">
                  <h1 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
                    Luxury penthouse
                  </h1>
                  <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
                    ₱45,000,000
                  </p>
                </div>
                <div className="mb-5 flex flex-wrap items-center gap-3 md:mb-6">
                  <Star rating={3.5} />
                  <p className="text-sm">Verified by PRC • Licensed broker</p>
                </div>
                <p className="mb-5 md:mb-6">
                  This property represents the pinnacle of Manila's residential
                  market. Floor-to-ceiling windows frame the city skyline while
                  premium finishes define every room.
                </p>
                <form className="mb-4">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                      <Label className="mb-2">Bathrooms</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first-choice">
                            Option One
                          </SelectItem>
                          <SelectItem value="second-choice">
                            Option Two
                          </SelectItem>
                          <SelectItem value="third-choice">
                            Option Three
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col">
                      <Label className="mb-2">Bathrooms</Label>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="#"
                          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-4 py-2"
                        >
                          4 bedrooms
                        </a>
                        <a
                          href="#"
                          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2"
                        >
                          3 bathrooms
                        </a>
                        <a
                          href="#"
                          className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2 pointer-events-none opacity-25"
                        >
                          Maid's quarters
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Label htmlFor="quantity" className="mb-2">
                        Quantity
                      </Label>
                      <Input
                        type="number"
                        id="quantity"
                        placeholder="1"
                        className="w-16"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-8 flex flex-col gap-y-4">
                    <Button title="Submit inquiry">Submit inquiry</Button>
                    <Button title="Schedule viewing" variant="secondary">
                      Schedule viewing
                    </Button>
                  </div>
                  <p className="text-center text-xs">
                    Verified broker response within 24 hours
                  </p>
                </form>
                <Accordion type="multiple">
                  <AccordionItem value="item-0">
                    <AccordionTrigger
                      className="py-4 font-semibold md:text-md"
                      icon={
                        <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                      }
                    >
                      Specifications
                    </AccordionTrigger>
                    <AccordionContent className="md:pb-6">
                      Standard closing timeline is 30 to 60 days pending
                      documentation and financing approval. Your broker
                      coordinates with legal counsel to ensure a smooth
                      transaction from inquiry to keys.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-1">
                    <AccordionTrigger
                      className="py-4 font-semibold md:text-md"
                      icon={
                        <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                      }
                    >
                      Viewing
                    </AccordionTrigger>
                    <AccordionContent className="md:pb-6">
                      Standard closing timeline is 30 to 60 days pending
                      documentation and financing approval. Your broker
                      coordinates with legal counsel to ensure a smooth
                      transaction from inquiry to keys.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger
                      className="py-4 font-semibold md:text-md"
                      icon={
                        <RxPlus className="size-6 shrink-0 text-text-primary transition-transform duration-300" />
                      }
                    >
                      Closing
                    </AccordionTrigger>
                    <AccordionContent className="md:pb-6">
                      Standard closing timeline is 30 to 60 days pending
                      documentation and financing approval. Your broker
                      coordinates with legal counsel to ensure a smooth
                      transaction from inquiry to keys.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
