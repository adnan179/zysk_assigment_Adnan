import Link from "next/link";
import React from "react";
import logo from "../public/icons/Logomark.svg";
import Image from "next/image";

const footerData = [
  {
    category: "Product",
    links: [
      {
        name: "Overview",
        link: "",
      },
      {
        name: "Features",
        link: "",
      },
      {
        name: "Solutions",
        link: "",
      },
      {
        name: "Tutorials",
        link: "",
      },
      {
        name: "Pricing",
        link: "",
      },
      {
        name: "Releases",
        link: "",
      },
    ],
  },
  {
    category: "Company",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Careers",
        link: "",
      },
      {
        name: "Press",
        link: "",
      },
      {
        name: "News",
        link: "",
      },
      {
        name: "Media kit",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
    ],
  },
  {
    category: "Resources",
    links: [
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Newsletter",
        link: "",
      },
      {
        name: "Events",
        link: "",
      },
      {
        name: "Help centre",
        link: "",
      },
      {
        name: "Tutorials",
        link: "",
      },
      {
        name: "Support",
        link: "",
      },
    ],
  },
  {
    category: "Usecases",
    links: [
      {
        name: "Startups",
        link: "",
      },
      {
        name: "Enterprise",
        link: "",
      },
      {
        name: "Government",
        link: "",
      },
      {
        name: "SaaS centre",
        link: "",
      },
      {
        name: "Marketplaces",
        link: "",
      },
      {
        name: "Ecommerce",
        link: "",
      },
    ],
  },
  {
    category: "Social",
    links: [
      {
        name: "Twitter",
        link: "",
      },
      {
        name: "LinkedIn",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Github",
        link: "",
      },
      {
        name: "AngelList",
        link: "",
      },
      {
        name: "Dribbble",
        link: "",
      },
    ],
  },
  {
    category: "Legal",
    links: [
      {
        name: "Terms",
        link: "",
      },
      {
        name: "Privacy",
        link: "",
      },
      {
        name: "Cookies",
        link: "",
      },
      {
        name: "Licenses",
        link: "",
      },
      {
        name: "Settings",
        link: "",
      },
      {
        name: "Contact",
        link: "",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col gap-10 justify-center items-center w-full xl:px-16 lg:px-12 md:px-10 px-5">
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
                  className="cursor-pointer text-[16px] font-semibold text-gray700"
                >
                  <Link href={l.link}>{l.name}</Link>
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
