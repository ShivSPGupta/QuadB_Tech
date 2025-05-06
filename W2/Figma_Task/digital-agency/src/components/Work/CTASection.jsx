"use client";
import React from "react";

const CTASection = () => {
  return (
    <div className="flex overflow-hidden relative z-10 flex-col items-center px-6 sm:px-12 md:px-24 lg:px-64 py-12 sm:py-16 md:py-24 w-full max-w-[1282px] min-h-[400px] sm:min-h-[509px]">
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Work/CTASection/CTA%20Background.png"
        className="object-cover absolute inset-0 size-full"
        alt="CTA background"
      />
      <img
        src="https://shivshankar1201.sirv.com/digital-agency/Work/CTASection/Icon.svg"
        className="object-contain absolute top-12 shadow-sm aspect-square fill-lime-400 w-[40px] sm:w-[50px] md:w-[60px]"
        alt="Icon"
      />
      <div className="relative self-stretch mt-6 sm:mt-8 md:mt-10 w-full text-center">
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          Let us Bring your Ideas to Life in the Digital World.
        </div>
        <div className="mt-2.5 text-sm sm:text-base tracking-normal leading-5 sm:leading-6 text-neutral-200">
          No matter which services you choose, we are committed to delivering
          exceptional results that exceed your expectations. Our
          multidisciplinary team works closely together to ensure seamless
          collaboration and a unified vision for your digital product.
        </div>
      </div>
      <button className="relative gap-2 self-stretch sm:self-auto px-4 sm:px-6 py-2.5 sm:py-3.5 mt-6 sm:mt-8 md:mt-10 text-sm font-medium bg-lime-400 rounded-md text-zinc-900">
        Start Project
      </button>
    </div>
  );
};

export default CTASection;