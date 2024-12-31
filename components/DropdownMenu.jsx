"use client";
import React, { useState } from "react";
import { NavData } from "./data/navLinksData";
import downArrow from "../public/icons/down-arrow.svg";
import Image from "next/image";

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <div className="flex md:flex-row flex-col gap-5 md:items-center">
      {NavData.map((item, idx) => (
        <div key={idx} className="relative">
          {/* Dropdown Trigger */}
          <button
            className="text-gray700 hover:text-gray-500 flex gap-3 items-center"
            onClick={() => toggleDropdown(item.category)}
          >
            {item.category}
            <span
              className={`${
                activeDropdown === item.category ? "rotate-180" : ""
              }`}
            >
              <Image
                src={downArrow}
                alt="down-arrow"
                className="object-contain"
              />
            </span>
          </button>
          {/* Dropdown Content */}
          {activeDropdown === item.category && (
            <div
              className="flex flex-row flex-wrap absolute top-8 right-0 md:left-0 bg-white shadow-lg rounded-lg w-[400px] z-30"
              onClick={() => setActiveDropdown(null)}
            >
              <ul className="flex flex-col py-2">
                {item.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="px-4 py-2 hover:bg-secondarypurple text-gray600 hover:text-white cursor-pointer"
                  >
                    <a href={link.link}>
                      <span className="font-semibold text-[12px]">
                        {link.name}
                      </span>
                      <p className="text-gray-400 text-[10px]">{link.desc}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
