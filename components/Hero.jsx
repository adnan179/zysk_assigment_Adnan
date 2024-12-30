import Image from "next/image";
import React from "react";
import rightArrow from "../public/icons/right-arrow-icon.svg";
import playIcon from "../public/icons/play-icon.svg";
import heroImageDesktop from "../public/images/hero-image.png";

const Hero = () => {
  return (
    <section className="w-full">
      {/* hero-content */}
      <div className="flex flex-col gap-5 md:gap-10 justify-center items-center">
        {/* new feature btn */}
        <div className="flex flex-row w-auto items-center gap-2 p-1 bg-Bluemagenta border border-[#E9D7FE] rounded-[36px] pr-4">
          <div className="bg-white z-10 border border-[#D6BBFB] rounded-[48px] text-secondarypurple sm:text-[12px] text-[10px] p-2">
            New Feature
          </div>
          <h2 className="text-secondarypurple text-[12px] sm:text-[14px] font-medium">
            Check out the team dashboard
          </h2>
          <Image src={rightArrow} alt="right arrow" className="object-cover" />
        </div>
        {/* new feature btn */}
        {/* hero-heading */}
        <h1 className="text-gray900 font-bold lg:text-[3rem] text-[2.5rem] text-center">
          Beautiful analytics to grow smarter
        </h1>
        {/* hero-sub-heading */}
        <p className="w-full lg:w-[60%] font-light text-gray700 lg:text-[20px] text-[18px] text-center">
          Powerful, self-serve product and growth analytics to help you convert,
          engage,and retain more users. Trusted by over 4,000 startups.
        </p>
        {/* btns */}
        <div className="flex w-full justify-center sm:flex-row flex-col-reverse gap-4">
          <button className="w-full sm:w-auto flex justify-center items-center gap-4 border border-[#D0D5DD] px-8 py-4 rounded-md text-gray700 font-bold drop-shadow-md">
            <span>
              <Image src={playIcon} alt="demo" className="object-contain" />
            </span>
            Demo
          </button>
          <button className="w-full sm:w-auto bg-primarypurple rounded-md text-white font-bold px-8 py-4 drop-shadow-md border border-primarypurple">
            Sign up
          </button>
        </div>
      </div>
      {/* hero-content */}
      {/* hero-image */}
      <div className="mt-5 w-full h-auto border-[4px] md:border-[6px] md:border-b-0 border-gray900 rounded-lg md:shadow-none shadow-lg shadow-black/25">
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
