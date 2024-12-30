"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import avatar from "../public/images/Avatar.png";
import avatar2 from "../public/images/Avatar2.png";
import avatar3 from "../public/images/Avatar3.png";

const questions = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];
const PlusIcon = () => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10.5V18.5M8 14.5H16M22 14.5C22 20.0228 17.5228 24.5 12 24.5C6.47715 24.5 2 20.0228 2 14.5C2 8.97715 6.47715 4.5 12 4.5C17.5228 4.5 22 8.97715 22 14.5Z"
        stroke="#98A2B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MinusIcon = () => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14.5H16M22 14.5C22 20.0228 17.5228 24.5 12 24.5C6.47715 24.5 2 20.0228 2 14.5C2 8.97715 6.47715 4.5 12 4.5C17.5228 4.5 22 8.97715 22 14.5Z"
        stroke="#98A2B3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FrequentlyAsked = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-3 w-full justify-center items-center mt-[100px]">
      <h1 className="md:text-[36px] text-[30px] text-gray900 font-semibold text-center">
        Frequently asked questions
      </h1>
      <p className="text-gray700 text-[18px] md:text-[20px] text-center">
        Everything you need to know about the product and billing.
      </p>
      {questions.map((qn, idx) => (
        <Accordion
          key={idx}
          expanded={expandedIndex === idx}
          onChange={() => handleAccordionToggle(idx)}
          style={{
            boxShadow: "none",
            border: "none",
            marginBottom: "10px",
          }}
        >
          <AccordionSummary
            expandIcon={expandedIndex === idx ? <MinusIcon /> : <PlusIcon />}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            style={{
              backgroundColor: "transparent",
              padding: "10px 15px",
              color: "#101828",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            <Typography component="span">{qn.question}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              padding: "10px 15px",
              color: "#475467",
              fontSize: "16px",
              fontWeight: "200",
            }}
          >
            {qn.answer}
          </AccordionDetails>
        </Accordion>
      ))}
      <div className="flex flex-col gap-3 w-full justify-center items-center">
        <div className="flex items-center">
          <Image
            src={avatar2}
            alt="profile images"
            className="rounded-full object-contain w-14 h-14 -ml-2 z-10"
          />
          <Image
            src={avatar}
            alt="profile images"
            className="rounded-full object-contain z-20 relative w-14 h-14 -ml-4"
          />
          <Image
            src={avatar3}
            alt="profile images"
            className="rounded-full object-contain h-14 w-14 -ml-4 z-10"
          />
        </div>
        <h3 className="text-gray900 text-[20px] font-semibold">
          Still have questions?
        </h3>
        <p className="sm:text-[18px] text-[16px] text-gray700 text-center">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="flex w-auto bg-primarypurple px-6 py-4 rounded-lg drop-shadow text-white font-medium">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default FrequentlyAsked;
