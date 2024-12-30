import React from "react";

const FreeTrail = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center mt-[100px] gap-4 mb-[100px]">
      <h1 className="text-gray900 font-semibold text-[30px] md:text-[36px]">
        Start your free trial
      </h1>
      <p className="text-gray700 text-[18px] md:text-[20px] text-center">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      {/* btns */}
      <div className="flex w-full justify-center sm:flex-row flex-col-reverse gap-4">
        <button className="w-full sm:w-auto flex justify-center items-center gap-4 border border-[#D0D5DD] px-8 py-4 rounded-md text-[#344054] font-bold drop-shadow-md">
          Learn more
        </button>
        <button className="w-full sm:w-auto bg-primarypurple rounded-md text-white font-bold px-8 py-4 drop-shadow-md border border-primarypurple">
          Get started
        </button>
      </div>
    </section>
  );
};

export default FreeTrail;
