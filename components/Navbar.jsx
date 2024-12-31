"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/icons/Logomark.svg";
import Link from "next/link";
import avatar from "../public/images/Avatar.png";
import DropdownMenu from "./DropdownMenu";
import HamburgerIcon from "../public/icons/hamburger-icon.svg";
import gsap from "gsap";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
    );
  }, []);

  return (
    <nav
      id="navbar"
      className="sticky z-50 top-0 flex w-full justify-between items-center xl:px-16 lg:px-12 md:px-10 px-5 py-4 bg-white
    border-b border-[#F2F4F7]"
    >
      <div className="flex items-center lg:gap-10 gap-5 text-gray700 font-medium">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image src={logo} alt="logo" className="object-contain" />
          <h1 className="text-gray900 font-bold lg:text-[1.5rem] text-[1.2rem]">
            Untitled UI
          </h1>
        </Link>
        {/* Links for Desktop */}
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <DropdownMenu />
          <Link href="/">Pricing</Link>
        </div>
      </div>
      {/* Avatar */}
      <div className="hidden md:flex">
        <Image
          src={avatar}
          alt="profile image"
          className="rounded-full object-cover"
        />
      </div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={toggleSidebar}
          className="text-gray600 focus:outline-none z-50"
        >
          <Image
            src={HamburgerIcon}
            alt="hamburger-icon"
            className="object-contain"
          />
        </button>
      </div>
      {/* Sidebar */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div onClick={closeSidebar} className="fixed inset-0 z-40"></div>
          {/* dropdown box */}
          <div className="absolute top-14 right-0 w-60 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <div className="flex flex-col justify-start p-4 gap-4 text-gray700 font-medium">
              <Link href="/" onClick={closeSidebar}>
                Home
              </Link>
              <DropdownMenu />
              <Link href="/" onClick={closeSidebar}>
                Pricing
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
