"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import sisyphusIcon from "../public/icons/sisphus.svg";
import prodManagerSisyphus from "../public/icons/product-manager-sisyphus.svg";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);

const Sisyphus = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sisyphus-cont",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#sisyphus-cont > *",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: 0.4,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div
      id="sisyphus-cont"
      className="flex flex-col gap-5 w-full justify-center items-center mt-[100px]"
    >
      <div className="flex gap-3 items-center">
        <Image src={sisyphusIcon} alt="Sisyphus" className="object-contain" />
        <h3 className="text-gray900 font-semibold text-[20px]">Sisyphus</h3>
      </div>
      <h1 className="text-gray900 font-medium text-[30px] md:text-[48px] text-center px-4">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Image src={prodManagerSisyphus} alt="Candice Wu" />
        <h3 className="text-gray900 font-medium text-center">Candice Wu</h3>
        <p className="text-gray700">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Sisyphus;
