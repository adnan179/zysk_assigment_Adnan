"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import rightArrow from "../public/icons/right-arrow-icon.svg";
import playIcon from "../public/icons/play-icon.svg";
import heroImageDesktop from "../public/images/hero-image.png";
import gsap from "gsap";

const Hero = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      "#new-feature-btn",
      { z: 200, opacity: 0, scale: 0.8 },
      {
        z: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.5,
      }
    )
      .fromTo(
        "#hero-heading",
        { z: 200, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      )
      .fromTo(
        "#hero-sub-heading",
        { z: 200, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      )
      .fromTo(
        "#hero-btns > *",
        { z: 200, opacity: 0, scale: 0.8 },
        {
          z: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.3,
        }
      )
      .fromTo(
        "#hero-image",
        { z: 200, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      );
  }, []);

  return (
    <section className="w-full mt-[50px]">
      {/* hero-content */}
      <div className="flex flex-col gap-5 md:gap-10 justify-center items-center">
        {/* new feature btn */}
        <div
          id="new-feature-btn"
          className="flex flex-row w-auto items-center gap-2 p-1 bg-Bluemagenta border border-[#E9D7FE] rounded-[36px] pr-4 blur-[0.3px]"
        >
          <div className="flex justify-center items-center bg-white font-medium z-10 border border-[#D6BBFB] rounded-[64px] text-secondarypurple text-[10px] sm:text-[12px] md:px-4 md:py-2 px-2 py-1">
            New feature
          </div>
          <h2 className="text-secondarypurple text-[10px] sm:text-[12px] font-medium">
            Check out the team dashboard
          </h2>
          <Image src={rightArrow} alt="right arrow" className="object-cover" />
        </div>
        {/* new feature btn */}
        {/* hero-heading */}
        <h1
          id="hero-heading"
          className="text-gray900 font-semibold lg:text-[3rem] text-[2.5rem] text-center leading-[44px]"
        >
          Beautiful analytics to grow smarter
        </h1>
        {/* hero-sub-heading */}
        <p
          id="hero-sub-heading"
          className="w-full lg:w-[60%] text-gray700 lg:text-[20px] text-[18px] text-center leading-[28px]"
        >
          Powerful, self-serve product and growth analytics to help you convert,
          engage,and retain more users. Trusted by over 4,000 startups.
        </p>
        {/* btns */}
        <div
          id="hero-btns"
          className="flex w-full justify-center sm:flex-row flex-col-reverse gap-4"
        >
          <button className="w-full sm:w-auto flex justify-center items-center gap-4 border border-[#D0D5DD] px-8 py-4 rounded-md text-gray700 font-bold drop-shadow-md blur-[0.2px] hover:scale-110 duration-300 ease-in-out transition-transform">
            <span>
              <Image src={playIcon} alt="demo" className="object-contain" />
            </span>
            Demo
          </button>
          <button className="w-full sm:w-auto bg-primarypurple rounded-md text-white font-bold px-8 py-4 drop-shadow-md border border-primarypurple blur-[0.2px] hover:scale-110 duration-300 ease-in-out transition-transform">
            Sign up
          </button>
        </div>
      </div>
      {/* hero-content */}
      {/* hero-image */}
      <div
        id="hero-image"
        className="mt-[60px] w-full h-auto border-[4px] md:border-[6px] md:border-b-0 border-gray900 rounded-lg md:shadow-none shadow-lg shadow-black/25"
      >
        <Image
          src={heroImageDesktop}
          alt="hero image"
          className="object-cover w-full h-full"
        />
      </div>
      {/* hero-image */}
    </section>
  );
};

export default Hero;
