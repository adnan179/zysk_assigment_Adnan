"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/icons/Logomark.svg";
import Link from "next/link";
import avatar from "../public/images/Avatar.png";

const Hamburger = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="sticky z-50 top-0 flex w-full justify-between items-center xl:px-16 lg:px-12 md:px-10 px-5 py-4 bg-white">
      <div className="flex items-center lg:gap-10 gap-5 text-gray700 font-medium">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="object-contain" />
          <h1 className="text-gray900 font-bold lg:text-[1.5rem] text-[1.2rem]">
            Untitled UI
          </h1>
        </div>
        {/* Links for Desktop */}
        <div className="hidden md:flex gap-4">
          <Link href="/">Home</Link>
          <select className="focus:outline-none cursor-pointer">
            <option>Products</option>
            <option>CRM Dashboard</option>
            <option>CRDM Dashboard</option>
          </select>
          <select className="focus:outline-none cursor-pointer">
            <option>Resources</option>
            <option>CRM Dashboard</option>
            <option>CRDM Dashboard</option>
          </select>
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
          <Hamburger />
        </button>
      </div>
      {/* Sidebar */}
      {sidebarOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
          {/* dropdown box */}
          <div className="absolute top-full right-0 w-60 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <div className="flex flex-col justify-start p-4 gap-4 text-gray700 font-medium">
              <Link href="/" onClick={closeSidebar}>
                Home
              </Link>
              <select
                onChange={closeSidebar}
                className="w-full bg-white focus:outline-none"
              >
                <option>Products</option>
                <option>CRM Dashboard</option>
                <option>CRDM Dashboard</option>
              </select>
              <select
                onChange={closeSidebar}
                className="w-full bg-white focus:outline-none"
              >
                <option>Resources</option>
                <option>CRM Dashboard</option>
                <option>CRDM Dashboard</option>
              </select>
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
