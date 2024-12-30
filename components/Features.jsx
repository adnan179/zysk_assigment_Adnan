import React from "react";
import messagesIcon from "../public/icons/message-icon.svg";
import smileIcon from "../public/icons/smile-icon.svg";
import zapIcon from "../public/icons/zap-icon.svg";
import reportIcon from "../public/icons/report-icon.svg";
import toolsIcon from "../public/icons/tools-icon.svg";
import peopleIcon from "../public/icons/people-icon.svg";
import Image from "next/image";

const featuresData = [
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
  {
    name: "Connect with customers",
    desc: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    icon: smileIcon,
  },
  {
    name: "Connect with tools you already use",
    desc: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    icon: toolsIcon,
  },
  {
    name: "Our people make the difference",
    desc: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    icon: peopleIcon,
  },
];
const Features = () => {
  return (
    <div className="flex flex-col w-full gap-5 justify-center items-center mt-[100px]">
      <h2 className="text-gray700 font-bold text-[16px]">Features</h2>
      <h1 className="text-gray900 font-semibold text-[30px] sm:text-[36px] text-center">
        Analytics that feels like it’s from the future
      </h1>
      <p className="font-light text-gray700 text-center text-[18px] sm:text-[20px]">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="w-full flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center">
        {featuresData.map((f, idx) => (
          <div
            key={idx}
            className="w-full md:w-[300px] lg:w-[350px] flex flex-col justify-center items-center gap-3"
          >
            <div className="border border-[#EAECF0] rounded-md bg-white p-3 drop-shadow-sm">
              <Image src={f.icon} alt="icon" className="object-contain" />
            </div>

            <h3 className="text-gray900 font-semibold text-[18px] sm:text-[20px] text-center">
              {f.name}
            </h3>
            <p className="text-gray700 text-[16px] text-center font-light">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
