"use client";
import React, { useEffect } from "react";
import avatar from "../public/images/Avatar.png";
import avatar2 from "../public/images/Avatar4.png";
import avatar3 from "../public/images/Avatar5.png";
import blog1 from "../public/images/blog-image-1.png";
import blog2 from "../public/images/blog-image-2.png";
import blog3 from "../public/images/blog-image-3.png";
import Image from "next/image";
import linkIcon from "../public/icons/link-icon.svg";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(_ScrollTrigger);
const blogsData = [
  {
    category: "Design",
    title: "UX review presentation",
    desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    postDate: "20 Jan 2024",
    authorImage: avatar,
    blogImage: blog1,
    link: "",
  },
  {
    category: "Product",
    title: "Migrating to Linear 101",
    desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    author: "Phoenix Baker",
    postDate: "19 Jan 2024",
    authorImage: avatar2,
    blogImage: blog2,
    link: "",
  },
  {
    category: "Software Engineering",
    title: "Buidling your API stack",
    desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    author: "Lana Steiner",
    postDate: "18 Jan 2024",
    authorImage: avatar3,
    blogImage: blog3,
    link: "",
  },
];
const Blogs = () => {
  //gsap animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#blogs-cont",
        start: "top 100%",
      },
    });
    tl.fromTo(
      "#blogs-headings > *",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", delay: 0.7 }
    )
      .fromTo(
        "#blogs-p",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      )
      .fromTo(
        "#blogs > *",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut", stagger: 0.3 }
      )
      .fromTo(
        "#blogs-btn",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.inOut" }
      );
  }, []);

  return (
    <section id="blogs-cont" className="flex flex-col gap-4 mt-[100px] w-full">
      <div
        id="blogs-headings"
        className="flex flex-row w-full justify-between items-center"
      >
        <div>
          <h3 className="font-medium text-primarypurple text-[16px]">
            Our blog
          </h3>
          <h1 className="text-gray900 font-semibold text-[30px] md:text-[36px]">
            Latest blog posts
          </h1>
        </div>
        <button className="hidden md:flex bg-primarypurple border border-primarypurple px-4 py-2 text-white w-auto drop-shadow-md shadow-inner rounded-lg font-medium blur-[0.2px] hover:scale-110 duration-300 ease-in-out transition-transform">
          View all posts
        </button>
      </div>

      <p id="blogs-p" className="text-gray700 text-[18px] font-normal">
        Tool and strategies modern teams need to help their companies grow.
      </p>
      <div
        id="blogs"
        className="flex md:flex-row flex-col w-full gap-2 gap-x-4 justify-center"
      >
        {blogsData.map((bl, idx) => (
          <div
            key={idx}
            className=" md:w-1/3 h-auto w-full flex flex-col justify-between gap-4"
          >
            {/* blog details */}
            <div className="flex flex-col gap-2">
              <Image
                src={bl.blogImage}
                alt={bl.title}
                className="object-contain w-full md:w-auto"
              />
              <span className="text-primarypurple text-[14px] font-semibold">
                {bl.category}
              </span>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold md:text-[18px] text-[24px] lg:text-[24px] text-gray900">
                  {bl.title}
                </h2>
                <Image
                  src={linkIcon}
                  alt={bl.link}
                  className="object-contain cursor-pointer hover:scale-105 duration-300 ease-in-out transition-transform"
                />
              </div>

              <p className="text-gray700 font-normal text-[16px] md:text-[13px] lg:text-[16px]">
                {bl.desc}
              </p>
            </div>

            <div className="flex gap-2">
              <Image
                src={bl.authorImage}
                alt={`${bl.author}'s image`}
                className="object-contain rounded-full"
              />
              <div>
                <span className="text-gray900 text-[14px] font-semibold">
                  {bl.author}
                </span>
                <p className="text-[14px] text-gray700 font-normal">
                  {bl.postDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        id="blogs-btn"
        className="md:hidden sm-w-auto w-full flex justify-center items-center bg-primarypurple px-4 py-3 mt-5 text-white drop-shadow-md rounded-lg font-medium border border-primarypurple shadow-inner blur-[0.2px] hover:scale-110 duration-300 ease-in-out transition-transform"
      >
        View all posts
      </button>
    </section>
  );
};

export default Blogs;
