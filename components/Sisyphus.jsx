import Image from "next/image";
import React from "react";
import sisyphusIcon from "../public/icons/sisphus.svg";
import prodManagerSisyphus from "../public/icons/product-manager-sisyphus.svg";

const Sisyphus = () => {
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center mt-[100px]">
      <div className="flex gap-3 items-center">
        <Image src={sisyphusIcon} alt="Sisyphus" className="object-contain" />
        <h3 className="text-gray900">Sisyphus</h3>
      </div>
      <h1 className="text-gray900 font-medium text-[30px] md:text-[48px] text-center px-4">
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className="flex flex-col justify-center items-center">
        <Image src={prodManagerSisyphus} alt="Candice Wu" />
        <h3 className="text-gray900 font-medium text-center">Candice Wu</h3>
        <p className="text-gray700">Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Sisyphus;
