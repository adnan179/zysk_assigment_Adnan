"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import desktopImage from "../public/images/untitledui-desktop-image.png";
import mobileImage from "../public/images/untitledui-mobile-image.png";
import messagesIcon from "../public/icons/message-icon.svg";
import zapIcon from "../public/icons/zap-icon.svg";
import reportIcon from "../public/icons/report-icon.svg";
import rightArrow from "../public/icons/purple-arrow-right.svg";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);

//data with feature's title, desc, link and icon
const AdvancedFeaturesData = [
  {
    name: "Share team inboxes",
    desc: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    icon: messagesIcon,
  },
  {
    name: "Deliver instant answers",
    desc: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    icon: zapIcon,
  },
  {
    name: "Manage your team with reports",
    desc: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    icon: reportIcon,
  },
];
const AdvancedFeatures = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#adv-features-cont",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#features-btn",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", delay: 0.7 }
    )
      .fromTo(
        "#adv-features-cont > h1",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#adv-features-cont > p",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#adv-features-desktop-image",
        { z: 200, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      )
      .fromTo(
        "#adv-features-mobile-image",
        { z: 200, opacity: 0, scale: 0.8 },
        { z: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" }
      )
      .fromTo(
        "#adv-features > *",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      );
  }, []);
  return (
    <div
      id="adv-features-cont"
      className="mt-[100px] w-full flex flex-col gap-5 justify-center items-center"
    >
      <div
        id="features-btn"
        className="px-2 py-1 font-medium text-[14px] text-secondarypurple bg-Bluemagenta border border-[#E9D7FE] rounded-[16px] blur-[0.3px]"
      >
        Features
      </div>
      <h1 className="text-center text-[30px] md:text-[36px] text-gray900 font-semibold leading-[36px]">
        Cutting-edge features for advanced analytics
      </h1>
      <p className="text-center text-gray700 text-[18px] md:text-[20px] leading-[28px] font-normal font-inter">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div
        id="adv-features-desktop-image"
        className="w-full md:flex hidden justify-center items-center"
      >
        <Image
          src={desktopImage}
          alt="Untitled UI"
          className="object-contain"
        />
      </div>
      <div
        id="adv-features-mobile-image"
        className="w-full flex md:hidden justify-center items-center"
      >
        <Image src={mobileImage} alt="Untitled UI" className="object-contain" />
      </div>
      <div
        id="adv-features"
        className="mt-10 w-full flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center"
      >
        {AdvancedFeaturesData.map((f, idx) => (
          <div
            key={idx}
            className="w-full md:w-[300px] lg:w-[350px] h-auto flex flex-col justify-between items-center gap-[16px]"
          >
            <div className="flex flex-col justify-center items-center gap-[16px]">
              <div className="border border-[#EAECF0] rounded-md bg-white p-3 drop-shadow-sm">
                <Image src={f.icon} alt="icon" className="object-contain" />
              </div>

              <h3 className="text-gray900 font-semibold text-[18px] sm:text-[20px] text-center leading-[28px]">
                {f.name}
              </h3>
              <p className="text-gray700 text-[16px] text-center font-normal leading-[24px]">
                {f.desc}
              </p>
            </div>
            <a className="text-secondarypurple text-[16px] font-semibold flex gap-3 items-center">
              Learn more{" "}
              <span>
                <Image
                  src={rightArrow}
                  alt="learn more"
                  className="object-contain"
                />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedFeatures;
