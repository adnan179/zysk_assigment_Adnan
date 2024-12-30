import Image from "next/image";
import React from "react";
import desktopImage from "../public/images/untitledui-desktop-image.png";
import mobileImage from "../public/images/untitledui-mobile-image.png";
import messagesIcon from "../public/icons/message-icon.svg";
import zapIcon from "../public/icons/zap-icon.svg";
import reportIcon from "../public/icons/report-icon.svg";

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
  return (
    <div className="mt-[100px] w-full flex flex-col gap-5 justify-center items-center">
      <div className="px-4 py-2 text-[14px] text-secondarypurple bg-Bluemagenta border border-[#E9D7FE] rounded-[36px]">
        Features
      </div>
      <h1 className="text-center text-[30px] md:text-[36px] text-gray900 font-medium">
        Cutting-edge features for advanced analytics
      </h1>
      <p className="text-center text-gray700 text-[18px] md:text-[20px]">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="w-full md:flex hidden justify-center items-center">
        <Image
          src={desktopImage}
          alt="Untitled UI"
          className="object-contain"
        />
      </div>
      <div className="w-full flex md:hidden justify-center items-center">
        <Image src={mobileImage} alt="Untitled UI" className="object-contain" />
      </div>
      <div className="w-full flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center">
        {AdvancedFeaturesData.map((f, idx) => (
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

export default AdvancedFeatures;
