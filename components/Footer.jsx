"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import logo from "../public/icons/Logomark.svg";
import Image from "next/image";
import { footerData } from "./data/footerLinksData";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);

const Footer = () => {
  //data to add new tag to the links
  const newData = ["Solutions"];
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#footer",
      { y: 150, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);
  return (
    <footer
      id="footer"
      className="bottom-0 flex flex-col gap-10 justify-center items-center w-full xl:px-16 lg:px-12 md:px-10 px-5 pb-[50px]"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full justify-between lg:gap-10 md:gap-7 gap-5">
        {footerData.map((fd, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <span className="text-[14px] font-semibold text-[#667085]">
              {fd.category}
            </span>
            <ul className="flex flex-col gap-2">
              {fd.links.map((l, i) => (
                <li
                  key={i}
                  className="flex gap-2 cursor-pointer text-[16px] font-semibold text-gray700"
                >
                  <Link href={l.link}>{l.name}</Link>
                  {newData.includes(l.name) && (
                    <span className="blur-[0.4px] bg-[#ECFDF3] border border-[#ABEFC6] px-2 py-1 font-medium text-[12px] text-[#067647] rounded-[16px]">
                      New
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 w-full justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image src={logo} alt="logo" className="object-contain" />
          <h2 className="text-gray900 font-semibold text-[20px]">
            Untitled UI
          </h2>
        </div>
        <p className="text-[#667085] font-light text-[16px]">
          © 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
