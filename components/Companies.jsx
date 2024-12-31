"use client";
import React, { useEffect } from "react";
import boltshift from "../public/icons/boltshift.svg";
import lightbox from "../public/icons/lightbox.svg";
import featherdev from "../public/icons/featherdev.svg";
import globalbank from "../public/icons/globalbank.svg";
import spherule from "../public/icons/spherule.svg";
import nietzsche from "../public/icons/nietzsche.svg";
import Image from "next/image";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);

//data for companies with name and image
const companiesData = [
  {
    name: "Boltshift",
    icon: boltshift,
  },
  {
    name: "Lightbox",
    icon: lightbox,
  },
  {
    name: "Featherdev",
    icon: featherdev,
  },
  {
    name: "Spherule",
    icon: spherule,
  },
  {
    name: "Globalbank",
    icon: globalbank,
  },
  {
    name: "Nietzsche",
    icon: nietzsche,
  },
];

const Companies = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#companies-cont",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#companies-cont > p",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.inOut" }
    ).fromTo(
      "#companies > *",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
    );
  });
  return (
    <div
      id="companies-cont"
      className="flex flex-col w-full justify-center mt-[100px] gap-10"
    >
      <p className="text-gray700 text-center text-[16px] font-medium">
        Join 4,000+ companies already growing
      </p>
      <div
        id="companies"
        className="flex gap-8 flex-wrap justify-center items-start"
      >
        {companiesData.map((c, idx) => (
          <div key={idx} className="flex gap-3 items-center">
            <Image src={c.icon} alt={c.name} className="object-contain" />
            <h2 className="text-gray900 font-bold">{c.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
