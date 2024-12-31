"use client";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(_ScrollTrigger);
const FreeTrail = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#free-trail-cont",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#free-trail-cont > h1",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    )
      .fromTo(
        "#free-trail-cont > p",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#free-trail-btns > *",
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      );
  }, []);

  return (
    <section
      id="free-trail-cont"
      className="flex flex-col w-full justify-center items-center mt-[100px] gap-4 mb-[100px]"
    >
      <h1 className="text-gray900 font-semibold text-[30px] md:text-[36px]">
        Start your free trial
      </h1>
      <p className="text-gray700 text-[18px] md:text-[20px] text-center">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      {/* btns */}
      <div
        id="free-trail-btns"
        className="flex w-full justify-center sm:flex-row flex-col-reverse gap-4"
      >
        <button className="w-full sm:w-auto flex justify-center items-center gap-4 border border-[#D0D5DD] px-8 py-4 rounded-md text-[#344054] font-semibold drop-shadow-md hover:scale-110 duration-300 ease-in-out transition-transform">
          Learn more
        </button>
        <button className="w-full sm:w-auto bg-primarypurple rounded-md text-white font-semibold px-8 py-4 drop-shadow-md border border-primarypurple shadow-inner blur-[0.2px] hover:scale-110 duration-300 ease-in-out transition-transform">
          Get started
        </button>
      </div>
    </section>
  );
};

export default FreeTrail;
