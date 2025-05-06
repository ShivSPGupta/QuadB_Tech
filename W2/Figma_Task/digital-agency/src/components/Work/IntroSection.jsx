"use client";
import React from "react";

const IntroSection = () => {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-10 w-full">
      <div className="pr-4 sm:pr-16 md:pr-32 lg:pr-64 w-full">
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
          At SquareUp
        </div>
        <div className="mt-2.5 text-sm sm:text-base tracking-normal text-neutral-200">
          We have had the privilege of working with a diverse range of
          clients and delivering exceptional digital products that drive
          success.
        </div>
      </div>
      <div className="gap-2.5 self-start p-2.5 mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg text-white rounded-md bg-neutral-800">
        Here are ten examples of our notable works:
      </div>
    </div>
  );
};

export default IntroSection;